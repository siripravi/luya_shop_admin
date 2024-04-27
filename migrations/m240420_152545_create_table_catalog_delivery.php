<?php

use yii\db\Migration;

class m240420_152545_create_table_catalog_delivery extends Migration
{
    public function safeUp()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable(
            '{{%catalog_delivery}}',
            [
                'id' => $this->primaryKey(),
                'type' => $this->integer()->notNull()->defaultValue('1'),
                'name' => $this->string()->notNull(),
                'text' => $this->text()->notNull(),
                'position' => $this->integer()->notNull()->defaultValue('0'),
                'enabled' => $this->boolean()->notNull()->defaultValue('1'),
            ],
            $tableOptions
        );
    }

    public function safeDown()
    {
        $this->dropTable('{{%catalog_delivery}}');
    }
}
