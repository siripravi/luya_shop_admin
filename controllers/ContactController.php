<?php

namespace app\controllers;

use yii\web\Controller;

class ContactController extends Controller
{
   // public $layout = false;
    public function actionIndex()
    {
        //this->context->layout = false;
       // return $this->renderFile('index.html');
       return "Your message sent successfully!";
    }

    public function actionContact()
    {
        $email = $_POST['email'];

        // Validate that the domain is "gmail.com" using regex
        $pattern = "/@gmail\.com$/i"; // Case-insensitive match for "@gmail.com" at the end of the email address
        $error = !preg_match($pattern, $email);

        // Sanitize email to avoid XXS
        $sanitizedEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');

        // Create error message if there's an error
        $errorMessage = $error ? '<div class="error-message">Only Gmail addresses accepted!</div>' : '';

        // Construct the HTML template, with conditional error message
        $template = <<<EOT
  <div hx-target="this" hx-swap="outerHTML">
    <label>Email:
      <input type="email" name="email" hx-post="/contact/email" value="$sanitizedEmail">
      $errorMessage
    </label>
  </div>
EOT;

        // return the template
        return $template;
    }
}



// Get the email from the form submission
