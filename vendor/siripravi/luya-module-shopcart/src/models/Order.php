<?php

namespace siripravi\shopcart\models;

use Yii;
use luya\admin\ngrest\base\NgRestModel;
use voskobovich\linker\LinkerBehavior;
use app\modules\shopcart\models\Buyer;
use app\modules\shopcart\models\Payment;
use app\modules\shopcart\models\Delivery;
use app\modules\shopcart\models\OrderProduct;
use siripravi\ecommerce\models\Article;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;
use yii\helpers\Url;
/**
 * Order.
 * 
 * File has been created with `crud/create` command. 
 *
 * @property integer $id
 * @property integer $buyer_id
 * @property integer $amount
 * @property string $phone
 * @property string $email
 * @property string $delivery
 * @property integer $delivery_id
 * @property integer $payment_id
 * @property text $text
 * @property text $comment
 * @property integer $created_at
 * @property smallint $status
 */
class Order extends NgRestModel
{
    public $cartItemName = [];
    public $cartItemCount = [];
    public $cartItemPrice = [];

    public $cartItemProduct = [];
    public $cartItemFeature = [];

    const STATUS_NEW = 1;
    const STATUS_VIEWED = 2;
    const STATUS_COMPLETED = 3;
    const STATUS_CANCELED = 4;
    const STATUS_AWAITING = 5;
    const STATUS_PAID = 6;
    const STATUS_ERROR = 7;
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%order}}';
    }

        public function extraFields()
    {
        return ['cartItemName','cartItemCount','cartItemPrice','cartItemFeature'];  //adminSets
    }

    public function getCartItemName(){
        return $this->cartItemName;
    }

    public function ngRestExtraAttributeTypes()
    {
        return [
           'cartItemName' => 'array',
           'cartItemCount' => 'array',
           'cartItemPrice' => 'array',
           'cartItemFeature' => 'array'
        ];
    }     
    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::class,
                'createdAtAttribute' => 'created_at',
             //   'updatedAtAttribute' => 'updated_at',
                'value' => new Expression('NOW()'),
            ],
        /*    [
                'class' => LinkerBehavior::class,
                'relations' => [
                    'product_ids' => [
                        'products',
                        'updater' => [
                            'viaTableAttributesValue' => [
                                'name' => function($updater, $relatedPk, $rowCondition) {
                                    $primaryModel = $updater->getBehavior()->owner;
                                    return @$primaryModel->cartItemName[$relatedPk];
                                },
                                'count' => function($updater, $relatedPk, $rowCondition) {
                                    $primaryModel = $updater->getBehavior()->owner;
                                    return @$primaryModel->cartItemCount[$relatedPk];
                                },
                                'price' => function($updater, $relatedPk, $rowCondition) {
                                    $primaryModel = $updater->getBehavior()->owner;
                                    return @$primaryModel->cartItemPrice[$relatedPk];
                                },
                            ],
                        ],
                    ],
                ],
               
            ],   */
        ];
    }
    /**
     * @inheritdoc
     */
    public static function ngRestApiEndpoint()
    {
        return 'api-cart-order';
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'buyer_id' => Yii::t('app', 'Buyer ID'),
            'amount' => Yii::t('app', 'Amount'),
            'phone' => Yii::t('app', 'Phone'),
            'email' => Yii::t('app', 'Email'),
            'delivery' => Yii::t('app', 'Delivery'),
            'delivery_id' => Yii::t('app', 'Delivery ID'),
            'payment_id' => Yii::t('app', 'Payment ID'),
            'text' => Yii::t('app', 'Text'),
            'comment' => Yii::t('app', 'Comment'),
            'created_at' => Yii::t('app', 'Created At'),
            'status' => Yii::t('app', 'Status'),
        ];
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
       /* return [
            [['buyer_id', 'amount', 'delivery_id', 'payment_id', 'created_at', 'status'], 'integer'],
            [['amount', 'created_at'], 'required'],
            [['text', 'comment'], 'string'],
            [['phone'], 'string', 'max' => 12],
            [['email', 'delivery'], 'string', 'max' => 255],
        ];*/

        return [
            [['buyer_id', 'amount',  'phone'], 'required'],
            [['buyer_id', 'amount', 'status', 'delivery_id', 'payment_id'], 'integer'],
            [['text','comment'], 'string'],
            [['email', 'delivery'], 'string', 'max' => 255],
            [['phone'], 'string', 'max' => 20],
            ['status', 'default', 'value' => self::STATUS_NEW],
            ['status', 'in', 'range' => [self::STATUS_NEW, self::STATUS_VIEWED, self::STATUS_COMPLETED, self::STATUS_CANCELED, self::STATUS_AWAITING, self::STATUS_PAID, self::STATUS_ERROR]],
          //  [['product_ids'], 'each', 'rule' => ['integer']],
            [['buyer_id'], 'exist', 'skipOnError' => true, 'targetClass' => Buyer::class, 'targetAttribute' => ['buyer_id' => 'id']],
            [['delivery_id'], 'exist', 'skipOnError' => true, 'targetClass' => Delivery::class, 'targetAttribute' => ['delivery_id' => 'id']],
            [['payment_id'], 'exist', 'skipOnError' => true, 'targetClass' => Payment::class, 'targetAttribute' => ['payment_id' => 'id']],

            [['cartItemName'],'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function ngRestAttributeTypes()
    {
        return [
            'buyer_id' => 'number',
            'amount' => 'number',
            'phone' => 'text',
            'email' => 'text',
            'delivery' => 'text',
            'delivery_id' => 'number',
            'payment_id' => 'number',
            'text' => 'textarea',
            'comment' => 'textarea',
            'created_at' => 'number',
            'status' => 'number',
        ];
    }

    /**
     * @inheritdoc
     */
    public function ngRestScopes()
    {
        return [
            ['list', ['buyer_id', 'amount', 'phone', 'email', 'delivery', 'delivery_id', 'payment_id', 'text', 'comment', 'created_at', 'status']],
            [['create', 'update'], ['buyer_id', 'amount', 'phone', 'email', 'delivery', 'delivery_id', 'payment_id', 'text', 'comment',  'status']],
            ['delete', false],
        ];
    }

    
    /**
     * @return yii\db\ActiveQuery
     */
    public function getBuyer()
    {
        return $this->hasOne(Buyer::class, ['id' => 'payment_id']);
    }

    /**
     * @return yii\db\ActiveQuery
     */
    public function getDelivery()
    {
        return $this->hasOne(Delivery::class, ['id' => 'delivery_id']);
    }

    
    /**
     * @return yii\db\ActiveQuery
     */
    public function getPayment()
    {
        return $this->hasOne(Payment::class, ['id' => 'payment_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getOProducts()
    {
        return $this->hasMany(Article::class, ['id' => 'article_id'])->viaTable('order_product', ['order_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getProducts()
    {
        return $this->hasMany(OrderProduct::class, ['order_id' => 'id']);
    }

    public static function unread()
    {
        return self::find()->where(['status' => [self::STATUS_NEW, self::STATUS_AWAITING]])->count();
    }

    public static function read($id = null)
    {
        if ($order = self::findOne($id)) {
            if ($order->status === Order::STATUS_NEW) {
                $order->status = self::STATUS_VIEWED;
                $order->save();
            }
        }
    }


    public static function statusList()
    {
        return [
            self::STATUS_NEW => 'New',
            self::STATUS_VIEWED => 'In Processing',
            self::STATUS_COMPLETED => 'Completed',
            self::STATUS_CANCELED => 'Cancelled',
            self::STATUS_AWAITING => 'Awaiting payment',
            self::STATUS_PAID => 'Paid',
            self::STATUS_ERROR => 'Not Paid',
        ];
    }

    public static function statusClass()
    {
        return [
            self::STATUS_NEW => 'danger',
            self::STATUS_VIEWED => 'warning',
            self::STATUS_COMPLETED => 'success',
            self::STATUS_CANCELED => 'default',
            self::STATUS_AWAITING => 'info',
            self::STATUS_PAID => 'primary',
            self::STATUS_ERROR => 'danger',
        ];
    }

    public function beforeValidate()
    {
        $this->phone = preg_replace('/[^0-9]/','', $this->phone);

        return parent::beforeValidate();
    }
    public function afterSave($insert, $changedAttributes)
    {
        parent::afterSave($insert, $changedAttributes);
            //echo "<pre>";
            //print_r($this->getDirtyAttributes()); die;
        //save order product
     
        if (isset(Yii::$app->queue)
            && isset(Yii::$app->params['rememberReviewDelay'])
            && !$insert
            && isset($changedAttributes['status'])
            && !empty($this->email)
            && $this->status == self::STATUS_COMPLETED
            && $changedAttributes['status'] !== self::STATUS_COMPLETED) {
                $products = [];
         /*   foreach ($this->products as $product) {
                $products[] = [
                    'imageUrl' => null,//$product->image ? Url::to(ImageHelper::thumb($product->image->id, 'micro'), 'https') : null,
                    'url' => Url::to(['/ecommerce/product/index', 'slug' => $product->product->slug], 'https'),
                    'name' => $this->cartItemName[$product->id],
                    'cost' => $this->cartItemPrice[$product->id],
                    'quantity' => $this->cartItemCount[$product->id],
                    'features' => $this->cartItemFeatures[$product->id]
                ];
            }*/
                Yii::$app->queue->delay(Yii::$app->params['rememberReviewDelay'])->push(new \app\jobs\RememberReviewJob([
                    'email' => $this->email,
                    'products' => $products,
                ]));
        }
    }
}
