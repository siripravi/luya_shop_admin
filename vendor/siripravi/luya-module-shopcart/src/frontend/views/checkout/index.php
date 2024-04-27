<?php
use kartik\grid\GridView;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\bootstrap5\Modal;
use yii\widgets\ActiveForm;
use kartik\select2\Select2;
use yii\web\JsExpression;
use yii\helpers\Json;
use kartik\touchspin\TouchSpin;
use yii2ajaxcrud\ajaxcrud\CrudAsset; 

$this->title = Yii::t('app','Checkout');
$this->params['breadcrumbs'][] = $this->title;

CrudAsset::register($this);
Modal::begin([
    "id"=>"ajaxCrudModal",
    "options"=> [
        'data-backdrop'=>"static",
        'data-keyboard'=>"false",
    ],
    "footer"=>"",// always need it for jquery plugin
]);

Modal::end();

/* @var $this yii\web\View */

$opts = Json::htmlEncode([
        'urlUpdateCart' => Url::to(['update-cart']),
    ]);

$pakaiHp = 0;

// if(Yii::$app->devicedetect->isMobile()){
    $pakaiHp = 1;
// }
 
$this->registerJs("var _opts = {$opts};",\yii\web\View::POS_HEAD);

/*register select2 javascript ajax custom*/
$this->registerJs($this->render('_select2_ajax.js'),\yii\web\View::POS_HEAD);
$this->registerJs($this->render('_ajax_update_cart.js'),\yii\web\View::POS_HEAD);
?>
<div class="container" style="margin-top:123px;">
<div class="row">
    <div class="col-sm-12 col-md-10 col-md-offset-1">
        <!-- pilih alamat -->
        <!-- untuk alamat -->
        <?php \yii\widgets\Pjax::begin(['id'=>'checkout-address']); ?>
        <?php if($defaultAddress == null){ ?>
        <div class="well col-md-12">
            <div class="transaction-card col-md-12">
                <div class="row transaction-card-body">
                    <div class="col-sm-8">
                        <p>
                            <b><?= Yii::t('app','You do not have a shipping address yet');?>.</b>
                            <br/>
                            <span>
                            Enter your shipping address or
                            </span>
                            <a href="/user/login?redirect=%2Fcart">
                            Sign in with your account
                            </a>
                            <span></span>
                            <br class="hidden-xs">
                            <span>
                            If you've shopped before
                            </span>
                        </p>
                    </div>
                    <div class="col-sm-4 text-right">
                        <span class="hidden-xs"><br></span>
                        <p>
                            <?= Html::a(Yii::t('app','Enter the shipping address'), ['user-address/add-address'],
                                [
                                    'role'=>'modal-remote',
                                    'title'=> 'Create new Adree',
                                    'class'=>'btn btn-primary']);?>             
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <?php } else { ?>
        <div class="well col-md-12">
            <div class="transaction-card col-md-12">
               <div class="row transaction-card-body">
                    <div class="col-sm-3 col-xs-5">
                        <p><b>Recipient</b><br/>
                        <span><?=$defaultAddress->recipient_name ;?></span>
                        <br><span><?=$defaultAddress->phone_number ;?></span></p>
                    </div>
                    <div class="col-sm-6 col-xs-7">
                        <p><b>Shipping Address</b><br>
                        <span><?= $defaultAddress->address ;?> Sukmajaya - Depok. Jawa Barat - 16415.</span></p>
                    </div>
                    <div class="col-sm-3 col-xs-12">
                        <?= Html::a('<span class="glyphicon glyphicon-pencil"></span> '.Yii::t('app','Change Address'), ['cart/user-address/use-address','id'=>md5($defaultAddress->id)],
                                [
                                    'role'=>'modal-remote',
                                    'title'=> 'Change Address',
                                    'class'=>'btn btn-primary']);?> 
                    </div>
                </div>
            </div>
        </div>
        <?php } ?>
        <?php \yii\widgets\Pjax::end(); ?>
    </div>
    <div class="col-sm-12 col-md-10 col-md-offset-1">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th class="text-center">Price</th>
                    <th class="text-center">Total</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td><h5>Subtotal</h5></td>
                    <td class="text-right"><h5><strong>$24.59</strong></h5></td>
                </tr>
                <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td><h5>Estimated shipping</h5></td>
                    <td class="text-right"><h5><strong>$6.94</strong></h5></td>
                </tr>
                <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td><h3>Total</h3></td>
                    <td class="text-right"><h3><strong>$31.53</strong></h3></td>
                </tr>
                <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td>
                    <button type="button" class="btn btn-default">
                        <span class="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                    </button></td>
                    <td>
                    <button type="button" class="btn btn-success">
                        Checkout <span class="glyphicon glyphicon-play"></span>
                    </button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>