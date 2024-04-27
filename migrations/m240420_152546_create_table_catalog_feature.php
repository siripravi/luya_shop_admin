<?php

use yii\db\Migration;

class m240420_152546_create_table_catalog_feature extends Migration
{
    public function safeUp()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable(
            '{{%catalog_feature}}',
            [
                'id' => $this->primaryKey(),
                'name' => $this->string(),
                'input' => $this->string(225)->notNull(),
                'after' => $this->string(32)->notNull(),
                'type' => $this->tinyInteger()->notNull(),
                'value_text' => $this->text()->notNull(),
                'position' => $this->integer()->notNull()->defaultValue('0'),
                'enabled' => $this->boolean()->notNull()->defaultValue('1'),
            ],
            $tableOptions
        );
    }

    public function safeDown()
    {
        $this->dropTable('{{%catalog_feature}}');
    }
}
