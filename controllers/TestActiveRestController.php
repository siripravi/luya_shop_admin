<?php
namespace app\controllers;

class TestActiveRestController extends \luya\admin\base\RestActiveController
{
    public $modelClass = 'pets\models\Animals';
    
    public function actionPermissions()
    {
        return [
            'dogs' => \luya\admin\components\Auth::CAN_UPDATE,
        ];
    }
    
    public function actionDogs()
    {
        return ['rocky', 'billy'];
    }
    
    public function actionCats()
    {
        return ['sheba', 'whiskas'];
    }
}