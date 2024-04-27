<?php
namespace siripravi\shopcart\frontend\controllers;

use Yii;
use yii\web\Controller;
use beastbytes\wizard\WizardBehavior;

class CheckoutController extends Controller
{    public function beforeAction($action)
    {
        $config = [];
        switch ($action->id) {
            case 'checkout' :
                $config = [
                    'steps' => ['shopping-cart', 'checkout-delivery', 'checkout-payment', 'done'],
                    'events' => [
                        WizardBehavior::EVENT_WIZARD_STEP => [$this, $action->id.'WizardStep'],
                        WizardBehavior::EVENT_AFTER_WIZARD => [$this, $action->id.'AfterWizard'],
                        WizardBehavior::EVENT_INVALID_STEP => [$this, 'invalidStep']
                    ]
                ];
                break;          
            case 'resume':
                $config = ['steps' => []]; // force attachment of WizardBehavior
            default:
                break;
        }

        if (!empty($config)) {
            $config['class'] = WizardBehavior::class;
            $this->attachBehavior('wizard', $config);
        }

        return parent::beforeAction($action);
    }

    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionCheckout($step = null)
    {
        //if ($step===null) $this->resetWizard();
        return $this->step($step);
    }

    /**
    * Process wizard steps.
    * The event handler must set $event->handled=true for the wizard to continue
    * @param WizardEvent The event
    */
    public function checkoutWizardStep($event)
    {
        if (empty($event->stepData)) {
          //  $modelName = 'backend\\models\\wizard\\checkout\\'.ucfirst($event->step);
          //  $model = new $modelName();
        } else {
          //  $model = $event->stepData;
        }

        $post = Yii::$app->request->post();
        if (isset($post['cancel'])) {
            $event->continue = false;
        } elseif (isset($post['prev'])) {
            $event->nextStep = WizardBehavior::DIRECTION_BACKWARD;
            $event->handled  = true;
       /* } elseif ($model->load($post) && $model->validate()) {
            $event->data    = $model;
            $event->handled = true;

            if (isset($post['pause'])) {
                $event->continue = false;
            } elseif ($event->n < 2 && isset($post['add'])) {
                $event->nextStep = WizardBehavior::DIRECTION_REPEAT;
            }*/
        } else {
            $this->redirect("/".$event->step);
            return false;
          //  $event->data = [];//$this->render('checkout\\'.$event->step, compact('event', 'model'));
        }
    }

    /**
    * @param WizardEvent The event
    */
    public function invalidStep($event)
    {
        $event->data = $this->render('invalidStep', compact('event'));
        $event->continue = false;
    }

    /**
    * checkout wizard has ended; the reason can be determined by the
    * step parameter: TRUE = wizard completed, FALSE = wizard did not start,
    * <string> = the step the wizard stopped at
    * @param WizardEvent The event
    */
    public function checkoutAfterWizard($event)
    {
        if (is_string($event->step)) {
            $uuid = sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
                mt_rand(0, 0xffff), mt_rand(0, 0xffff),
                mt_rand(0, 0xffff),
                mt_rand(0, 0x0fff) | 0x4000,
                mt_rand(0, 0x3fff) | 0x8000,
                mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
            );

            $checkoutDir = Yii::getAlias('@runtime/checkout');
            $checkoutDirReady = true;
            if (!file_exists($checkoutDir)) {
                if (!mkdir($checkoutDir) || !chmod($checkoutDir, 0775)) {
                    $checkoutDirReady = false;
                }
            }
            if ($checkoutDirReady && file_put_contents(
                $checkoutDir.DIRECTORY_SEPARATOR.$uuid,
                $event->sender->pauseWizard()
            )) {
                $event->data = $this->render('checkout\\paused', compact('uuid'));
            } else {
                $event->data = $this->render('checkout\\notPaused');
            }
        } elseif ($event->step === null) {
            $event->data = $this->render('checkout\\cancelled');
        } elseif ($event->step) {
            $event->data = $this->render('checkout\\complete', [
                'data' => $event->stepData
            ]);
        } else {
            $event->data = $this->render('checkout\\notStarted');
        }
    }

    /**
    * Method description
    *
    * @return mixed The return value
    */
    public function actionResume($uuid)
    {
        $checkoutFile = Yii::getAlias('@runtime/checkout').DIRECTORY_SEPARATOR.$uuid;
        if (file_exists($checkoutFile)) {
            $this->resumeWizard(@file_get_contents($checkoutFile));
            unlink($checkoutFile);
            $this->redirect(['checkout']);
        } else {
            return $this->render('checkout\\notResumed');
        }
    }
    /**
    * Process wizard steps.
    * The event handler must set $event->handled=true for the wizard to continue
    * @param WizardEvent The event
    */
   

   
}