<?php
/**
 * View file for block: FormBlock
 *
 * File has been created with `block/create` command.
 *
 * @param $this->placeholderValue('content');
 * @param $this->varValue('formId');
 *
 * @var \luya\cms\base\PhpBlockView $this
 */

use luya\helpers\Html;
use luya\helpers\StringHelper;
use yii\bootstrap5\Modal;
?>
<?php
 Yii::$app->forms->loadModel();
 $html = null;
 $summary = $this->extraValue('summary');
 
 ?>
<?php echo "<h4>PREVIEW ADDRESS</h4>";  ?>
<?php if (Yii::$app->session->getFlash('formDataSuccess')): ?>
    <?= $this->placeholderValue('success'); ?>
<?php else: ?>
    <!--php if ($this->extraValue('isPreview')): ?-->
        <?= $this->placeholderValue('preview'); ?>
        <?= $summary;  ?>
        <?= StringHelper::template($this->varValue('previewButtonsTemplate', $this->context->previewButtonsTemplate), [
            'back' => Html::a($this->cfgValue('previewBackButtonLabel', Yii::t('forms', 'Back')), '?reload=' . $this->varValue('formId'), Yii::$app->forms->backButtonOptions),
            'submit' => Html::a($this->cfgValue('previewSubmitButtonLabel', Yii::t('forms', 'Submit')), '?submit='.$this->varValue('formId'), Yii::$app->forms->submitButtonsOptions),
        ]); ?>
    
<?php endif; ?>

<?php if(Yii::$app->forms->model->isPjax) : ?>
<?php yii\widgets\Pjax::end(); ?> <!-- end of pjax-->
<?php endif; ?>
<?php Yii::$app->forms->form->end(); ?>
<?php if (empty($this->varValue('formId'))): ?>
<div style="background-color:red; color:white; padding:20px;"><?= Yii::t('forms', 'This form block is not properly configured. Select a form from the listing in the block settings.'); ?></div>
<?php endif; ?>