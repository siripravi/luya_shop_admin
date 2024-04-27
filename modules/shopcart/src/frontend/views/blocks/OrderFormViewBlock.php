<?php

/**  PREVIEW ORDERSELECTIONS
 * View file for block: OrderFormViewBlock *
 * File has been created with `block/create` command. *
 * @param $this->placeholderValue('content');
 * @param $this->varValue('formId'); *
 * @var \luya\cms\base\PhpBlockView $this
 */

use luya\helpers\Html;

?>
<?php
$price = 0;
$fsel = [];

//echo "<pre>VVV"; print_r($model->attributes); echo "</pre>";
$model = $this->extraValue("summary");
$i = -1;
foreach ($model->FeatureSel as $f => $v) {
    $i++;
    $fsel[] = explode("+", $v);
    $price += end($fsel)[3];
}
//echo "<pre>VVV"; print_r($fsel); echo "</pre>";
?>

<?php if (Yii::$app->session->getFlash('formDataSuccess')) : ?>
    <?= $this->placeholderValue('success'); ?>
<?php else : ?>

    <div class="row">
        <h3 class="w-75 p-3"><span style="vertical-align:super;font-size:31px; padding-right:5px;" class="moneySymbol">₹</span>
            <span class="" data-inr="<?= $price; ?>" style="font-size: 48px; font-weight: 600;" id="xproductPrice"><?= $price; ?></span>
        </h3>
        <div class="col-md-2 float-right">
            <?= Html::a(' <i class="fa fa-pencil"></i>',  Yii::$app->request->referrer, ['class' => 'btn text-white', 'style' => "background-color: rgb(72, 20, 73);"]); ?>
        </div>
    </div>
    <?php if (!empty($fsel) && count($fsel[0]) == 4) : ?>
        <h5 class="card-title">Your Selections:</h5>
        <div class="mb-3">
            <div id="feat-sel" class="d-flex text-inline" role="radiogroup">
                <?php
                foreach ($fsel as $f => $fs) :  ?>
                    <div class="p-2 flex-fill position-relative" id="Feat-<?= $fs[1]; ?>">
                        <p><?= $fs[0]; ?></p>
                        <a class="btn text-white" data-mdb-ripple-init style="background-color: #55acee;" href="#!" role="button">
                            <i class="bi bi-check me-2" style="font-size:20px;"></i>
                            <?= $fs[1]; ?>
                        </a>
                        <span class="position-absolute top-2 start-10 translate-middle badge rounded-pill bg-info">
                            <span class="pe-2">₹</span><?= $fs[3]; ?><span class="visually-hidden"></span>
                        </span>
                    </div>
                <?php endforeach;  ?>
            </div>
        </div>
    <?php endif;  ?>


    <?php if (Yii::$app->forms->model->hasErrors()) : ?>
        <?= Yii::$app->forms->form->errorSummary(Yii::$app->forms->model); ?>
    <?php endif; ?>
    <?= $this->placeholderValue('content'); ?>

<?php endif; ?>
<div class="d-grid gap-2 col-6 mx-auto">
    <?= Html::a('Confirm & Submit', Yii::$app->request->referrer . '&submit=' . $this->varValue('formId'), ['id' => 'btn-buy', 'data-formid' => $this->varValue('formId'),  'class' => 'btn btn-lg btn-success btn-buy']);
    ?>

</div>

<?php if (Yii::$app->forms->model->isPjax) : ?>
    <?php yii\widgets\Pjax::end(); ?> <!-- end of pjax-->
    <?php Yii::$app->forms->form->end(); ?>

<?php endif; ?>