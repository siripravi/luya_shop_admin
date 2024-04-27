<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "postalcode".
 *
 * @property string|null $countryCode
 * @property string|null $postalCode
 * @property string|null $placeName
 * @property string|null $admin1Name
 * @property string|null $admin1Code
 * @property string|null $admin2Name
 * @property string|null $admin2Code
 * @property string|null $admin3Name
 * @property string|null $admin3Code
 * @property float|null $latitude
 * @property float|null $longitude
 * @property int|null $accuracy
 * @property int $id
 */
class Postalcode extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'postalcode';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['latitude', 'longitude'], 'number'],
            [['accuracy'], 'integer'],
            [['countryCode'], 'string', 'max' => 2],
            [['postalCode', 'admin1Code', 'admin2Code', 'admin3Code'], 'string', 'max' => 20],
            [['placeName'], 'string', 'max' => 180],
            [['admin1Name', 'admin2Name', 'admin3Name'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'countryCode' => 'Country Code',
            'postalCode' => 'Postal Code',
            'placeName' => 'Place Name',
            'admin1Name' => 'Admin1name',
            'admin1Code' => 'Admin1code',
            'admin2Name' => 'Admin2name',
            'admin2Code' => 'Admin2code',
            'admin3Name' => 'Admin3name',
            'admin3Code' => 'Admin3code',
            'latitude' => 'Latitude',
            'longitude' => 'Longitude',
            'accuracy' => 'Accuracy',
            'id' => 'ID',
        ];
    }
}
