<?php

use luya\Config;
$test = "strange";
$params = require __DIR__ . '/params.php';
$config = new Config('myproject', dirname(__DIR__), [
    'siteTitle' => 'Cake Zone',
    'defaultRoute' => 'cms',
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],    
    'modules' => [
        'gridview' =>  [
            'class' => '\kartik\grid\Module'
        ],
        'forms' => [
            'class' => 'siripravi\forms\Module',
            // 'useAppViewPath' => true,
            //'viewMap' => ['block/*' =>'@app/views/blocks/']

        ],
       
        'userauthfrontend' => [
            'class' => 'app\modules\userauth\frontend\Module',
            'useAppViewPath' => false, // When enabled the views will be looked up in the @app/views folder, otherwise the views shipped with the module will be used.
            'params' => [
                'userauth_redirect_nav_id'  => 20,
                //'userauth_afterlogin_nav_id' => 21
            ]
        ],
        'userauthadmin' => 'app\modules\userauth\admin\Module',
        'user' => [
            'class' => 'siripravi\authhelper\Module',
            'layout' => '@app/themes/cakeBaker/views/layouts/auth',
            'modelMap' => [
                'RegistrationForm' => app\modules\userauth\models\RegistrationForm::class,
                'RecoveryForm' => app\modules\userauth\models\RecoveryForm::class,
                'LoginForm' => app\modules\userauth\models\LoginForm::class,
                'SettingsForm' => app\modules\userauth\models\SettingsForm::class,
                'Profile' => app\modules\userauth\models\Profile::class,
                'User' => app\modules\userauth\models\User::class,

            ],
            'controllerMap' => [
                'registration' => app\modules\userauth\frontend\controllers\RegistrationController::class,
                'settings' => app\modules\userauth\frontend\controllers\SettingsController::class,
                'security' => app\modules\userauth\frontend\controllers\SecurityController::class,
                'recovery' => app\modules\userauth\frontend\controllers\RecoveryController::class
            ],
            'mailer' => [
                'viewPath' => '@app/views/user/mail',
                'sender'                => 'no-reply@myhost.com', // or ['no-reply@myhost.com' => 'Sender name']
                'welcomeSubject'        => 'Welcome subject',
                'confirmationSubject'   => 'Confirmation subject',
                'reconfirmationSubject' => 'Email change subject',
                'recoverySubject'       => 'Recovery subject',
            ],
            // 'as frontend' => app\modules\user\filters\FrontendFilter::class,
            // 'enableFlashMessages' => false
        ],

        // Admin module for the `cms` module.
        'cmsadmin' => [
            'class' => 'luya\cms\admin\Module',
        ],
        // Frontend module for the `cms` module.
        'cms' => [
            'class' => 'luya\cms\frontend\Module',
            'contentCompression' => true, // compressing the cms output (removing white spaces and newlines)
        ],
        /*
         * If you have other admin modules (e.g. cmsadmin) then you going to need the admin. The Admin module provides
         * a lot of functionality, like storage, user, permission, crud, etc.
         */
        'admin' => [
            'class' => 'luya\admin\Module',
            'secureLogin' => false, // when enabling secure login, the mail component must be proper configured otherwise the auth token mail will not send.
            'strongPasswordPolicy' => false, // If enabled, the admin user passwords require strength input with special chars, lower, upper, digits and numbers
            'interfaceLanguage' => 'en', // Admin interface default language. Currently supported: en, de, ru, es, fr, ua, it, el, vi, pt, fa
            'autoBootstrapQueue' => true, // Enables the fake cronjob by default, read more about queue/scheduler: https://luya.io/guide/app-queue
        ],
        'ecommerce' => 'siripravi\ecommerce\frontend\Module',
        'catalogadmin' => 'siripravi\ecommerce\admin\Module',
        'gallery' => [
            'class' => 'luya\gallery\frontend\Module',
            'useAppViewPath' => true, // When enabled the views will be looked up in the @app/views folder, otherwise the views shipped with the module will be used.
        ],
        'galleryadmin' => 'luya\gallery\admin\Module',
        'shopcart' => 'siripravi\shopcart\frontend\Module',
        'shopcartadmin' => 'siripravi\shopcart\admin\Module',
    ],
    'components' => [
        'storage' => [
            'class' => 'luya\admin\filesystem\LocalFileSystem',
            'whitelistExtensions' => ['jpg', 'png'],
            'whitelistMimeTypes' => ['text/plain', 'image/svg+xml'], // as this is the mime type for csv files
        ],
        'forms' => [
            'class' => 'siripravi\forms\Forms'
        ],

        'session' => [
            'class' => 'yii\web\Session',
        ],
        'user' => [
            'class' => 'yii\web\User',
            'identityClass' => app\models\User::class,
            'enableAutoLogin' => true,
            'enableSession' => true,
            'identityCookie' => [
                'name'     => '_frontendIdentity',
                'path'     => '/',
                'httpOnly' => true,
            ],
            'on afterLogin' => function () {
                //  if (Yii::$app->cart->saveToDataBase) Yii::$app->cart->transportSessionDataToDB();
            },
            'on afterConfirm' => function () {
                //  if (Yii::$app->cart->saveToDataBase) Yii::$app->cart->transportSessionDataToDB();
            },
        ],
      
        'cart' => [
			'class' => 'siripravi\shopcart\components\Cart',
			'storage' => [
				'class' => 'siripravi\shopcart\components\MultipleStorage',
				'storages' => [
					['class' => 'siripravi\shopcart\components\SessionStorage'],
					[
						'class' => 'siripravi\shopcart\components\DatabaseStorage',
						'table' => 'cart',
					],
				],
			]
		],

                    
        /*  'urlManager' => [
           // 'class' => 'app\components\SiteUrlManager',           
            'enablePrettyUrl' => true,
            'showScriptName' => false,
           
            'rules' => [
               // '' => 'catalog/default/index',
                '<controller:cart|podbor|info>' => '<controller>/index',
                'thankyou' => 'cart/index',
                '<action:(login|signup)>' => 'site/<action>',
                'info/<slug:[0-9a-z\-]+>' => 'info/view',
                'popcron' => 'cron/finance',
                'sitemap.xml' => 'sitemap/index',
                'sitemap_ua.xml' => 'sitemap/ua',
                'sitemap_ru.xml' => 'sitemap/ru',
                '<slug:[0-9a-z\-]+>.html' => 'site/page',               
			],
        ],*/

        'db' => [
            'class' => 'yii\db\Connection',
            'charset' => 'utf8',
        ],
        /*   'request' => [
            'enableCookieValidation' => true,
            'cookieValidationKey' => 'I-mmzHGFYAx9EnASWbueCBRo4W4HQBKHA_-',
            'enableCsrfValidation' => false,
        ],  */

        'MyGlobalClass' => [
            'class' => 'app\components\MyGlobalClass'
        ],

        'assetManager' => [
            'linkAssets' => false,
            'appendTimestamp' => true,
            'bundles' => [
                'yii\bootstrap5\BootstrapAsset' => [
                   // 'css' => []
                ],
                'yii\bootstrap5\BootstrapPluginAsset' => [
                    'js' => ["https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"],
                    'css' => ["https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"],
                ],

            ],
        ],

        'mailer' => [
            'class' => \yii\symfonymailer\Mailer::class,
            /*  'transport' => [
                'scheme' => 'smtps',
                'host' => 'smtp.gmail.com',
                'username' => 'provdigi@gmail.com',
                'password' => '*',
                'port' => 465,
                'dsn' => 'native://default',
            ],*/
            'viewPath' => '@app/mail',
            // send all mails to a file by default.
            'useFileTransport' => true,
            /* 'transport' => [
                'dsn' => 'smtp://purnachandra.valluri@gmail.com:xxxx@smtp.gmail.com:465',
            ],*/
        ],
        /*
         * Add your smtp connection to the mail component to send mails (which is required for secure login), you can test your
         * mail component with the luya console command ./vendor/bin/luya health/mailer.
         */
        'mail' => [
            'isSMTP' => false,
            'from' => 'test@luya.io',
            'fromName' => 'test@luya.io',
        ],
        'view' => [],
        /*
         * The composition component handles your languages and they way your urls will look like. The composition components will
         * automatically add the language prefix  is defined in `default` to your url (the language part in the url  e.g. "yourdomain.com/en/homepage").
         *which
         * hidden: (boolean) If this website is not multi lingual you can hide the composition, other whise you have to enable this.
         * default: (array) Contains the default setup for the current language, this must match your language system configuration.
         */
        'composition' => [
            'hidden' => true, // no languages in your url (most case for pages which are not multi lingual)
            'default' => ['langShortCode' => 'en'], // the default language for the composition should match your default language shortCode in the language table.
        ],
        /*
    	 * Translation component. If you don't have translations just remove this component and the folder `messages`.
    	 */
        'i18n' => [
            'translations' => [
                'app*' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                ],
            ],
        ],
    ],
    'params' => $params,
]);


// database config for 
$config->component('db', [
    'dsn' => 'mysql:host=localhost;dbname=luyashopbs4',
    // 'dsn' => 'mysql:host=localhost;dbname=DB_NAME;unix_socket=/Applications/MAMP/tmp/mysql/mysql.sock', // OSX MAMP
    // 'dsn' => 'mysql:host=localhost;dbname=DB_NAME;unix_socket=/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock', // OSX XAMPP
    'username' => 'root',
    'tablePrefix' => '',
    'password' => '',
])->env(Config::ENV_DEV);

$config->webComponent('request', [
    'enableCookieValidation' => true,
    'cookieValidationKey' => 'I-mmzHGFYAx9EnbueCBRAXDo4W4HQBKHA_-',
    'enableCsrfValidation' => false,
])->env(Config::ENV_DEV);

$config->component('cache', [
    'class' => 'yii\caching\FileCache'
])->env(Config::ENV_DEV);

$config->module('debug', [
    'class' => 'yii\debug\Module',
    'allowedIPs' => ['*'],
]);

return $config;
