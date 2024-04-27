<?php

namespace siripravi\shopcart\frontend\controllers;

use Yii;
use yii\data\ArrayDataProvider;
use siripravi\ecommerce\models\Article;
use yii\web\Response;
use yii\web\NotFoundHttpException;
use app\modules\userauth\models\UserAddress;
use yii\helpers\Json;
class DefaultController extends \yii\web\Controller
{
    /*   public function beforeAction($action) 
{ 
    $this->enableCsrfValidation = false; 
    return parent::beforeAction($action); 
}*/
    public function actionIndex()
    {
        //$cart = new ShoppingCart();
        $cart = Yii::$app->cart;
        $products = $cart->getItems();
        $total = $cart->getCost();

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

        // $dataShopping = $cart->getPositions();

        if (count($products) > 0) {
            return $this->render('index', ['dataProvider' => $dataProvider, 'dataShopping' => $products, 'defaultAddress' => $this->callDefaultAddress()]);
        } else {
            return $this->render('cart_empty');
        }
    }

    public function actionView($slug)
    {
        /*return $this->render('view',['model'=> $this->findProduk($slug)]);*/
    }

    public function actionOrder($id, $title = "")
    {
        $request = Yii::$app->request;
        $model = $this->findProduk($id);
        $modelForm = new FormOrder();
        // $dataProvince = $modelForm->ambilProvice();
        $modelForm->scenario = 'orderForm';

        if ($request->isAjax) {
            /*
            *   Process for ajax request
            */
            Yii::$app->response->format = Response::FORMAT_JSON;
            if ($request->isGet) {
                return [
                    'title' => Yii::t("app", "Order"),
                    'size' => 'normal',
                    'content' => $this->renderAjax('order', [
                        'model' => $model,
                        'modelForm' => $modelForm,
                        // 'dataProvince' => $dataProvince,
                    ]),
                    'footer' => Html::button('<i class="fa fa-shopping-cart" aria-hidden="true"></i> ' . Yii::t("app", 'Add to cart'), ['class' => 'btn btn-primary col-md-12', 'type' => "submit"])

                ];
            } else if ($modelForm->load($request->post()) && $modelForm->validate()) {

                $shopping = new ShoppingCart();

                $produkCart = Article::findOne($model->id);
                $produkCart->msg_to_seller = $modelForm->msg_to_seller;

                if ($produkCart) {
                    $shopping->put($produkCart, $modelForm->qty);
                    return [
                        // 'forceReload'=>'#crud-datatable-pjax',
                        'title' => Yii::t('app', 'Successfully'),
                        'size' => 'normal',
                        'content' => '<span class="text-success">' . Yii::t('app', 'You have successfully added a shopping cart') . '</span>',
                        'footer' => Html::button(Yii::t("app", "Close"), ['class' => 'btn btn-danger col-md-12', 'data-dismiss' => "modal"])

                    ];
                } else {
                    return [
                        // 'forceReload'=>'#crud-datatable-pjax',
                        'title' => Yii::t('app', 'Failed'),
                        'size' => 'normal',
                        'content' => '<span class="text-danger">' . Yii::t('app', 'You have failed added a shopping cart') . '</span>',
                        'footer' =>  Html::a(Yii::t("app", 'Create More'), ['create'], ['class' => 'btn btn-primary', 'role' => 'modal-remote'])
                    ];
                }
            } else {
                return [
                    'title' => Yii::t("app", "Order"),
                    'size' => 'normal',
                    'content' => $this->renderAjax('order', [
                        'model' => $model,
                        'modelForm' => $modelForm,
                        // 'dataProvince' => $dataProvince,
                    ]),
                    'footer' => Html::button('<i class="fa fa-shopping-cart" aria-hidden="true"></i> ' . Yii::t("app", 'Add to cart'), ['class' => 'btn btn-primary col-md-12', 'type' => "submit"])

                ];
            }
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    public function actionDeleteOrder($id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $request = Yii::$app->request;
        if ($request->isAjax) {
            //  $cart = new ShoppingCart();
            //  $model = $this->findProdukCartById($id);
            $cart = Yii::$app->cart;
            $cart->deleteById($id);
            return [
                'forceOnlyReload' => true,
                'forceClose'  => true,
                'content' => '<span class="text-success">Delete success!</span>',
                // 'forceReload' => '#crud-checkout',
            ];
        }
        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function findProduk($id)
    {
        if (($model = Article::findOne(['id' => $id, 'enabled' => 1])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function findProdukCartById($id)
    {
        if (($model = Article::findOne(['md5(id)' => $id])) !== null) {
            return $model;
        }
        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
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

    public function actionUpdateCart()
    {
        $cart = Yii::$app->cart; //new ShoppingCart();

        if(isset($_POST['cart']) && isset($_POST['cart_id'])){
			$item = $cart->getItemById($_POST['cart_id']);
            $item->quantity = $_POST['cart'];
          //  $item->price = $item->price;
           // return Json::encode($item->attributes);
            Yii::$app->cart->update($item,$_POST['cart']);
			return Json::encode($item->attributes);
        }
        throw new NotFoundHttpException();
    }
}
