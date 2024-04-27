<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%order_product}}`.
 */
class m231202_084045_create_order_product_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';

        $this->createTable('order_product', [
            'id' => $this->primaryKey(),
            'order_id' => $this->integer()->notNull(),
            'variant_id' => $this->integer(),
            'name' => $this->string(),
            'count' => $this->integer()->notNull(),
            'price' => $this->integer()->notNull(),
        ], $tableOptions);
      
        $this->addForeignKey('fk-order_product-order_id', 'order_product', 'order_id', 'order', 'id', 'CASCADE');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('fk-order_product-order_id', 'order_product');
        $this->dropTable('order_product');
    }
}
