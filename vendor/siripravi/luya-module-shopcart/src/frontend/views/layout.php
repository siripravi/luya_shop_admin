<?php

use app\modules\shopshopcart\widgets\CheckoutProgress;
use yii\helpers\Url;

?>
<div class="container-fluid py-5">
  <?= CheckoutProgress::widget([
    'current_step' => 1,
    'current_step_done' => TRUE, # Optional if you want this step to be checked
    'steps' => [
      [
        'label' => 1,
        'title' => 'Step 1',
        'url' => Url::toRoute('/cart/bag/index'), # Optional if you want the label and title to be clickable
      ],
      [
        'label' => 2,
        'title' => 'Step 2',
        'url' => Url::toRoute('/cart/bag/address'), # Optional if you want the label and title to be clickable
      ],
      [
        'label' => 3,
        'title' => 'Step 3',
        'url' => Url::toRoute('/cart/bag/checkout'), # Optional if you want the label and title to be clickable
      ]
    ]
  ]);
  ?>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-8">
        <?= $content; ?>
      </div>
      <div class="col-md-4">
        <p>
          <!--= $this->context->getBasketCount(); > item(s) -->
        </p>
        <div class="">
          <div class="mt-5 mt-lg-0">
            <div class="card border shadow-none">
              <div class="card-header bg-transparent border-bottom py-3 px-4">
                <h5 class="font-size-16 mb-0">Order Summary <span class="float-end">#MN0124</span></h5>
              </div>
              <div class="bg-light rounded">
                <div class="p-4">
                  <h1 class="display-6 mb-4">Cart <span class="fw-normal">Total</span></h1>
                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="mb-0 me-4">Subtotal:</h5>
                    <p class="mb-0">$96.00</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h5 class="mb-0 me-4">Shipping</h5>
                    <div class="">
                      <p class="mb-0">Flat rate: $3.00</p>
                    </div>
                  </div>
                  <p class="mb-0 text-end">Shipping to Ukraine.</p>
                </div>
                <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 class="mb-0 ps-4 me-4">Total</h5>
                  <p class="mb-0 pe-4"><!--= $sum;  ?-->$24523</p>
                </div>
                <button class="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <input type="text" class="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code">
            <button class="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>