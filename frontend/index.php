<?php
// composer autoload include
require(__DIR__ . '/../luya_shop_admin/vendor/autoload.php');

// use the luya boot wrapping class
$boot = new \luya\Boot();
$boot->configFile = "../luya_shop_admin/configs/env.php";
$boot->setBaseYiiFile(__DIR__ . '/../luya_shop_admin/vendor/yiisoft/yii2/Yii.php');
$boot->run();
