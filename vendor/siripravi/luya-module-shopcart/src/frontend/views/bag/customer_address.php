<?php
/**
 * @author Albert Gainutdinov <xalbert.einsteinx@gmail.com>
 *
 *  @var \app\models\UserAddress $address
 */

use yii\bootstrap5\ActiveForm;
use yii\bootstrap5\Html;

?>

<div class="row">
    <div class="col-md-3">
    <h2 class="text-center">Delivery Address</h2>
        <!--= $this->render('_menu') ?-->
    </div>
    <div class="col-md-9">
        <?php $form = ActiveForm::begin(); ?>

        <?= $form->field($address, 'country') ?>
        <?= $form->field($address, 'region') ?>
        <?= $form->field($address, 'city') ?>
        <?= $form->field($address, 'street') ?>
        <?= $form->field($address, 'house') ?>
        <?= $form->field($address, 'apartment') ?>
        <?= $form->field($address, 'zipcode') ?>

        <div class="form-group">
            <?= Html::submitButton('Submit', ['class' => 'btn btn-primary']) ?>
        </div>
        <?php ActiveForm::end(); ?>
    </div>
</div>
