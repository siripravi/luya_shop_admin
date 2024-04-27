<?php if (!empty($cart)) :
    $sum = 0;
?>
    <div class="m-4" id="cartItems">
        <?php foreach ($cart as $i => $item) { ?>
            <div class="row gy-3 mb-4 product cart-item" id="i<?= $i ?>" rel="<?= $i ?>">
                <div class="col-lg-5">
                    <div class="me-lg-5">
                        <div class="d-flex">
                            <?php if (!$articles[$item['pid']][1]) : ?>
                                <img src="https://www.bootdey.com/image/380x380/008B8B/000000" alt="" class="border rounded me-3">
                            <?php else : ?>
                                <img src="<?= $articles[$item['pid']][1] ?>" class="border rounded me-3" style="width: 96px; height: 96px;" />
                            <?php endif; ?>
                            <div class="">
                                <a href="#" class="nav-link"><?= $articles[$item['pid']][0] ?></a>
                                <p class="text-muted"><?= $item['ftext'];  ?></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                    <div class="d-flex justify-content-between">
                        <div class="input-group w-auto justify-content-end align-items-center">
                            <!--   <span class="qty input-group quantity w-24 justify-content-center align-items-center mb-0 border-opacity-75"> -->
                            <input type="button" value="-" class="btn btn-primary button-minus icon-sm mx-0">
                            <input type="number" step="1" max="10" class="qty-input product-count border-0 text-center  w-56 fs-4" data-id="<?= $i; ?>" data-price="<?= $item['price']; ?>" step="1" min="1" max="1000" name="[]qty-input" value="<?= $item["qty"]; ?>" pattern="[0-9]*" title="Quantity" inputmode="numeric">
                            <input type="button" value="+" class="btn btn-primary button-plus icon-sm">
                            <!-- </span>  -->
                        </div>
                    </div>
                    <div class="col-lg-4 d-flex justify-content-center">
                        <text class="h4"><span class="moneySymbol">₹</span><span class="cart-item-total ps-2"><?= $item["price"] * $item["qty"]; ?></span></text> <br>
                        <!--<small class="text-muted text-nowrap"> $460.00 / per item </small> -->
                    </div>
                    <div class="col-lg-2 float-end">
                        <a href="#!" class="btn btn-light border px-2 icon-hover-primary"><i class="fas fa-heart fa-sm px-1 text-secondary"></i></a>
                        <!--<a href="#" class="btn btn-light border text-danger icon-hover-danger"> Remove</a> -->
                        <a class="btn btn-light border text-danger icon-hover-danger remove-button product-delete" rel="<?= $i ?>"><span class="remove-icon"><i class="bi bi-trash"></i></span></a>
                    </div>
                </div>
            </div>
        <?php
            $sum += $item["qty"] * $item["price"];
        } ?>
    </div>
<?php endif; ?>