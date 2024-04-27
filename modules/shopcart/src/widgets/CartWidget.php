<?php

/**
 * Created by PhpStorm.
 * User: dench
 * Date: 20.01.18
 * Time: 14:02
 */

namespace siripravi\shopcart\widgets;

use app\modules\shopcart\models\Cart;
use siripravi\ecommerce\models\Article;
use Yii;
use yii\base\Widget;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\helpers\Url;
use luya\admin\filters\MediumCrop;
class CartWidget extends Widget
{
    public $id = 'bag';

    public $options = [];

    public $urlCart = ['/cart/bag/index'];

    public function run()
    {
        $cart = Cart::getCart();
        $sum = 0; $count = 0;
        foreach ($cart as $i => $item) { 
            $sum += $item["qty"] * $item["price"];
            $count += $item['qty'];
        }    
        //print_r($cart);
        $car = ArrayHelper::index($cart,'pid');
       // echo "<hr>";
        //print_r($car); 
        $variant_ids = array_keys($car);
        $items = ArrayHelper::map(Article::find()->where(['id' => $variant_ids])->andWhere(['enabled' => true])->all(),
                     'id',
                    function($element){
                     return [$element->name,
                        $element->getImage()->applyFilter(MediumCrop::identifier())->source
                       // Yii::$app->storage->getImage($element->image_id)->applyFilter(\app\filters\MediumFilter::identifier())->source
                    ];
                    }
                    );
       
        return $this->render("cart", ['cartUrl' => $this->urlCart, 'articles' => $items, 'cart' => $cart,'sum' => $sum,'count' => $count]);
     
    }
}
