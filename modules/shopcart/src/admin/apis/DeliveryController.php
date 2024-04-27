<?php

namespace siripravi\shopcart\admin\apis;

/**
 * Delivery Controller.
 * 
 * File has been created with `crud/create` command. 
 */
class DeliveryController extends \luya\admin\ngrest\base\Api
{
    /**
     * @var string The path to the model which is the provider for the rules and fields.
     */
    public $modelClass = 'app\modules\shopcart\models\Delivery';
}