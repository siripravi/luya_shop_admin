<?php

use yii\db\Migration;

class m240420_152547_create_table_catalog_feature_filter extends Migration
{
    public function safeUp()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable(
            '{{%catalog_feature_filter}}',
            [
                'feature_id' => $this->integer()->notNull(),
                'group_id' => $this->integer()->notNull(),
            ],
            $tableOptions
        );

        $this->addPrimaryKey('PRIMARYKEY', '{{%catalog_feature_filter}}', ['feature_id', 'group_id']);

        $this->createIndex('fk-nxt_feature_filter-category_id', '{{%catalog_feature_filter}}', ['group_id']);
    }

    public function safeDown()
    {
        $this->dropTable('{{%catalog_feature_filter}}');
    }
}
