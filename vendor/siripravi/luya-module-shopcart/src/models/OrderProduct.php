<?php

namespace siripravi\shopcart\models;

use Yii;
use luya\admin\ngrest\base\NgRestModel;
use siripravi\ecommerce\models\Article;
/**
 * Order Product.
 * 
 * File has been created with `crud/create` command. 
 *
 * @property integer $id
 * @property integer $order_id
 * @property integer $variant_id
 * @property string $name
 * @property integer $count
 * @property integer $price
 * @property integer $features
 */
class OrderProduct extends NgRestModel
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'order_product';
    }

    /**
     * @inheritdoc
     */
    public static function ngRestApiEndpoint()
    {
        return 'api-cart-orderproduct';
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'order_id' => Yii::t('app', 'Order ID'),
            'article_id' => Yii::t('app', 'Variant ID'),
            'name' => Yii::t('app', 'Name'),
            'count' => Yii::t('app', 'Count'),
            'price' => Yii::t('app', 'Price'),
        ];
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
       /* return [
            [['order_id', 'count', 'price'], 'required'],
            [['order_id', 'article_id', 'count', 'price'], 'integer'],
            [['name'], 'string', 'max' => 255],
        ];*/

        return [
            [['order_id', 'count', 'price'], 'required'],
            [['order_id', 'article_id', 'count', 'price'], 'integer'],
            [['name','features'], 'string', 'max' => 255],
            [['order_id'], 'exist', 'skipOnError' => true, 'targetClass' => Order::class, 'targetAttribute' => ['order_id' => 'id']],
            [['article_id'], 'exist', 'skipOnError' => true, 'targetClass' => Article::class, 'targetAttribute' => ['article_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function ngRestAttributeTypes()
    {
        return [
            'order_id' => 'number',
            'article_id' => 'number',
            'name' => 'text',
            'count' => 'number',
            'price' => 'number',
        ];
    }

    /**
     * @inheritdoc
     */
    public function ngRestScopes()
    {
        return [
            ['list', ['order_id', 'article_id', 'name', 'count', 'price']],
            [['create', 'update'], ['order_id', 'article_id', 'name', 'count', 'price']],
            ['delete', false],
        ];
    }

     /**
     * @return \yii\db\ActiveQuery
     */
    public function getOrder()
    {
        return $this->hasOne(Order::class, ['id' => 'order_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getArticle()
    {
        return $this->hasOne(Article::class, ['id' => 'article_id']);
    }
}
