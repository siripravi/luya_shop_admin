<?php
namespace siripravi\shopcart;
use siripravi\shopcart\models\Cart;
use siripravi\shopcart\models\CartOrder;
use yii\helpers\ArrayHelper;
class AfterSaveOrderFormHandler
{
    /**
     * Handles the after login event process to send emails
     *
     * @param FormEvent $event Event object form
     *
     * @return null
     */
    public static function handleAfterSave(\siripravi\shopcart\AfterSaveOrderFormEvent $event)
    {
        $model = $event->model;
        $cartOrder = new CartOrder();
        $cartOrder->id = $model->Pid;
        $cartOrder->price = $model->getPrice();
        $cartOrder->quantity = $model->getQuantity();
        $cartOrder->message = $model->Message;
        $cartOrder->delDate = $model->Delivery;
        $cartOrder->image = $model->Image;
        $cartOrder->name = $model->Name;
        $cartOrder->featureText = $model->formatFText();
        Cart::setCart($cartOrder->attributes);
      /*    $id = implode("+", $model->Features);
            $ftext = $model->FeatureText;
            $pid = $model->Pid;
            $price = $model->Price;
            $cart = Cart::getCart();
       
            if (isset($cart[$id])){
                return false;
            }
            $qty = isset($cart[$id]) ? $cart[$id]["qty"] + 1 : 1;
            ArrayHelper::setValue($cart, $id, ["qty" =>  $qty, "pid" => $pid, "ftext" => $ftext, "price" => $price]);
            Cart::setCart($cart);
       */
        //** New Cart functionality with db save */
    //    $shopping = new ShoppingCart();       
        //if ($model) {
           // $shopping->create($model, $model->Quantity);
           \Yii::$app->cart->create($cartOrder, $model->Quantity);
       // }       
     //   $ycart = \Yii::$app->cart;
    //    $ycart->put($model, 1);

        return true;
    }
}