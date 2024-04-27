<?php

use yii\db\Migration;

class m240420_152548_create_table_catalog_feature_group_ref extends Migration
{
    public function safeUp()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable(
            '{{%catalog_feature_group_ref}}',
            [
                'feature_id' => $this->integer()->notNull(),
                'group_id' => $this->integer()->notNull(),
                'position' => $this->integer()->notNull()->defaultValue('0'),
                'is_base' => $this->boolean()->notNull()->defaultValue('0'),
            ],
            $tableOptions
        );

        $this->addPrimaryKey('PRIMARYKEY', '{{%catalog_feature_group_ref}}', ['feature_id', 'group_id']);
    }

    public function safeDown()
    {
        $this->dropTable('{{%catalog_feature_group_ref}}');
    }
}
