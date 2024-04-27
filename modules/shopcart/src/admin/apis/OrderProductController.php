<?php

namespace siripravi\shopcart\admin\apis;

/**
 * Order Product Controller.
 * 
 * File has been created with `crud/create` command. 
 */
class OrderProductController extends \luya\admin\ngrest\base\Api
{
    /**
     * @var string The path to the model which is the provider for the rules and fields.
     */
    public $modelClass = 'app\modules\shopcart\models\OrderProduct';
}