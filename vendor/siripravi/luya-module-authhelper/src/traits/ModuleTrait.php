<?php


namespace siripravi\authhelper\traits;

use siripravi\authhelper\Module;

/**
 * Trait ModuleTrait
 * @property-read Module $module
 * @package siripravi\authhelper\traits
 */
trait ModuleTrait
{
    /**
     * @return Module
     */
    public function getModule()
    {
        return \Yii::$app->getModule('user');
    }
}
