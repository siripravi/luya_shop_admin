<?php

namespace luya\cms\injectors;

use luya\admin\base\TypesInterface;

/**
 * Radio List from an ActiveQuery.
 *
 * Generates a radio selection from an active query interface and returns the
 * models via the ActiveDataProvider.
 *
 * An example for the injector config:
 *
 * ```php
 * new ActiveQueryRadioInjector([
 *     'query' => \newsadmin\models\Article::find()->where(['cat_id' => 1]),
 *     'label' => 'title', // This attribute from the model is used to render the admin block dropdown selection.
 * ]);
 * ```
 *
 * In order to configure the ActiveQueryRadioInjector used the {{\luya\cms\base\InternalBaseBlock::injectors}} method:
 *
 * ```php
 * public function injectors()
 * {
 *     return [
 *	       'theData' => new ActiveQueryRadioInjector([
 *             'query' => News::find()->where(['is_deleted' => 0]),
 *             'label' => function($model) {
 *                 return $model->title . " - " . $model->description;
 *             },
 *         ]);
 *	   ];
 * }
 * ```
 *
 * @property \yii\db\ActiveQueryInterface $query The ActiveQuery object
 *
 * @author Basil Suter <basil@nadar.io>
 * @since 1.0.0
 */
final class ActiveQueryRadioInjector extends BaseActiveQueryInjector
{
    /**
     * @inheritdoc
     */
    public function setup()
    {
        // injecto the config
        $this->setContextConfig([
            'var' => $this->varName,
            'type' => TypesInterface::TYPE_RADIO,
            'label' => $this->varLabel,
            'options' => $this->getQueryData(),
        ]);
        // provide the extra data
        $this->context->addExtraVar($this->varName, $this->getExtraAssignSingleData());
    }
}
