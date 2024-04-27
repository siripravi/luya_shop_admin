
<?php if ($items) : ?>
  <?php $form = ActiveForm::begin(['options' => ['class' => 'mt-3']]) ?>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-4">
        <div class="card-header bg-secondary text-white"><?= Yii::t('app', 'Required information for ordering') ?></div>
        <div class="card-body">
          <?= $form->field($model, 'name')->textInput(['placeholder' => Yii::t('app', 'Full name')]) ?>

          <?= $form->field($model, 'phone')->widget(MaskedInput::class, [
            'mask' => '+38 (999) 999-99-99',
          ]) ?>

          <?= $form->field($model, 'email')->textInput() ?>

          <?= $form->field($model, 'entity')->radioList([
            0 => Yii::t('app', 'Private person'),
            1 => Yii::t('app', 'Organization'),
          ], ['class' => 'pt-2']) ?>

          <?= $form->field($model, 'comment')->textarea() ?>

          <?php if (!YII_DEBUG) : ?>
            <!--?= $form->field($model, 'reCaptcha')->widget(ReCaptcha2::class)->label(false) ?-->
          <?php endif; ?>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-4">
        <div class="card-header bg-secondary text-white"><?= Yii::t('app', 'Delivery method') ?></div>
        <div class="card-body">
          <?= $form->field($model, 'delivery_id')->radioList(Delivery::getList(), [
            'class' => 'pt-2',
            'id' => 'delivery_id',
            'item' => function ($index, $label, $name, $checked, $value) {
              return '<div class="radio"><label>' . Html::radio($name, $checked, ['value' => $value]) . ' ' . $label . '</label></div>';
            },
          ]) ?>
          <div id="delivery-info"></div>
        </div>
      </div>
      <div class="card">
        <div class="card-header bg-secondary text-white"><?= Yii::t('app', 'Payment method') ?></div>
        <div class="card-body">
          <?= $form->field($model, 'payment_id')->radioList(Payment::getList(), [
            'class' => 'pt-2',
            'id' => 'payment_id',
            'item' =>  function ($index, $label, $name, $checked, $value) {
              $disabled = $value === 2 && false;
              $options = array_merge([
                'label' => Html::encode($label),
                'value' => $value,
                'disabled' => $disabled,
              ]);
              return '<div class="radio' . ($disabled ? ' text-muted' : null) . '">' . Html::radio($name, $checked, $options) . '</div>';
            },
          ]) ?>
          <div id="payment-info"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="text-muted">
    <b style="color: red;">*</b> <?= Yii::t('app', ' - fields are required') ?>
  </div>

  <div class="text-center mt-4">
    <?= Html::submitButton(Yii::t('app', 'Continue to Checkout'), ['id' => 'submitButton', 'class' => 'w-100 btn btn-primary btn-lg']) ?>
  </div>

  <?php ActiveForm::end() ?>

<?php endif; ?>
