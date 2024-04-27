<?php

namespace siripravi\shopcart;

use yii\helpers\ArrayHelper;
use siripravi\ecommerce\models\Article;
use siripravi\ecommerce\models\Product;
use siripravi\ecommerce\models\Feature;

class BeforeLoadOrderFormHandler
{
    /**
     * Handles the after login event process to send emails
     *
     * @param FormEvent $event Event object form
     *
     * @return null
     */
    public static function handleBeforeLoad(\siripravi\shopcart\BeforeLoadOrderFormEvent $event)
    {
       $model = $event->model;
       $model->attributes = \Yii::$app->session->get("__" . basename(get_class($model)));
       \Yii::debug('Setting Attributes: handleBeforeLoad');
    }

   

    /**
     * Converts objects to array
     * 
     * @param object $obj object(s)
     * 
     * @return array 
     */
    public function obj_to_array($obj)
    {
        // Not an array or object? Return back what was given
        if (!is_array($obj) && !is_object($obj))
            return $obj;

        $arr = (array) $obj;

        foreach ($arr as $key => $value) {
            $arr[$key] = $this->obj_to_array($value);
        }

        return $arr;
    }
}

/* Features
Array
(
    [8] => Array
        (
            [rList] => Array
                (
                    [1425] => 6 inch
                    [786] => 12 inch
                )

            [fList] => Array
                (
                    [0] => 33
                    [1] => 34
                )

        )

    [9] => Array
        (
            [rList] => Array
                (
                    [140] => Eggless
                    [647] => With Egg
                )

            [fList] => Array
                (
                    [0] => 31
                    [1] => 32
                )

        )

)
*/