<?php

namespace siripravi\shopcart\models;

use luya\base\DynamicModel;
use siripravi\ecommerce\models\Article;
use siripravi\shopcart\models\Cart;
use yii\helpers\ArrayHelper;
use luya\helpers\StringHelper;

use yz\shoppingcart\CartPositionInterface;
use hscstudio\cart\ItemTrait;
use Yii;

/**
 * Form Submission Model
 *
 * @author Basil Suter <git@nadar.io>
 * @since 1.0.0
 */
class OrderForm extends \luya\forms\Model implements CartPositionInterface
{
    use ItemTrait;
    /**
     * @var string The uniue form id
     */
    public $formId;
    public $Pid;
    public $Name;
    public $Features = [];
    public $FeatureSel = [];
    public $Quantity = 1;
    public $Price;
    public $Delivery;
    public $Message;

    public $Image;


    public $FeatureText;
    public $forNew = true;
    public $isPjax = false;
    public $pjaxOptions = ['id' => 'feat-pjax'];
    public $redirectUrl = "/shopping-cart";

    public $activeFormClassOptions = ['id' => 'cart-form'];
    /**
     * @var array An array where the key is the attribute and value the formatter option, like
     * ```php
     * 'firstname' => 'ntext',
     * ```
     */
    public $formatters = [];
    const EVENT_AFTER_VALID = 'afterValid';
    const EVENT_BEFORE_LOAD = 'beforeLoad';
    public function init()
    {
        parent::init();
        $this->on(
            self::EVENT_BEFORE_LOAD,
            [
                new \siripravi\shopcart\BeforeLoadOrderFormHandler(),
                'handleBeforeLoad',
            ]
        );
        //bind after confirmation event
        $this->on(
            self::EVENT_AFTER_VALID,
            [
                new \siripravi\shopcart\AfterSaveOrderFormHandler(),
                'handleAfterSave',
            ]
        );
    }

    public static function saveCartCookie($model)
    {
        $id = implode("+", $model->Features);
        $ftext = $model->FeatureText;
        $pid = $model->Pid;
        $price = $model->Price;
        $cart = Cart::getCart();
        if (isset($cart[$id])) {
            return false;
        }
        $qty = isset($cart[$id]) ? $cart[$id]["qty"] + 1 : 1;
        ArrayHelper::setValue($cart, $id, ["qty" =>  $qty, "pid" => $pid, "ftext" => $ftext, "price" => $price]);
        Cart::setCart($cart);
    }

    public static function getAfterSaveEvent(self $model)
    {
        return \Yii::createObject(['class' => \siripravi\shopcart\AfterSaveOrderFormEvent::class, 'model' => $model]);
    }

    /* 6-inch-5-layer_36_2354+Eggless_31_251  */
    public function formatFText()
    {
        $html = "";
        $fsel = [];
        $i = -1;
        $price = 0;
        foreach ($this->FeatureSel as $f => $v) {
            $i++;
            $fsel[] = explode("+", $v);
            $price += end($fsel)[3];
        }
        $html .= '<div class="flex-fill position-relative">';
        foreach ($fsel as $f => $fs) {
            //   $html .='<span class="text-light">'.$fs[0].'</span><br>';
            $html .= '<span class="badge bg-primary text-light mx-auto">' . $fs[1] . '</span>';
        }
        $html .= "</div>";
        /* $words = [];
        $price = 0;
        $wor = StringHelper::explode($ftext, "+");
        if (count($wor) > 0) {
            foreach ($wor as $i => $word) {
                $words[$i] = StringHelper::explode($word, "_");
                if (count($words[$i]) == 3)
                    $price += ($words[$i][2]) ?: 0;
                $words[$i]['price'] = $price;
            }
        }*/
        return $html;
        // ArrayHelpers::map($words,)
    }
    public function getName()
    {
        // return "Product Name";
        $model = Article::findOne(['id' => $this->Pid, 'enabled' => 1]);
        return $model->name;
    }
    public function getQuantity()
    {
        return $this->Quantity;
    }
    public function getPrice()
    {
        $fsel = [];
        $price = 0;
        $qty = $this->Quantity;
        foreach ($this->FeatureSel as $f => $v) {

            $fsel[] = explode("+", $v);
            $price += end($fsel)[3];
        }
        return $price;
        //return $this->Price;
    }

    public function getId()
    {
        //return $this->id;
        // md5(serialize([$this->id, $this->Price, $this->color]));
        return md5(serialize(implode("+", array_values($this->FeatureSel))));
    }
    /*   public function getCartPosition()
    {
        return \Yii::createObject([
            'class' => 'app\models\ProductCartPosition',
            'id' => $this->id,
        ]);
    }*/

    /*  public function getFeatures()
    {
        return $this->Features;
    }

    public function setFeatures($features)
    {
        $this->Features = $features;
    }*/

    public static function getBeforeLoadModelEvent(\siripravi\shopcart\models\OrderForm $model)
    {
        return \Yii::createObject(['class' => \siripravi\shopcart\BeforeLoadOrderFormEvent::class, 'model' => $model]);
    }
}
