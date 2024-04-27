<?php

namespace siripravi\shopcart\models;

use Yii;
use luya\admin\ngrest\base\NgRestModel;
use yii\behaviors\TimestampBehavior;
/**
 * Buyer.
 * 
 * File has been created with `crud/create` command. 
 *
 * @property integer $id
 * @property string $name
 * @property string $phone
 * @property string $email
 * @property integer $created_at
 * @property tinyint $entity
 * @property string $delivery
 */
class Buyer extends NgRestModel
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%buyer}}';
    }
     /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::class,
                'updatedAtAttribute' => false,
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public static function ngRestApiEndpoint()
    {
        return 'api-cart-buyer';
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name' => Yii::t('app', 'Name'),
            'phone' => Yii::t('app', 'Phone'),
            'email' => Yii::t('app', 'Email'),
            'created_at' => Yii::t('app', 'Created At'),
            'entity' => Yii::t('app', 'Entity'),
            'delivery' => Yii::t('app', 'Delivery'),
        ];
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        /*return [
            [['name', 'phone', 'created_at'], 'required'],
            [['created_at', 'entity'], 'integer'],
            [['name', 'email', 'delivery'], 'string', 'max' => 255],
            [['phone'], 'string', 'max' => 12],
        ];*/
        return [
            [['name', 'phone'], 'required'],
            [['entity'], 'boolean'],
            [['name', 'email', 'delivery'], 'string', 'max' => 255],
            [['phone'], 'string', 'max' => 20],
        ];
    }

    /**
     * @inheritdoc
     */
    public function ngRestAttributeTypes()
    {
        return [
            'name' => 'text',
            'phone' => 'text',
            'email' => 'text',
            'created_at' => 'number',
            'entity' => 'number',
            'delivery' => 'text',
        ];
    }

    /**
     * @inheritdoc
     */
    public function ngRestScopes()
    {
        return [
            ['list', ['name', 'phone', 'email', 'created_at', 'entity', 'delivery']],
            [['create', 'update'], ['name', 'phone', 'email', 'entity', 'delivery']],
            ['delete', false],
        ];
    }

     /**
     * @return \yii\db\ActiveQuery
     */
    public function getOrders()
    {
        return $this->hasMany(Order::class, ['buyer_id' => 'id']);
    }

    public static function clearPhone($phone)
    {
        return preg_replace('/[^0-9]/','', $phone);
    }

    public function beforeValidate()
    {
        $this->phone = preg_replace('/[^0-9]/','', $this->phone);

        return parent::beforeValidate();
    }
}
