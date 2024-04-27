<?php

/**
 * View file for block: FormBlock *
 * File has been created with `block/create` command. *
 * @param $this->placeholderValue('content');
 * @param $this->varValue('formId'); *
 * @var \luya\cms\base\PhpBlockView $this
 */

use luya\helpers\Html;
use luya\helpers\StringHelper;
?>
<?php

$data = Yii::$app->forms->getFormData();
$model = $this->extraValue('summary');
echo "<pre>SESS"; print_r(\Yii::$app->session->get('__AddressModel')); echo "</pre>"; 
echo "<pre>"; print_r($data); echo "</pre>";
//print_r($model->Addresses);
if (!empty($data)) {
} else {
}
?>
<?php if (Yii::$app->session->getFlash('formDataSuccess')) : ?>
    <?= $this->placeholderValue('success'); ?>
<?php else : ?>
    <div class="card border-success mb-4">
        <div class="card-header bg-info">
            <div class="row">
                <div class="col-md-10">
                    <h3 class="w-75 p-3">
                    </h3>
                </div>
                <div class="col-md-2 float-right">
                    <?= Html::a('Other Address',  Yii::$app->request->referrer, ['class' => 'nav-link']); ?>
                </div>
            </div>

            <h5 class="card-title">Your Delivery:</h5>
            <div class="mb-3">
                <div id="feat-sel" class="d-flex text-inline" role="radiogroup">
                    <?php  ?>

                    <div class="p-2 flex-fill position-relative" id="Feat-<?= "" ?>">
                        <input type="radio" class="btn-check" checked="checked">
                        <label class="btn btn-outline-primary" for="Feat-<?= ""  ?>">
                            <i class="bi bi-circle pe-2" style="font-size:20px;"></i>
                            <span class="text-light"><?= "" ?>

                                <?= "";//($model->Addresses && $model->Aid) ? $model->Addresses[$model->Aid]:"";  
                                ?>
                                <?php if (!empty($data)) : ?>
                                    <?= '<p><b>' . $data['Name'] . '</b></p>' . '<p>' . $data['Address1'] . ' ' . $data['Address2'] . ', Hyderabad, India - ' . $data['Pincode'];  ?>
                                <?php endif; ?>
                            </span>
                        </label>
                        <span class="position-absolute top-2 start-10 translate-middle badge rounded-pill bg-danger">
                            <span class="pe-2"></span><?= "" ?><span class="visually-hidden"></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card border-primary">
            <?php if (Yii::$app->forms->model->hasErrors()) : ?>
                <?= Yii::$app->forms->form->errorSummary(Yii::$app->forms->model); ?>
            <?php endif; ?>
            <?= $this->placeholderValue('content'); ?>
        </div>
    </div>
<?php endif; ?>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <?= Html::a('Confirm & Submit', Yii::$app->request->referrer . '&submit=' . $this->varValue('formId'), ['id' => 'btn-delv', 'data-formid' => $this->varValue('formId'),  'class' => 'btn btn-success btn-buy']);
    ?>
</div>
<?php Yii::$app->forms->form->end(); ?>