<?php

use yii\db\Migration;

class m240420_152556_create_table_catalog_review extends Migration
{
    public function safeUp()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable(
            '{{%catalog_review}}',
            [
                'id' => $this->primaryKey(),
                'name' => $this->string()->notNull(),
                'text' => $this->text(),
                'answer' => $this->text(),
                'email' => $this->string(),
                'rating' => $this->smallInteger()->notNull(),
                'created_at' => $this->integer()->notNull(),
                'position' => $this->integer()->notNull()->defaultValue('0'),
                'status' => $this->smallInteger()->notNull()->defaultValue('1'),
                'product_id' => $this->integer(),
            ],
            $tableOptions
        );

        $this->createIndex('fk-review-product_id', '{{%catalog_review}}', ['product_id']);
    }

    public function safeDown()
    {
        $this->dropTable('{{%catalog_review}}');
    }
}
