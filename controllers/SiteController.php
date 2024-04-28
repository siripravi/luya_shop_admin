<?php
namespace app\controllers;

use luya\web\Controller;

class SiteController extends Controller
{
    public $layout = false;
    public function actionIndex()
    {
        //this->context->layout = false;
        return $this->render('index');
    }
    public function actionContact()
    {
        //this->context->layout = false;
       // return $this->renderFile('index.html');
       return "Your message sent successfully!";
    }
}
