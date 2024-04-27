<?php

namespace siripravi\shopcart;
use yii\helpers\ArrayHelper;
use siripravi\ecommerce\models\Article;
use siripravi\ecommerce\models\Product;
use siripravi\ecommerce\models\Feature;
class BeforeLoadOrderFormHandler
{
    /**
     * Handles the after login event process to send emails
     *
     * @param FormEvent $event Event object form
     *
     * @return null
     */
    public static function handleBeforeLoad(\siripravi\shopcart\BeforeLoadOrderFormEvent $event)
    {        
        $priceList = self::getArticlePrices();
        //echo "<pre>"; print_r($priceList); die;
        $model = $event->model;
        $model->Pid = $priceList[0]['article_id'];
       $model->Image = \Yii::$app->storage->getImage($priceList[0]['image_id'])->applyFilter(\app\filters\ThumbFilter::identifier())->source;
        $model->Name = $priceList[0]['pname'];
       $radList = []; 
        foreach ($priceList as $id => $feature) {
            switch ($feature['type']) {
                case 1:
                    $fId = $feature['id'];    
                    $fName = $feature['name'] ;                               
                    $fArr = $feature['featureValues'][$fId];                  
                   // $radList[$fId]['rList'] = 
                    $rad = ArrayHelper::map($fArr, "id", "name");
                    $rList = []; $fList = [];
                    foreach($rad as  $k => $v){
                       $rList[$k."+".$fArr[$k]['price']] = $rad[$k];
                            //'value' => $fArr[$k]['price']
                       $fList[] = $k;
                       // $radList[$fId]['pList'][$k] = $fArr[$k]['price'];
                    } 
                    $radList[$fId]['name'] = $fName;
                    $radList[$fId]['rList'] = $rList;
                    $radList[$fId]['fList'] = $fList;
            }
        }
        //  $model->load()
        
      $model->Features = $radList;
      // $model->setAttributeValue(['Features', $radList]);
     //  print_r($model->getAttributesWithoutInvisible());
   
     //  echo "BEFORE";die;
        if($model->forNew){
         //    $model->attributes = [];
            // $model->Name = "CHandra";
           // \Yii::$app->forms->cleanup();
          //   \Yii::$app->session->set(\Yii::$app->forms->sessionFormDataName, $model->attributes);
             \Yii::$app->session->remove(\Yii::$app->forms->sessionFormDataName);
        }
        else{
          //  \Yii::debug('Sel Addr:#',$model->Aid);
           //   $model->Name = $model->Aid;
         //     \Yii::$app->session->set(\Yii::$app->forms->sessionFormDataName, $model->attributes);
       
     //   print_r($model->Addresses); die;
      // echo $model->Aid; die;
        // return true;
    }
    }

    public static function getArticlePrices()
    {
        $session = \Yii::$app->session;
        $id = \Yii::$app->request->get('id') ?  \Yii::$app->request->get('id') : $session['__params']['id'];
        $article = Article::findOne(['id' => $id, 'enabled' => 1]);
        $imageId = $article->image_id;
        $aName = $article->name;
        $product = Product::viewPage($article->product_id);
        $category_ids = $product->group_ids;
        $prices = $article->prices;
      
        $priceList = ArrayHelper::index(ArrayHelper::toArray($prices, [
            'siripravi\ecommerce\models\ArticlePrice' => [
                'article_id', 'value_id', 'currency_id', 'price', 'qty', 'unit_id'
            ],
        ]), 'value_id');
       
        $obList = Feature::find()->joinWith(['groups'])->andFilterWhere(['catalog_feature.enabled' => true])->andFilterWhere(['group_id' => $category_ids])->orderBy('position')->all();
        $pli =  ArrayHelper::toArray($obList, [
            'siripravi\ecommerce\models\Feature' => [
                'id',
                'name',
                'type',
                'input',
                // 'values',
                'featureValues',
                //  'DP',
            ],
        ]);
        
        array_walk($pli, function (&$value, $key) use ($priceList,$aName,$imageId) {
            $fId = $value['id'];

            $fVals = (array_key_exists($fId, $value['featureValues'])) ? $value['featureValues'][$fId] : [];
            foreach ($fVals as $k => $v) {
                if (array_key_exists($k, $priceList)) {
                    if (!empty($v)) {
                        $value['article_id'] = $priceList[$k]['article_id'];
                        $value['image_id'] = $imageId;
                        $value['pname'] = $aName;
                        $value['featureValues'][$fId][$k]['value_id'] = $priceList[$k]['value_id'];
                        $value['featureValues'][$fId][$k]['currency_id'] = $priceList[$k]['currency_id'];
                        $value['featureValues'][$fId][$k]['price'] = $priceList[$k]['price'];
                        $value['featureValues'][$fId][$k]['qty'] = $priceList[$k]['qty'];
                        $value['featureValues'][$fId][$k]['unit_id'] = $priceList[$k]['unit_id'];
                    }
                } else {
                    unset($value['featureValues'][$fId][$k]);
                }
            }
        });
        /*echo "<pre>";
        print_r($pli);
        die;*/
       
        return $pli;
    }

}

/* Features
Array
(
    [8] => Array
        (
            [rList] => Array
                (
                    [1425] => 6 inch
                    [786] => 12 inch
                )

            [fList] => Array
                (
                    [0] => 33
                    [1] => 34
                )

        )

    [9] => Array
        (
            [rList] => Array
                (
                    [140] => Eggless
                    [647] => With Egg
                )

            [fList] => Array
                (
                    [0] => 31
                    [1] => 32
                )

        )

)
*/