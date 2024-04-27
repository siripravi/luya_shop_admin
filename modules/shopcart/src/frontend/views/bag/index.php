<?php
/* @var $this yii\web\View */
/* @var $page common\modules\page\models\Page */
/* @var $items app\models\Variant[] */
/* @var $cart array */
/* @var $model common\modules\shopcart\models\OrderForm */
/* @var $notAvailable boolean */

use app\modules\shopcart\models\Delivery;
use app\modules\shopcart\models\Payment;

use yii\bootstrap5\ActiveForm;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\MaskedInput;
use app\modules\shopshopcart\widgets\CartWidget;
use app\modules\shopshopcart\widgets\CheckoutProgress;
//$this->params['breadcrumbs'][] = $page->name;

$delivery_url = Url::to(['cart/delivery']);
$payment_url = Url::to(['cart/payment']);

$js = <<<JS
$('#delivery_id').change(function(){
    var iD = $(this).find(':checked').val();
    $('#delivery-info').load('{$delivery_url}', { id: iD });
});
$('#payment_id').change(function(){
    var iD = $(this).find(':checked').val();
    $('#payment-info').load('{$payment_url}', { id: iD });
});
JS;

$this->registerJs($js);

$css = <<<CSS
.control-label {
    font-weight: bold;
}
.help-block {
    font-size: 13px;
    margin-top: 5px;
}
.help-block-error {
    color: red;
}
CSS;

$this->registerCss($css);
?>

<h1 class="mb-3"><!--= $page->title; ?--></h1>
<?php  echo CartWidget::widget(); ?>
  
<!--= $page->short ?-->
