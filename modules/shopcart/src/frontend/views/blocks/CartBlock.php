<?php

use yii\data\ArrayDataProvider;
use yii\helpers\Html;
use kartik\touchspin\TouchSpin;

use luya\cms\helpers\Url;

use yii\helpers\Json;

$this->title = Yii::t('app', 'Checkout');
$this->params['breadcrumbs'][] = $this->title;
$url = $this->extraValue('ajaxLinkToTestAjax');


$baseUrl = Url::base(true);

$moduleUrl = Url::toModule('shopcart', false);
$opts = Json::htmlEncode([
  'urlUpdateCart' => $baseUrl . '/' . 'shopcart/default/update-cart',
]);


$data = $this->extraValue('elements');
$dataProvider = $data['dataProvider'];
$dataShopping = $data['dataShopping'];
$defaultAddress = $data['defaultAddress'];
$total = $data['total'];
/*
$defaultAddress = $this->extraValue('defaultAddress');
$cartPositions = $dataShopping->getPositions();

?>

$opts = Json::htmlEncode([
    'urlUpdateCart' => Url::to(['update-cart']),
]);
$this->registerJs("var _opts = {$opts};", \yii\web\View::POS_HEAD);

/*register select2 javascript ajax custom*/
//$this->registerJs($this->render('_select2_ajax.js'), \yii\web\View::POS_HEAD);
//$this->registerJs($this->render('_ajax_update_cart.js'), \yii\web\View::POS_HEAD);

/*echo "<pre>";
print_r($dataShopping);
echo "</pre>";  */

?>

<h2>Content</h2>
<?php
$js = <<< JS
/*$('.list-link').click(function(){
    $.ajax({
        url: ""
        dataType: "json",
        success: function(data) {
            $(".well").html(data.id);                
        }
    })
});*/
JS;
//$this->registerJs($js);
?>
<section class="h-100" style="background-color: #eee;">
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i class="fas fa-angle-down mt-1"></i></a></p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-body p-4 d-flex flex-row">
            <div class="form-outline flex-fill">
              <input type="text" id="form1" class="form-control form-control-lg" />
              <label class="form-label" for="form1">Discound code</label>
            </div>
            <button type="button" class="btn btn-outline-warning btn-lg ms-3">Apply</button>
          </div>
        </div>
        <!--  BEGIN OF CART ITEMS CONTAINER  -->
        <?php foreach ($dataShopping as $value) : ?>

          <!--  CARD PRODUCT BEGIN  -->
          <div class="card rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img src="<?= $value->Image; ?>" class="img-fluid rounded-3" alt="">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <p class="lead fw-normal mb-2"><?= $value->Name; ?></p>
                  <p><?= $value->formatFText(); ?><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <?php
                  echo TouchSpin::widget([
                    'name' => 'qty' . $value->id,
                    'model' => $value,
                    'attribute' => 'Quantity',
                    'readonly' => true,
                    'options' => [
                      'id' => 'id_qty' . $value->id
                    ],
                    'pluginOptions' => [
                      'verticalbuttons' => true,
                      'min' => 1,
                      'max' => 5000,
                      'initval' => $value->getQuantity(),
                      'buttonup_class' => 'btn btn-primary',
                      'buttondown_class' => 'btn btn-info',
                      'buttonup_txt' => '<i class="fas fa-plus-circle"></i>',
                      'buttondown_txt' => '<i class="fas fa-minus-circle"></i>'
                    ],
                    'pluginEvents' => [
                      "touchspin.on.stopspin" => 'function() { 
                              var iniData = $(this).val();
                              updateCart(iniData,"' . $value->id . '");
                          }',
                    ],
                  ]);
                  ?>
                  <button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="fas fa-minus"></i>
                  </button>

                  <input id="form1" min="0" name="quantity" value="2" type="number" class="form-control form-control-sm" />

                  <button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 class="mb-0"> <text class="h4"><span class="moneySymbol">₹</span><span class="cart-item-total ps-2"><?= $value->getPrice() * $value->Quantity; ?></span></text></h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <?= Html::a('<i class="bi bi-trash"></i>', $baseUrl . "/" . $moduleUrl . "/default/delete-order?id=" . $value->id, [
                    'title'                => Yii::t('app', "Delete"),
                    // 'class'                => 'btn btn-danger',
                    'role'                 => 'modal-remote',
                    'data-confirm'         => false,
                    'data-method'          => false,
                    'data-request-method'  => 'post',
                    'data-confirm-title'   => Yii::t('app', "Are you sure?"),
                    'data-confirm-message' => Yii::t('app', "Are you sure want to delete this item")
                  ]);
                  ?>
                </div>
              </div>
            </div>
          </div>
          <!--  END OF CARD PRODUCT  -->

        <?php endforeach; ?>


        <!-- END OF CART ITEMS CONT  -->
        <div class="card">
          <div class="card-body">
            <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
