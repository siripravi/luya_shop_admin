<?php

use yii\db\Migration;

class m191023_074304_007_create_table_postalcode extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%postalcode}}', [
            'countryCode' => $this->char(2),
            'postalCode' => $this->string(20),
            'placeName' => $this->string(180),
            'admin1Name' => $this->string(100),
            'admin1Code' => $this->string(20),
            'admin2Name' => $this->string(100),
            'admin2Code' => $this->string(20),
            'admin3Name' => $this->string(100),
            'admin3Code' => $this->string(20),
            'latitude' => $this->decimal(10, 7),
            'longitude' => $this->decimal(10, 7),
            'accuracy' => $this->tinyInteger(2),
            'id' => $this->primaryKey(),
        ], $tableOptions);

        $this->createIndex('latitude', '{{%postalcode}}', 'latitude');
        $this->createIndex('postal_code', '{{%postalcode}}', 'postalCode');
        $this->createIndex('name', '{{%postalcode}}', 'placeName');
        $this->createIndex('country', '{{%postalcode}}', 'countryCode');
        $this->createIndex('admin1_code', '{{%postalcode}}', 'admin1Code');
        $this->createIndex('admin1_code_2', '{{%postalcode}}', 'admin1Code');
        $this->createIndex('admin1_name', '{{%postalcode}}', 'admin1Name');
        $this->createIndex('longitude', '{{%postalcode}}', 'longitude');
    }

    public function down()
    {
        $this->dropTable('{{%postalcode}}');
    }
}
