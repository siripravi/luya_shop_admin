<?php

namespace siripravi\shopcart\frontend\blocks;

use luya\cms\base\PhpBlock;
use siripravi\shopcart\models\Cart;
use siripravi\ecommerce\models\Article;
use app\modules\userauth\models\UserAddress;
use luya\helpers\ArrayHelper;
use luya\admin\filters\MediumCrop;
use siripravi\shopcart\frontend\blockgroups\BlockCollectionGroup;
use yii\data\ActiveDataProvider;
use yii\data\ArrayDataProvider;

/**
 * Head Teaser Block.
 *
 * File has been created with `block/create` command on LUYA version 1.0.0-RC3.
 */
class CartBlock extends PhpBlock
{
    public $module = 'shopcart';

    /**
     * @var boolean Choose whether block is a layout/container/segmnet/section block or not, Container elements will be optically displayed
     * in a different way for a better user experience. Container block will not display isDirty colorizing.
     */
    //  public $isContainer = true;

    /**
     * @var bool Choose whether a block can be cached trough the caching component. Be carefull with caching container blocks.
     */
    public $cacheEnabled = false;

    /**
     * @var int The cache lifetime for this block in seconds (3600 = 1 hour), only affects when cacheEnabled is true
     */
    public $cacheExpiration = 3600;

    public $product_ids = [28, 4];
    public $link;
    /**
     * @inheritDoc
     */
    public function blockGroup()
    {
        return BlockCollectionGroup::class;
    }

    /**
     * @inheritDoc
     */
    public function name()
    {
        return 'Shop Cart';
    }

    /**
     * @inheritDoc
     */
    public function icon()
    {
        return 'local_mall'; // see the list of icons on: https://design.google.com/icons/
    }

    /**
     * @inheritDoc
     */
    public function config()
    {
        return [
            'placeholders' => [
                ['var' => 'elements', 'label' => 'Elemente', 'type' => self::TYPE_LIST_ARRAY],
            ],
        ];
    }

    /**
     * @inheritDoc
     */
    public function extraVars()
    {
        return [
            //  'menu' => Group::getMenu(),
            'elements' => $this->getCartProducts(),
            'defaultAddress' => $this->callDefaultAddress(),
            'ajaxLinkToTestAjax' => $this->createAjaxLink('TestAjax', ['arg1' => 'Value for Arg1']),
        ];
    }

    public function getCartProducts()
    {
        $cart = \Yii::$app->cart;
        $products = $cart->getItems();
        
       // echo \Yii::$app->user->id;print_r($products);die;
        $total = $cart->getCost();
//Yii::$app->storage->getImage($element->image_id)->applyFilter(\app\filters\ThumbFilter::identifier())->source
        $dataProvider = new ArrayDataProvider([
            'allModels' => $products,
            'sort' => [
                'attributes' => ['Pid', 'Quantity', 'Price'],
            ],
            'pagination' => [
                'pageSize' => 10,
            ],
            'key' => 'Pid',
        ]);

        /* $cart = Cart::getCart();
        $sum = 0;
        $items = [];
        $count = 0;
        $address = isset($cart['address']) ? $cart['address'] : [];
        foreach ($cart as $i => $item) {
            $sum += $item["qty"] * $item["price"];
            $count += $item['qty'];
        }
        $car = ArrayHelper::index($cart, 'pid');
        $variant_ids = array_keys($car);
        $items = ArrayHelper::map(
            Article::find()->where(['id' => $variant_ids])->andWhere(['enabled' => true])->all(),
            'id',
            function ($element) {
                return [
                    $element->name,
                    $element->getImage()->applyFilter(MediumCrop::identifier())->source
                    // Yii::$app->storage->getImage($element->image_id)->applyFilter(\app\filters\MediumFilter::identifier())->source
                ];
            }
        );  */
        //   echo "<pre>"; print_r($cart);die;        
      
        return [
            'dataProvider' => $dataProvider,
            'dataShopping' => $products,
            'defaultAddress' => $this->callDefaultAddress(),
            'total'  => $total,
           // 'article' => $article
            //'count' => $count,
          //  'address' => $this->renderAddress($address)
        ];
    }

    /**
     * {@inheritDoc}
     *
     */
    public function admin()
    {
        return '<p>Shop Cart</p>';
    }

    public function renderAddress($address)
    {
        if (empty($address))
            return "";
        return '<p><b>' . $address['contact_person'] . '</b></p>' . '<p>' . $address[']zipcode'] . ' ' . $address['country'] . ', ' . $address['region'] . ', ' . $address['city'] . '</p>' .
            '<p><em>' . $address['street'] . ', ' . $address['house'] . ' - ' . $address['apartment'] . '</em></p>';
    }

    public function callDefaultAddress()
    {
        $session = \Yii::$app->session;
        $getIdAddress = $session->get('useAddressCheckOut');

        if ($getIdAddress === false) {
            $defaultSession = null;
        } else {
            $defaultSession = $getIdAddress;
        }

        if ($defaultSession == null) {
            if (($model = UserAddress::findOne(['is_default' => 1])) !== null) {
                return $model;
            }
        } else {
            if (($model = UserAddress::findOne($defaultSession)) !== null) {
                return $model;
            }
        }

        return null;
    }

    public function callbackHelloWorld($time)
    {
        return 'hallo world ' . $time;
    }
    public function callbackTestAjax($arg1)
    {
        return 'hello callback test ajax with argument: arg1 ' . $arg1;
    }
}
