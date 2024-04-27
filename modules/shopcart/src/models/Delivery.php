<?php

namespace siripravi\shopcart\models;

use Yii;
use luya\admin\ngrest\base\NgRestModel;
use yii\helpers\ArrayHelper;
/**
 * Delivery.
 * 
 * File has been created with `crud/create` command. 
 *
 * @property integer $id
 * @property integer $type
 * @property integer $position
 * @property string $name
 * @property tinyint $enabled
 */
class Delivery extends NgRestModel
{
    const TYPE_UNDEFINED = 1;
    const TYPE_PICKUP = 2;
    const TYPE_ADDRESS = 3;
    const TYPE_DEPARTMENT = 4;
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%delivery}}';
    }

    /**
     * @inheritdoc
     */
    public static function ngRestApiEndpoint()
    {
        return 'api-cart-delivery';
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'type' => Yii::t('app', 'Type'),
            'position' => Yii::t('app', 'Position'),
            'name' => Yii::t('app', 'Name'),
            'enabled' => Yii::t('app', 'Enabled'),
        ];
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        /*return [
            [['type', 'position', 'enabled'], 'integer'],
            [['name'], 'string', 'max' => 255],
        ];*/
        return [
            [['type'], 'integer'],
            [['type'], 'default', 'value' => self::TYPE_UNDEFINED],
            [['type'], 'in', 'range' => [self::TYPE_UNDEFINED, self::TYPE_PICKUP, self::TYPE_ADDRESS, self::TYPE_DEPARTMENT]],
            [['enabled'], 'boolean'],
            [['enabled'], 'default', 'value' => true],
            [['name'], 'string', 'max' => 255],
            [['text','position'], 'string'],
            [['name', 'text'], 'trim'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function ngRestAttributeTypes()
    {
        return [
            'type' => 'number',
            'position' => 'number',
            'name' => 'text',
            'enabled' => 'number',
        ];
    }

    /**
     * @inheritdoc
     */
    public function ngRestScopes()
    {
        return [
            ['list', ['type', 'position', 'name', 'enabled']],
            [['create', 'update'], ['type', 'position', 'name', 'enabled']],
            ['delete', false],
        ];
    }

    public static function typeList()
    {
        return [
            self::TYPE_UNDEFINED => Yii::t('cart', 'Undefined'),
            self::TYPE_PICKUP => Yii::t('cart', 'Pickup'),
            self::TYPE_ADDRESS => Yii::t('cart', 'Delivery address'),
            self::TYPE_DEPARTMENT => Yii::t('cart', 'Delivery department'),
        ];
    }
    
    public static function getList($enabled = true)
    {
        $temp = self::find()->filterWhere(['enabled' => $enabled])->orderBy(['position' => SORT_ASC])->all();

        return ArrayHelper::map($temp, 'id', 'name');
    }
}
