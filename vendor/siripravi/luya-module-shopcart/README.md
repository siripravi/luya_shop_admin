# Cart Module

File has been created with `module/create` command. 

## Installation

In order to add the modules to your project go into the modules section of your config:

```php
return [
    'modules' => [
        // ...
        'cartfrontend' => [
            'class' => 'siripravi\shopcart\frontend\Module',
            'useAppViewPath' => true, 
        ],
        'cartadmin' => 'siripravi\shopcart\admin\Module',
        // ...
    ],
];
```
