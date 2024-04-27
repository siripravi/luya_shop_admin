<?php

use yii\bootstrap5\Html;
use luya\admin\filters\LargeCrop;
use luya\helpers\ArrayHelper;
?>


<?php

//echo Html::tag('table', $tbody, $options);

//echo "<pre>";
//print_r($cart);die;
//$car = ArrayHelper::index($cart,'pid');
//	print_r($car);die;
?>
<!--
<div class="row">
	<div style="border-bottom: 1px solid #f0f0f0;font-weight: 700; padding-bottom: 10px; font-size: 16px;">
		Shopping Cart <span class="curly-braces">(<span class="adobeTotalCountEvnt">1</span>)</span>
	</div>

	<div class="enterPinCode" style="background-color: #FFF;margin:10px 0; padding: 14px 0 5px;border:1px solid #E6E6E6;width: 100%;">
		<div class="content-inline" style="padding:0 3% 0;    float: left;">
			<span>
				<img src="https://assets.winni.in/groot/2023/01/31/icons/cartroute.png" style="width:28px;height:28px;">
				<span style="color:#333333;vertical-align: super;">&nbsp; Enter Delivery Pincode:</span>
			</span>
		</div>
		<div class="content-inline center-align outsidePinCode" style="padding:0px 3% 0px 2%;float: left;width: max-content; margin-top: -4px;">
			<input type="number" id="cartPincodeSearch" name="locid" value="" placeholder="111001" style="border:none;max-height: 175px;overflow-y: auto;width: 330px;border-bottom: 1px solid #ccc;">
		</div>
		<div class="content-inline " style=" padding: 0px 20px 0 0%; float: right;">
			<span>
				<button class="btn search-by-pincode-cart" style=" background-color:white;line-height:unset!important;height: 30px; border: 1px solid #DA0E68;font-weight:500;padding: 0 18px!important;font-size:11px!important;border-radius: 2px;color:#DA0E68;text-transform: capitalize; font-size: 14px !important;box-shadow: none;">Check</button>
			</span>
		</div>
	</div>
</div>
-->
<?php if (!empty($cart)) {
	$sum = 0;

?>
	<!--
<div class="single-mini-cart d-flex">
                                                                <div class="cart-thumb">
                                                                    <img src="assets/images/product/product-2.jpg" alt="">
                                                                </div>
                                                                <div class="cart-content media-body">
                                                                    <div class="product-name">
                                                                        <span class="quantity">1X</span>
                                                                        <a href="#">Hollister ...</a>
                                                                    </div>
                                                                    <div class="product-atributes">
                                                                        <a href="#">S, Black</a>
                                                                    </div>
                                                                    <span class="price">$59.00</span>
                                                                </div>
                                                                <a href="#" class="close"><i class="fal fa-times"></i></a>
                                                            </div>
-->
	<div class="" id="shopCart">		
				<h4 class="d-flex justify-content-between align-items-center mb-3">
					<span class="text-primary">Your cart</span>
					<span class="badge bg-primary rounded-pill"><?= count($cart); ?></span>
				</h4>
				<ul class="cart-products list-group mb3">
					<?php foreach ($cart as $i => $item) { ?>
						<li class="product list-group-item d-flex justify-content-between bg-light" id="i<?= $i ?>" rel="<?= $i ?>">
							<div>
								<span class="product-image">
									<?php if (!$articles[$item['pid']][1]) : ?>
										<!--<img src="https://via.placeholder.com/75x50/ffffff/cccccc?text=PHOTO" alt="Product Photo"> -->
									<?php else : ?>
										<img src="<?= $articles[$item['pid']][1] ?>" class="img-responsive img-rounded" />
									<?php endif; ?>
								</span>

								<small class="text-muted">Brief description</small>
							</div>
							<a href="#" class="product-link">

								<span class="product-details">
									<h3><?= $articles[$item['pid']][0] ?></h3>
									<span><!--?= $item["price"] ?-->
										<?= $item['ftext'];  ?>
									</span>
									<span class="qty-price">
										<span class="qty">
											<button class="minus-button" id="minus-button-1">-</button>
											<input type="number" id="qty-input-1" class="qty-input product-count" data-id="<?= $i; ?>" , data-price="<?= $item['price']; ?>" step="1" min="1" max="1000" name="[]qty-input" value="<?= $item["qty"]; ?>" pattern="[0-9]*" title="Quantity" inputmode="numeric">
											<button class="plus-button" id="plus-button-1">+</button>
										</span>
										<span class="price"><?= $item["price"] * $item["qty"]; ?></span>
									</span>
								</span>
							</a>
							<a class="remove-button product-delete" rel="<?= $i ?>"><span class="remove-icon">X</span></a>
						</li>
					<?php
						$sum += $item["qty"] * $item["price"];
					} ?>
					<li class="list-group-item d-flex justify-content-between">
						<span>Total (USD)</span>
						<strong><?= $sum;  ?></strong>
					</li>
				</ul>
				<!--<div class="col-4">
					<div class="totals">
						<div class="subtotal">
							<span class="label">Subtotal:</span> <span class="amount"></span>
						</div>
					</div>
					<div class="action-buttons">
						<a class="view-cart-button" href="#">Cart</a><a class="checkout-button" href="/cart/bag/index">Checkout</a>
					</div>
				</div>  -->
			<?php }  ?>
</div>