<?php if (!empty($cart)) {
	$sum = 0;
?>
	<!-- Cart Page Start -->
	<aside id="shopCart">
		<main>			
			<h2>Shopping Bag <span class="count"><?= $count; ?></span></h2>
			<ul class="products cart-items">
				<?php foreach ($cart as $i => $item) { ?>
					<li class="product cart-item" id="i<?= $i ?>" rel="<?= $i ?>">
						<a href="#" class="product-link">
							<span class="product-image">
								<!--<img src="https://via.placeholder.com/75x50/ffffff/cccccc?text=PHOTO" alt="Product Photo"> -->
								<?php if (!$articles[$item['pid']][1]) : ?>
									<img src="https://www.bootdey.com/image/380x380/008B8B/000000" alt="" class="avatar-lg rounded">
								<?php else : ?>
									<img src="<?= $articles[$item['pid']][1] ?>" class="img-responsive img-rounded" />
								<?php endif; ?>
							</span>
							<span class="product-details">
								<h2><?= $articles[$item['pid']][0] ?></h2>
								<p class="badge bg-dark text-wrap mb-0 mt-1"><span class="fw-bold fs-6"><?= $item['ftext'];  ?></span></p>
								<span class="qty-price">
									<span class="qty input-group quantity w-24 justify-content-center align-items-center mb-0 border-opacity-75">
										<input type="button" value="-" class="button-minus border rounded-circle  icon-shape icon-sm mx-1">
										<input type="number" step="1" max="10" class="qty-input product-count border-0 text-center w-56 bg-primary text-light fs-4" data-id="<?= $i; ?>" data-price="<?= $item['price']; ?>" step="1" min="1" max="1000" name="[]qty-input" value="<?= $item["qty"]; ?>" pattern="[0-9]*" title="Quantity" inputmode="numeric">
										<input type="button" value="+" class="button-plus border rounded-circle icon-shape icon-sm">
									</span>
									<span class="price product-price " style="font-weight:300;color:blueviolet;"><span class="cart-item-total"><span style="vertical-align:super;font-size:16px; padding-right:5px;" class="moneySymbol">₹</span><?= $item["price"] * $item["qty"]; ?></span></span>
								</span>
							</span>
							<a class="remove-button product-delete" rel="<?= $i ?>"><span class="remove-icon"><i data-feather="trash-2"></i></span></a>
						</a>
					</li>
				<?php
					$sum += $item["qty"] * $item["price"];
				} ?>
			</ul>
			<div class="totals">
				<div class="subtotal">
					<span class="label">Subtotal:</span><span style="vertical-align:super;font-size:16px; padding-right:5px;" class="moneySymbol">₹</span><span class="amount"><?= $sum; ?></span>
				</div>
			</div>
			<div class="action-buttons">
				<a class="view-cart-button" href="#">Cart</a><a class="checkout-button" href="/checkout">Checkout</a>
			</div>
		</main>
	</aside>
<?php }  ?>