<div class="container" style="margin-top:124px;">
  <div class="row">
    <div class="col-sm-12 col-md-10 col-md-offset-1">

      <!-- pilih alamat -->
      <!-- untuk alamat -->
      <?php \yii\widgets\Pjax::begin(['id' => 'checkout-address']); ?>
      <input type="hidden" name="_csrf" value="<?= Yii::$app->request->getCsrfToken() ?>" />
      <?php if ($defaultAddress == null) { ?>
        <div class="well col-md-12">
          <div class="transaction-card col-md-12">
            <div class="row transaction-card-body">
              <div class="col-sm-8">
                <p>
                  <b><?= Yii::t('app', 'You do not have a shipping address yet'); ?>.</b>
                  <br />
                  <span>
                    Masukkan alamat pengiriman atau
                  </span>
                  <a href="/user/login?redirect=%2Fcart">
                    masuk dengan akunmu
                  </a>
                  <span></span>
                  <br class="hidden-xs">
                  <span>
                    jika sudah pernah berbelanja sebelumnya
                  </span>
                </p>
              </div>
              <div class="col-sm-4 text-right">
                <span class="hidden-xs"><br></span>
                <p>
                  <?= Html::a(
                    Yii::t('app', 'Enter the shipping address'),
                    ['user-address/add-address'],
                    [
                      'role' => 'modal-remote',
                      'title' => 'Create new Adree',
                      'class' => 'btn btn-primary'
                    ]
                  );
                  ?>
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
                <p><b>Penerima</b><br />
                  <span><?= $defaultAddress->recipient_name; ?></span>
                  <br><span><?= $defaultAddress->phone_number; ?></span>
                </p>
              </div>
              <div class="col-sm-6 col-xs-7">
                <p><b>Alamat Pengiriman</b><br>
                  <span><?= $defaultAddress->address; ?> Sukmajaya - Depok. Jawa Barat - 16415.</span>
                </p>
              </div>
              <div class="col-sm-3 col-xs-12">
                <?= Html::a("Click Here",); ?>
                <?= Html::a(
                  '<span class="glyphicon glyphicon-pencil"></span> ' . Yii::t('app', 'Change Address'),
                  ['user-address/use-address', 'id' => md5($defaultAddress->id)],
                  [
                    'role' => 'modal-remote',
                    'title' => 'Change Address',
                    'class' => 'btn btn-primary'
                  ]
                ); ?>
              </div>
            </div>
          </div>
        </div>
      <?php } ?>
      <?php \yii\widgets\Pjax::end(); ?>
    </div>
  
    <!-- cart -->
    <!-- summary -->
    <div class="col-lg-3">
      <div class="card mb-3 border shadow-0">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label class="form-label">Delivery</label>
              <?= ""; //$address; 
              ?>
            </div>
          </form>
        </div>
      </div>
      <div class="card mb-3 border shadow-0">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label class="form-label">Have coupon?</label>
              <div class="input-group">
                <input type="text" class="form-control border" name="" placeholder="Coupon code">
                <button class="btn btn-light border">Apply</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="card shadow-0 border">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <p class="mb-2">Total price:</p>
            <p class="mb-2"><span class="moneySymbol">₹</span><span id="totPrice"><?= $total; ?></span></p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="mb-2">Discount:</p>
            <p class="mb-2 text-success">-<span class="moneySymbol">₹</span><span id="disPrice"></span></p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="mb-2">TAX:</p>
            <p class="mb-2"><span class="moneySymbol">₹</span><span id="taxPrice"></span></p>
          </div>
          <hr>
          <div class="d-flex justify-content-between">
            <p class="mb-2">Total price:</p>
            <p class="mb-2 fw-bold"><span class="moneySymbol">₹</span><span id="netPrice"></span></p>
          </div>

          <div class="mt-3">
            <a href="/checkout-delivery" class="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </a>
            <a href="/" class="btn btn-light w-100 border mt-2"> Back to shop </a>
          </div>
        </div>
      </div>
    </div>
    <!-- summary -->
  </div>
</div>
</div>
</div>