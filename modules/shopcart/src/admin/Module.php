<?php

namespace siripravi\shopcart\admin;

/**
 * Cart Admin Module.
 *
 * File has been created with `module/create` command. 
 * 
 * @author
 * @since 1.0.0
 */
class Module extends \luya\admin\base\Module
{

    public $apis = [
        'api-cart-buyer'            => 'siripravi\shopcart\admin\apis\BuyerController',
        'api-cart-order'            => 'siripravi\shopcart\admin\apis\OrderController',
        'api-cart-orderproduct'    => 'siripravi\shopcart\admin\apis\OrderProductController',       
        'api-cart-delivery'         => 'siripravi\shopcart\admin\apis\DeliveryController',
        'api-cart-payment'          => 'siripravi\shopcart\admin\apis\PaymentController',
       
    ];

    public function getMenu()
    {
        return (new \luya\admin\components\AdminMenuBuilder($this))
            ->node('Shop Cart', 'add_shopping_cart')
            ->group('Settings')     
            ->itemApi('Buyers', 'cartadmin/buyer/index', 'folder', 'api-cart-buyer')
            ->itemApi('Orders', 'cartadmin/order/index', 'library_books', 'api-cart-order')
            ->itemApi('Order Product', 'cartadmin/order-product/index', 'list', 'api-cart-orderproduct')
            ->itemApi('Delivery Methods', 'cartadmin/delivery/index', 'domain', 'api-cart-delivery')
            ->itemApi('Payment Methods', 'cartadmin/payment/index', 'adjust', 'api-cart-payment');
          
    }
}