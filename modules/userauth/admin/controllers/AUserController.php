<?php

namespace app\modules\userauth\admin\controllers;

/**
 * User Controller.
 *
 * File has been created with `crud/create` command.
 */
/**
 * User Controller.
 * 
 * The example assumes that app\modules\myapimodule\models\User implements the luya\admin\base\JwtIdentityInterface
 */
class AUserController extends \luya\admin\ngrest\base\Api
{
    /**
     * @var array Define methods which does not require authentication
     */
    public $authOptional = ['login', 'signup'];

    /**
     * @var string The path to the model which is the provider for the rules and fields.
     */
    public $modelClass = 'app\modules\userauth\models\ApiUser';

    /**
     * Make user login and return the user with the fresh generated JWT token which is stored in the user.
     * 
     * > No authentication needed.
     */
    public function actionLogin()
    {
        $model = new ApiUser();
        $model->scenario = ApiUser::SCENARIO_LOGIN;
        if ($model->load(Yii::$app->request->post(), '') && $model->validate()) {
            $user = User::find()->where(['email' => $model->email])->one();
            if ($user && Yii::$app->security->validatePassword($model->password, $user->password)) {
                if ($user->updateAttributes(['jwtToken' => Yii::$app->jwt->generateToken($user)])) {
                    return $user;
                }
        
            } else {
                $model->addError('email', 'Unable to find the given email or password is wrong.');
            }
        }

        return $this->sendModelError($model);
    }

    /**
     * Allow users to signup which will create a new user.
     * 
     * > No authentication needed.
     *
     * @return User
     */
    public function actionSignup()
    {
        $model = new ApiUser();
        if ($model->load(Yii::$app->request->post(), '') && $model->save()) {
            return $model;
        }

        return $this->sendModelError($model);
    }

    /**
     * Returns the currently logged in JWT authenticated user.
     *
     * > This method requires authentication.
     * 
     * @return User
     */
    public function actionMe()
    {
        return Yii::$app->jwt->identity;
    }
}
