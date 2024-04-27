<?php

/**
 * @var $model \dench\shopshopcart\models\Delivery
 */

use dench\shopshopcart\models\Delivery;

echo $model->text;

if ($model->type === Delivery::TYPE_ADDRESS) {
    echo $this->render('_delivery_address');
} elseif ($model->type === Delivery::TYPE_DEPARTMENT) {
    echo $this->render('_delivery_department');
}
