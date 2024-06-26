<?php
/**
 * Created by PhpStorm.
 * User: dench
 * Date: 21.01.18
 * Time: 13:33
 */

namespace siripravi\shopcart\models;
use app\modules\shopcart\models\Buyer;
use siripravi\ecommerce\models\Article;
use Exception;

use Yii;
use yii\base\Model;
use yii\helpers\Url;

class OrderForm extends Model
{
    public $name;
    public $phone;
    public $email;
    public $delivery_id;
    public $delivery;
    public $payment_id;
    public $entity;
    public $reCaptcha;
    public $comment;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'phone'], 'required'],
            [['delivery_id', 'payment_id'], 'integer'],
            [['name', 'phone', 'email', 'delivery', 'comment'], 'string'],
            ['email', 'email'],
            [['entity'], 'boolean'],
           /* ['reCaptcha', ReCaptchaValidator2::class, 'skipOnEmpty' => YII_DEBUG ? true : false, 'uncheckedMessage' => Yii::t('app', 'Please confirm that you are not a bot.')],*/
        ];
    }

    public function scenarios()
    {
        return [
            'admin' => ['name', 'phone', 'email', 'delivery_id', 'delivery', 'payment_id', 'entity', 'comment'],
            'user' => ['name', 'phone', 'email', 'delivery_id', 'delivery', 'payment_id', 'entity', 'comment', 'reCaptcha'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'name' => Yii::t('app', 'Full Name'),
            'phone' => Yii::t('app', 'Contact phone'),
            'email' => Yii::t('app', 'Your E-mail'),
            'delivery_id' => Yii::t('app', 'Choose the appropriate delivery method'),
            'delivery' => Yii::t('app', 'Delivery address'),
            'payment_id' => Yii::t('app', 'Select the appropriate method of payment'),
            'entity' => Yii::t('app', 'Buyer is'),
            'comment' => Yii::t('app', 'Comments to the order'),
        ];
    }

    public function send()
    {
        $this->phone = Buyer::clearPhone($this->phone);

        $buyer = Buyer::findOne(['phone' => $this->phone]);

        if (empty($buyer)) {
            $buyer = new Buyer();
        }

        $buyer->name = ($this->name && $buyer->name != $this->name) ? $this->name : $buyer->name;
        $buyer->phone = ($this->phone && $buyer->phone != $this->phone) ? $this->phone : $buyer->phone;
        $buyer->delivery = ($this->delivery && $buyer->delivery != $this->delivery) ? $this->delivery : $buyer->delivery;
        $buyer->email = ($this->email && $buyer->email != $this->email) ? $this->email : $buyer->email;
        $buyer->entity = ($this->entity != null && $buyer->entity != $this->entity) ? $this->entity : $buyer->entity;

        if ($buyer->save()) {

            $cart = Cart::getCart();

            $product_ids = [];
            $amount = 0;

            $cartItemName = [];
            $cartItemCount = [];
            $cartItemPrice = [];
            $cartItemFeatures = [];

            foreach ($cart as $k => $v) {
                /** @var $item Variant */
                $item = Article::find()->where(['id' => $v['pid'], 'enabled' => true])->one();
                if ($item) {
                    $cartItemName[$k] = $item->product->name . ($item->name ? ', ' . $item->name : null);
                    $cartItemCount[$k] = $v['qty'];
                    $cartItemPrice[$k] = $v['price'];
                    $cartItemFeature[$k] = $k;
                   $cartItemProduct[$k] = $v['pid'];
                    $amount += $v['qty'] *  $v['price'];
                }
            }

            $status = Order::STATUS_NEW;

            $payments = Payment::find()->select('id')->where(['type' => [Payment::TYPE_LIQPAY, Payment::TYPE_WFP]])->column();

            if (in_array($this->payment_id, $payments)) {
                $status = Order::STATUS_AWAITING;
            }

            $order = new Order([
                'buyer_id' => $buyer->id,
              //  'product_ids' => $product_ids,
                'amount' => $amount,
                'phone' => $this->phone,
                'email' => $this->email,
                'delivery' => $this->delivery,
                'delivery_id' => $this->delivery_id,
                'payment_id' => $this->payment_id,
                'status' => $status,
                'comment' => $this->comment,
            ]);

         /*   $order->cartItemName = $cartItemName;
            $order->cartItemProduct = $cartItemProduct;
            $order->cartItemCount = $cartItemCount;
            $order->cartItemPrice = $cartItemPrice;
            $order->cartItemFeature = $cartItemFeature;*/
           // echo "<pre>";
           // print_r( $order->cartItemFeatures);


        //    die;
            if ($order->save()) {
                foreach($cartItemName as $i => $v){
                    $orderProduct = new OrderProduct();
                    $orderProduct->order_id = $order->id;
                    $orderProduct->article_id = $cartItemProduct[$i];
                    $orderProduct->name = $cartItemName[$i];
                    $orderProduct->price = $cartItemPrice[$i];
                    $orderProduct->count = $cartItemCount[$i];
                    $orderProduct->features = $cartItemFeature[$i];
                    $orderProduct->save();
                   }
                Cart::clearCart();

             /*   try {
                    Yii::$app->mailer->compose()
                        ->setFrom([isset(Yii::$app->params['fromEmail']) ? Yii::$app->params['fromEmail'] : Yii::$app->params['adminEmail'] => Yii::$app->name])
                        ->setTo(isset(Yii::$app->params['toEmail']) ? Yii::$app->params['toEmail'] : Yii::$app->params['adminEmail'])
                        ->setSubject('Заказ № ' . $order->id)
                        ->setTextBody(Url::to(['/admin/cart/order-product', 'order_id' => $order->id], 'https'))
                        ->send();
                } catch (Exception $e) {
                    Yii::$app->mailer2->compose()
                        ->setFrom([isset(Yii::$app->params['fromEmail']) ? Yii::$app->params['fromEmail'] : Yii::$app->params['adminEmail'] => Yii::$app->name])
                        ->setTo(isset(Yii::$app->params['toEmail']) ? Yii::$app->params['toEmail'] : Yii::$app->params['adminEmail'])
                        ->setSubject('Ошибка отправки почты. ' . 'Заказ № ' . $order->id)
                        ->setTextBody('Ошибка отправки почты, сообщите разработчику. ' . Url::to(['/admin/cart/order-product', 'order_id' => $order->id], 'https'))
                        ->send();
                }
                */

                return $order->id;
            }
        }

        return false;
    }
}