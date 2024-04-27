<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%order}}`.
 */
class m231202_083739_create_order_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        $this->createTable('order', [
            'id' => $this->primaryKey(),
            'buyer_id' => $this->integer(),
            'amount' => $this->integer()->notNull(),
            'phone' =>  $this->string(12),
           'email' => $this->string(),
            'delivery' => $this->string(),
            'delivery_id'  => $this->integer(),
            'payment_id'  => $this->integer(),
            'text' => $this->text(),
            'comment' => $this->text(),
            'created_at' => $this->integer()->notNull(),
            'status' => $this->smallInteger()->notNull()->defaultValue(1),
        ], $tableOptions);
        $this->createTable('delivery', [
            'id' => $this->primaryKey(),
            'type' => $this->integer()->notNull()->defaultValue(1),
            'position' => $this->integer()->notNull()->defaultValue(0),
            'name' => $this->string(),
            'enabled' => $this->boolean()->notNull()->defaultValue(1),
        ], $tableOptions);
        $this->batchInsert('delivery', ['type', 'position','name'], [
            [2, 1,'Pickup'],
            [3, 2,'By Post'],
            [4, 3,'Delivery by courier'],
        ]);

        $this->createTable('payment', [
            'id' => $this->primaryKey(),
            'type' => $this->integer()->notNull()->defaultValue(1),
            'position' => $this->integer()->notNull()->defaultValue(0),
            'name' => $this->string(),
            'enabled' => $this->boolean()->notNull()->defaultValue(1),
        ], $tableOptions);
        $this->batchInsert('payment', ['type', 'position','name'], [
            [2, 1,'Cash upon receipt'],
            [3, 2, 'Payment by card'],
            [2, 3,'Cash on delivery'],
            [1, 4,'Payment to a PrivatBank card'],
            [4, 5,'Payment in installments'],
            [5, 6,'Installment'],
        ]);
        $this->addForeignKey('fk-order-buyer_id', 'order', 'buyer_id', 'buyer', 'id', 'CASCADE'); 
        $this->addForeignKey('fk-order-delivery_id', 'order', 'delivery_id', 'delivery', 'id', 'CASCADE');
        $this->addForeignKey('fk-order-payment_id', 'order', 'payment_id', 'payment', 'id', 'CASCADE');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('fk-order-buyer_id', 'order');
        $this->dropForeignKey('fk-order-delivery_id', 'order');
        $this->dropForeignKey('fk-order-payment_id', 'order');
        $this->dropTable('order');
        $this->dropTable('delivery');
        $this->dropTable('payment');
    }
}
