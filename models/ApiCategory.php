<?php
namespace app\models;
class ApiCategory extends \luya\headless\ActiveEdnpoint
{
    public $id;
    public $name;
    public $year;

    public function getEndpointName()
    {
        return 'admin/api-ecommerce-category';
    }
}