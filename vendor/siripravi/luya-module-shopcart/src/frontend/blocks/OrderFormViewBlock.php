<?php

namespace siripravi\shopcart\frontend\blocks;

use luya\cms\base\PhpBlock;
use siripravi\shopcart\frontend\blockgroups\BlockCollectionGroup;
use luya\helpers\StringHelper;
use Yii;

/**
 * Summary
 *
 * @author Basil Suter <git@nadar.io>
 * @since 1.0.0
 */
class OrderFormViewBlock extends \app\blocks\FormBlock
{
    public $template = '<p>{{label}}: {{value}}</p>';
    public $previewButtonsTemplate = '<div class="forms-preview-buttons-container pt-3">{{back}}<span class="forms-divider"> | </span>{{submit}}</div>';

    public $isContainer = false;
    public $module = 'shopcart';
   /* public function blockGroup()
    {
        return BlockCollectionGroup::class;
    }*/

    public function config()
    {
        return [
            'vars' => [
                ['var' => 'template', 'label' => Yii::t('forms', 'Row Template'), 'type' => self::TYPE_TEXTAREA, 'placeholder' => $this->template],
                [
                    'var' => 'formId',
                    'label' => Yii::t('forms', 'Form'),
                    'type' => self::TYPE_SELECT_CRUD,
                    'required' => true,
                    'options' => ['route' => 'forms/form/index', 'api' => 'admin/api-forms-form', 'fields' => ['title']]
                ],

            ]
        ];
    }

    public function getFieldHelp()
    {
        return [
            'template' => Yii::t('forms', 'The variables {{label}} and {{value}} are available.'),
        ];
    }

    public function admin()
    {
        return '<div class="alert alert-info border-0 text-center">Summary / Preview</div>';
    }

    public function name()
    {
        return 'Preview Order';  //Yii::t('forms', 'Summary');
    }


    /**
     * @inheritDoc
     */
    public function extraVars()
    {
        return [
            //'ajaxLink' => $this->createAjaxLink('HelloWorld', ['time' => time()]),
            //'articleId' => \Yii::$app->request->get('id'),
            'summary' => $this->getSummary()
        ];
    }

    /**
     * @inheritDoc
     */
    public function icon()
    {
        return 'description';
    }

    /* public function frontend(){
        //return parent->frontend();
        $model = Yii::$app->forms->model;
        return get_class($model);  //$this->varValue('formId');
    }*/
    public function getSummary()
    {
        Yii::$app->forms->loadModel();
        $summary = [];;
        $model = Yii::$app->forms->model;
      /*  foreach ($model->attributes as $k => $v) {
            if ($model->isAttributeInvisible($k)) {
                continue;
            }
            if($k == "FeatureText"){
                $summary[$k] = $this->formatFText($model->$k);
                continue;
            } 
            $summary[$model->getAttributeLabel($k)] =  $model->formatAttributeValue($k, $v);
        }*/
    
        /*foreach ($model->attributes as $k => $v) {
            if ($model->isAttributeInvisible($k)) {
                continue;
            }
            $html .= StringHelper::template($this->getVarValue('template', $this->template), [
                'label' => $model->getAttributeLabel($k),
                'value' => $model->formatAttributeValue($k, $v),
            ]);
        }*/
        return $model;
    }

    public function formatFText($ftext)
    {
        $words = [];
        $price = 0;
        $wor = StringHelper::explode($ftext, "+");
        if (count($wor) > 0) {
            foreach ($wor as $i => $word) {
                $words[$i] = StringHelper::explode($word, "_");
                if (count($words[$i]) == 3)
                    $price += ($words[$i][2]) ?: 0;
                $words[$i]['price'] = $price;
            }
        }
        return $words;
        // ArrayHelpers::map($words,)
    }
}
