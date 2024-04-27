<div class="row" id="shopCart">
    <!-- cart -->
    <div class="col-lg-9">
        <div class="card border shadow-0 products cart-items">
            <div class="m-4" id="cartItems">
                <?php foreach ($dataShopping as $value) : ?>
                    <div class="row gy-3 mb-4 product cart-item" id="i<?= $i ?>" rel="<?= $i ?>">
                        <div class="col-lg-5">
                            <div class="me-lg-5">
                                <div class="d-flex">
                                    <img src="<?= $value->Image; ?>" class="border rounded me-3" style="width: 96px; height: 96px;" />
                                    <div class="">
                                        <h5><a href="#" class="nav-link"><?= $articles[$item['pid']][0] ?></a></h5>
                                        <p class="text-muted"><?= $value->formatFText(); ?></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-3 col-3 d-flex flex-row flex-lg-column text-nowrap">
                            <div class="input-group w-auto justify-content-end align-items-center">
                                <?php
                                echo TouchSpin::widget([
                                    'name' => 'qty' . $value->id,
                                    'model' => $value,
                                    'attribute' => 'Quantity',
                                    'readonly' => true,
                                    'options' => [
                                        'id' => 'id_qty' . $value->id
                                    ],
                                    'pluginOptions' => [
                                        'verticalbuttons' => true,
                                        'min' => 1,
                                        'max' => 5000,
                                        'initval' => $value->getQuantity(),
                                        'buttonup_class' => 'btn btn-primary',
                                        'buttondown_class' => 'btn btn-info',
                                        'buttonup_txt' => '<i class="fas fa-plus-circle"></i>',
                                        'buttondown_txt' => '<i class="fas fa-minus-circle"></i>'
                                    ],
                                    'pluginEvents' => [
                                        "touchspin.on.stopspin" => 'function() { 
                                            var iniData = $(this).val();
                                            updateCart(iniData,"' . $value->id . '");
                                        }',
                                    ],
                                ]);
                                ?>
                            </div>
                        </div>
                        <div class="col-lg-2 d-flex justify-content-center">
                            <text class="h4"><span class="moneySymbol">₹</span><span class="cart-item-total ps-2"><?= $value->getPrice() * $value->Quantity; ?></span></text> <br>
                            <!--<small class="text-muted text-nowrap"> $460.00 / per item </small> -->
                        </div>
                        <div class="col-lg-2 float-end">
                            <a href="#!" class="btn btn-light border px-2 icon-hover-primary"><i class="fas fa-heart fa-sm px-1 text-secondary"></i></a>
                            <!--<a href="#" class="btn btn-light border text-danger icon-hover-danger"> Remove</a> -->
                            <a class="btn btn-light border text-danger icon-hover-danger remove-button product-delete" ><span class="remove-icon"><i class="bi bi-trash"></i></span></a>
                        </div>
                    </div>
                    <?php echo "Total"; ?>
                <?php endforeach; ?>
            </div>
            <div class="border-top pt-4 mx-4 mb-4">
                <p><i class="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                </p>
            </div>
        </div>
    </div>
    <!-- cart -->
    <!-- summary -->
    <div class="col-lg-3">
        <div class="card mb-3 border shadow-0">
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label class="form-label">Delivery</label>
                        <?= ""; //$address; 
                        ?>
                    </div>
                </form>
            </div>
        </div>
        <div class="card mb-3 border shadow-0">
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label class="form-label">Have coupon?</label>
                        <div class="input-group">
                            <input type="text" class="form-control border" name="" placeholder="Coupon code">
                            <button class="btn btn-light border">Apply</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="card shadow-0 border">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <p class="mb-2">Total price:</p>
                    <p class="mb-2"><span class="moneySymbol">₹</span><span id="totPrice"><?= $sum; ?></span></p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="mb-2">Discount:</p>
                    <p class="mb-2 text-success">-<span class="moneySymbol">₹</span><span id="disPrice"><?= $discount; ?></span></p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="mb-2">TAX:</p>
                    <p class="mb-2"><span class="moneySymbol">₹</span><span id="taxPrice"><?= $tax; ?></span></p>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <p class="mb-2">Total price:</p>
                    <p class="mb-2 fw-bold"><span class="moneySymbol">₹</span><span id="netPrice"><?= $sum - $tax - $discount; ?></span></p>
                </div>

                <div class="mt-3">
                    <a href="/checkout-delivery" class="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </a>
                    <a href="/" class="btn btn-light w-100 border mt-2"> Back to shop </a>
                </div>
            </div>
        </div>
    </div>
    <!-- summary -->
</div>