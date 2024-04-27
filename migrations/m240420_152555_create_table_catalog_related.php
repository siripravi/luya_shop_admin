<?php

use yii\db\Migration;

class m240420_152555_create_table_catalog_related extends Migration
{
    public function safeUp()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable(
            '{{%catalog_related}}',
            [
                'id' => $this->primaryKey(),
                'name' => $this->string(225)->notNull(),
                'position' => $this->integer()->notNull()->defaultValue('0'),
            ],
            $tableOptions
        );
    }

    public function safeDown()
    {
        $this->dropTable('{{%catalog_related}}');
    }
}
