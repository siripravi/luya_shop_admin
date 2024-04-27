<?php

namespace siripravi\shopcart\models;

use Yii;
use luya\admin\ngrest\base\NgRestModel;
use yii\helpers\ArrayHelper;
/**
 * Payment.
 * 
 * File has been created with `crud/create` command. 
 *
 * @property integer $id
 * @property integer $type
 * @property integer $position
 * @property string $name
 * @property tinyint $enabled
 */
class Payment extends NgRestModel
{
    const TYPE_UNDEFINED = 1;
    const TYPE_CASH = 2;
    const TYPE_LIQPAY = 3;
    const TYPE_PARTS = 4;
    const TYPE_PLAN = 5;
    const TYPE_WFP = 6;
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%payment}}';
    }

    /**
     * @inheritdoc
     */
    public static function ngRestApiEndpoint()
    {
        return 'api-cart-payment';
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
       /* return [
            [['type', 'position', 'enabled'], 'integer'],
            [['name'], 'string', 'max' => 255],
        ];*/
        return [
            [['type'], 'integer'],
            [['type'], 'default', 'value' => self::TYPE_UNDEFINED],
            [['type'], 'in', 'range' => [self::TYPE_UNDEFINED, self::TYPE_CASH, self::TYPE_LIQPAY, self::TYPE_PARTS, self::TYPE_PLAN, self::TYPE_WFP]],
            [['enabled'], 'boolean'],
            [['enabled'], 'default', 'value' => true],
            [['name'], 'string', 'max' => 255],
            [['text','position'], 'string'],
            [['name', 'text'], 'trim'],
        ];
    }

    public static function typeList()
    {
        return [
            self::TYPE_UNDEFINED => Yii::t('cart', 'Undefined'),
            self::TYPE_CASH => Yii::t('cart', 'Cash on delivery'),
            self::TYPE_LIQPAY => Yii::t('cart', 'Liqpay'),
            self::TYPE_PARTS => Yii::t('cart', 'Payment in parts'),
            self::TYPE_PLAN => Yii::t('cart', 'Installment plan'),
            self::TYPE_WFP => Yii::t('cart', 'WayForPay'),
        ];
    }

    public static function getList($enabled = true)
    {
        $temp = self::find()->filterWhere(['enabled' => $enabled])->orderBy(['position' => SORT_ASC])->all();

        return ArrayHelper::map($temp, 'id', 'name');
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
}
