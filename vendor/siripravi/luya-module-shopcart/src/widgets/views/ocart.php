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
	<ul class="products">
		<?php foreach ($cart as $i => $item) { ?>
			<li class="product" id="i<?= $item['pid']?>" rel="<?= $item['pid']?>">
				<a href="#" class="product-link">
					<span class="product-image">
						<?php if (!$articles[$item['pid']][1]) : ?>
							<!--<img src="https://via.placeholder.com/75x50/ffffff/cccccc?text=PHOTO" alt="Product Photo"> -->
						<?php else : ?>
							<img src="<?= $articles[$item['pid']][1] ?>" class="img-responsive img-rounded" />
						<?php endif; ?>
					</span>
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
				<a class="remove-button product-delete" rel="<?= $item['pid']?>"><span class="remove-icon">X</span></a>
			</li>
		<?php
			$sum += $item["qty"] * $item["price"];
		} ?>
	</ul>
	<div class="totals">
		<div class="subtotal">
			<span class="label">Subtotal:</span> <span class="amount"><?= $sum;  ?></span>
		</div>
	</div>
	<div class="action-buttons">
		<a class="view-cart-button" href="#">Cart</a><a class="checkout-button" href="/cart/bag/index">Checkout</a>
	</div>
<?php }  ?>
<div id="offCanvasCart-curtain"></div>