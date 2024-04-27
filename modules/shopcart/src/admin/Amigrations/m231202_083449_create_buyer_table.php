<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%buyer}}`.
 */
class m231202_083449_create_buyer_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        $this->createTable('buyer', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'phone' => $this->string(12)->notNull(),
            'email' => $this->string(),
            'created_at' => $this->integer()->notNull(),
            'entity' => $this->boolean(),
            'delivery' => $this->string(),
        ], $tableOptions);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('buyer');
    }
}
