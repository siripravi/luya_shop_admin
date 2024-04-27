<?php

$vendorDir = dirname(__DIR__);

return array (
  'creocoder/yii2-nested-sets' => 
  array (
    'name' => 'creocoder/yii2-nested-sets',
    'version' => '0.9.0.0',
    'alias' => 
    array (
      '@creocoder/nestedsets' => $vendorDir . '/creocoder/yii2-nested-sets/src',
    ),
  ),
  'yiisoft/yii2-queue' => 
  array (
    'name' => 'yiisoft/yii2-queue',
    'version' => '2.3.6.0',
    'alias' => 
    array (
      '@yii/queue' => $vendorDir . '/yiisoft/yii2-queue/src',
      '@yii/queue/db' => $vendorDir . '/yiisoft/yii2-queue/src/drivers/db',
      '@yii/queue/sqs' => $vendorDir . '/yiisoft/yii2-queue/src/drivers/sqs',
      '@yii/queue/amqp' => $vendorDir . '/yiisoft/yii2-queue/src/drivers/amqp',
      '@yii/queue/file' => $vendorDir . '/yiisoft/yii2-queue/src/drivers/file',
      '@yii/queue/sync' => $vendorDir . '/yiisoft/yii2-queue/src/drivers/sync',
      '@yii/queue/redis' => $vendorDir . '/yiisoft/yii2-queue/src/drivers/redis',
      '@yii/queue/stomp' => $vendorDir . '/yiisoft/yii2-queue/src/drivers/stomp',
      '@yii/queue/gearman' => $vendorDir . '/yiisoft/yii2-queue/src/drivers/gearman',
      '@yii/queue/beanstalk' => $vendorDir . '/yiisoft/yii2-queue/src/drivers/beanstalk',
      '@yii/queue/amqp_interop' => $vendorDir . '/yiisoft/yii2-queue/src/drivers/amqp_interop',
    ),
  ),
  'yiisoft/yii2-imagine' => 
  array (
    'name' => 'yiisoft/yii2-imagine',
    'version' => '2.3.1.0',
    'alias' => 
    array (
      '@yii/imagine' => $vendorDir . '/yiisoft/yii2-imagine/src',
    ),
  ),
  'bizley/jwt' => 
  array (
    'name' => 'bizley/jwt',
    'version' => '3.4.0.0',
    'alias' => 
    array (
      '@bizley/jwt' => $vendorDir . '/bizley/jwt/src',
    ),
  ),
  'powerkernel/yii2-photoswipe' => 
  array (
    'name' => 'powerkernel/yii2-photoswipe',
    'version' => '1.1.5.0',
    'alias' => 
    array (
      '@powerkernel/photoswipe' => $vendorDir . '/powerkernel/yii2-photoswipe',
    ),
  ),
  'siripravi/luya-module-authhelper' => 
  array (
    'name' => 'siripravi/luya-module-authhelper',
    'version' => '1.0.0.0',
    'alias' => 
    array (
      '@siripravi/authhelper' => $vendorDir . '/siripravi/luya-module-authhelper/src',
    ),
    'bootstrap' => 'siripravi\\authhelper\\Bootstrap',
  ),
  'yiisoft/yii2-debug' => 
  array (
    'name' => 'yiisoft/yii2-debug',
    'version' => '2.1.25.0',
    'alias' => 
    array (
      '@yii/debug' => $vendorDir . '/yiisoft/yii2-debug/src',
    ),
  ),
  'yiisoft/yii2-gii' => 
  array (
    'name' => 'yiisoft/yii2-gii',
    'version' => '2.2.6.0',
    'alias' => 
    array (
      '@yii/gii' => $vendorDir . '/yiisoft/yii2-gii/src',
    ),
  ),
  'yiisoft/yii2-bootstrap5' => 
  array (
    'name' => 'yiisoft/yii2-bootstrap5',
    'version' => '2.0.4.0',
    'alias' => 
    array (
      '@yii/bootstrap5' => $vendorDir . '/yiisoft/yii2-bootstrap5/src',
    ),
    'bootstrap' => 'yii\\bootstrap5\\i18n\\TranslationBootstrap',
  ),
  'exocet/yii2-bootstrap-material-design' => 
  array (
    'name' => 'exocet/yii2-bootstrap-material-design',
    'version' => '2.4.0.0',
    'alias' => 
    array (
      '@exocet/composer' => $vendorDir . '/exocet/yii2-bootstrap-material-design/composer',
      '@exocet/bootstrap5md' => $vendorDir . '/exocet/yii2-bootstrap-material-design/src',
    ),
  ),
  'yiisoft/yii2-httpclient' => 
  array (
    'name' => 'yiisoft/yii2-httpclient',
    'version' => '2.0.15.0',
    'alias' => 
    array (
      '@yii/httpclient' => $vendorDir . '/yiisoft/yii2-httpclient/src',
    ),
  ),
  'yiisoft/yii2-authclient' => 
  array (
    'name' => 'yiisoft/yii2-authclient',
    'version' => '2.2.15.0',
    'alias' => 
    array (
      '@yii/authclient' => $vendorDir . '/yiisoft/yii2-authclient/src',
    ),
  ),
  'bizley/migration' => 
  array (
    'name' => 'bizley/migration',
    'version' => '4.4.1.0',
    'alias' => 
    array (
      '@bizley/migration' => $vendorDir . '/bizley/migration/src',
    ),
  ),
);
