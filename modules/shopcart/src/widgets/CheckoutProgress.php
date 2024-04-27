<?php
namespace siripravi\shopcart\widgets;
use Yii;
use yii\base\ErrorException;
use yii\base\Widget;
use yii\helpers\Html;
use Sinergi\BrowserDetector\Browser;

class CheckOutProgress extends \yii\jui\Widget {

/**
 * @var array steps configuration. Each array element represents the configuration for the step
 */
public $steps = [];

/**
 * @var integer current step
 * By default the first step is the current
 */
public $current_step = 1;
/**
 * @var boolean if the current step is done
 * By default all the current is step is not done
 */
 public $current_step_done = FALSE;

/**
 * Initializes the grid view.
 * This method will initialize required property value.
 */
public function init() {
    parent::init();

    if(!is_array($this->steps))
      throw new ErrorException('Parameter steps must be an array.');
    if(count($this->steps) < 1)
      throw new ErrorException('Parameter steps must have more than one element.');
    foreach ($this->steps as $step) {
      if(!is_array($step))
        throw new ErrorException('In parameter steps each step must be an array');
      if(!array_key_exists('label', $step))
        throw new ErrorException('In paramater steps at least one of the steps does not have a label parameter');
      if(!is_numeric($step['label']))
        throw new ErrorException('In paramater steps at least one of the steps does not have a label parameter with a numeric value');
      if(!array_key_exists('title', $step))
        throw new ErrorException('In paramater steps at least one of the steps does not have a title parameter');
    }
    $this->options['class'] = 'checkout-progress-bar_progress';
}

/**
 * Renders the view.
 * This is the main entry of the whole view rendering.
 * Child classes should mainly override {@link renderContent} method.
 */
public function run() {
    $browser = new Browser;
    if($browser->getName() === $browser::CHROME)
      $is_chrome = TRUE;
    else
      $is_chrome = FALSE;
    $this->registerAssets();

    echo Html::beginTag('div', $this->options) . "\n";
    for ($i = 0; $i < count($this->steps) ;$i++) {
      $circle_options['class'] = 'checkout-progress-bar_circle';
      $bar_options['class'] = 'checkout-progress-bar_bar';
      if($is_chrome)
        Html::addCssClass($bar_options, 'checkout-progress-bar_bar_chrome');
      else
        Html::addCssClass($bar_options, 'checkout-progress-bar_bar_other');

      if($this->current_step === $i + 1) {
        if($this->current_step_done) {
          Html::addCssClass($circle_options, "checkout-progress-bar_done");
          Html::addCssClass($bar_options, "checkout-progress-bar_done");
        } else {
          Html::addCssClass($circle_options, "checkout-progress-bar_active");
          Html::addCssClass($bar_options, "half");
        }
      }
      if($this->current_step === $i + 2) {
        Html::addCssClass($circle_options, "checkout-progress-bar_done");
        Html::addCssClass($bar_options, "checkout-progress-bar_done");
        $label =  '&#10003;';
      } else {
        if($this->current_step_done && $this->current_step === $i + 1)
          $label =  '&#10003;';
        else
          $label = $this->steps[$i]['label'];
      }
      echo Html::beginTag('div', $circle_options) . "\n";
        if(array_key_exists('url',$this->steps[$i])) {
          echo Html::tag('span', Html::a($label,$this->steps[$i]['url']), ['class'=>'checkout-progress-bar_label']) . "\n";
          echo Html::tag('span', Html::a($this->steps[$i]['title'],$this->steps[$i]['url']), ['class'=>'checkout-progress-bar_title']) . "\n";
        } else {
          echo Html::tag('span', $label, ['class'=>'checkout-progress-bar_label']) . "\n";
          echo Html::tag('span', $this->steps[$i]['title'], ['class'=>'checkout-progress-bar_title']) . "\n";
        }
      echo Html::endTag('div') . "\n";
      if($i < count($this->steps)-1)
        echo Html::tag('span', '', $bar_options) . "\n";
    }
    echo Html::endTag('div') . "\n";
}

/**
 * Registers the needed client assets
 */
public function registerAssets()
{
   // $view = $this->getView();
    //CheckoutProgressAsset::register($view);

}
}
