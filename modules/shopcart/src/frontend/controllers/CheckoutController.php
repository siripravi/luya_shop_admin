<?php

namespace siripravi\shopcart\frontend\controllers;

use Yii;
use yii\data\ArrayDataProvider;
use yz\shoppingcart\ShoppingCart;
use siripravi\ecommerce\models\Article;
use yii\helpers\ArrayHelper;
use kartik\grid\EditableColumnAction;
use yii\web\NotFoundHttpException;
use app\modules\userauth\models\UserAddress;

class CheckoutController extends \yii\web\Controller
{
    public function actionIndex()
    {
        $cart = new ShoppingCart();

        $dataProvider = new ArrayDataProvider([
            'allModels' => $cart->getPositions(),
            'sort' => [
                'attributes' => ['name', 'qty', 'price', 'quantity', 'cost'],
            ],
            'pagination' => [
                'pageSize' => 10,
            ],
            'key' => 'id',
        ]);

        $dataShopping = $cart->getPositions();

        if (count($dataShopping) > 0) {
            return $this->render('index', ['dataProvider' => $dataProvider, 'dataShopping' => $dataShopping, 'defaultAddress' => $this->callDefaultAddress()]);
        } else {
            return $this->render('cart_empty');
        }
    }

    public function actionEditqty()
    {
        $model = new Article(); // your model can be loaded here
        $cart = new ShoppingCart();

        // Check if there is an Editable ajax request
        if (isset($_POST['hasEditable'])) {

            // use Yii's response format to encode output as JSON
            \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;

            // read your posted model attributes
            if ($model->load($_POST)) {

                //editable quantity
                if (isset($_POST['Article'])) {

                    foreach ($_POST['Article'] as $value) {
                        $quantity = $value['quantity'];
                    }

                    $position = $cart->getPositionById($_POST['editableKey']);

                    $cart->update($position, $quantity);

                    // return JSON encoded output in the below format
                    return ['output' => $quantity, 'message' => ''];
                }

                // alternatively you can return a validation error
                return ['output' => '', 'message' => 'Validation error'];
            }
            // else if nothing to do always return an empty JSON encoded output
            else {
                return ['output' => '', 'message' => ''];
            }
        }

        // Else return to rendering a normal view
        // return $this->render('view', ['model'=>$model]);
    }

    public function actionPaymentMethod()
    {
        $cart = new ShoppingCart();

        $dataProvider = new ArrayDataProvider([
            'allModels' => $cart->getPositions(),
            'sort' => [
                'attributes' => ['name', 'qty', 'price', 'quantity', 'cost'],
            ],
            'pagination' => [
                'pageSize' => 10,
            ],
            'key' => 'id',
        ]);

        $dataShopping = $cart->getPositions();

        if (count($dataShopping) > 0) {
            return $this->render('payment_method', ['dataProvider' => $dataProvider, 'dataShopping' => $dataShopping, 'defaultAddress' => $this->callDefaultAddress()]);
        } else {
            return $this->render('cart_empty');
        }
    }

    protected function callDefaultAddress()
    {
        $session = Yii::$app->session;


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

    public function actionMethodPayment()
    {
        return $this->render('method_payment');
    }

    public function actionUpdateCart()
    {
        $cart = new ShoppingCart();

        if (isset($_POST['cart']) && isset($_POST['cart_id'])) {

            $model = Article::findOne($_POST['cart_id']);
            if ($model) {
                $cart->update($model, $_POST['cart']);
                return true;
            }
        }
        throw new NotFoundHttpException();
    }
}
