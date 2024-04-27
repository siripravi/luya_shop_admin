<?php

/*
 * This file is part of the Dektrium project.
 *
 * (c) Dektrium project <http://github.com/dektrium/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace siripravi\authhelper\traits;

use siripravi\authhelper\events\AuthEvent;
use siripravi\authhelper\events\ConnectEvent;
use siripravi\authhelper\events\FormEvent;
use siripravi\authhelper\events\ProfileEvent;
use siripravi\authhelper\events\ResetPasswordEvent;
use siripravi\authhelper\events\UserEvent;
use siripravi\authhelper\models\Account;
use siripravi\authhelper\models\Profile;
use siripravi\authhelper\models\RecoveryForm;
use siripravi\authhelper\models\Token;
use siripravi\authhelper\models\User;
use yii\authclient\ClientInterface;
use yii\base\Model;

/**
 * @author Dmitry Erofeev <dmeroff@gmail.com>
 */
trait EventTrait
{
    /**
     * @param  Model     $form
     * @return FormEvent
     * @throws \yii\base\InvalidConfigException
     */
    protected function getFormEvent(Model $form)
    {
        return \Yii::createObject(['class' => FormEvent::class, 'form' => $form]);
    }

    /**
     * @param  User|null $user
     * @return UserEvent
     * @throws \yii\base\InvalidConfigException
     */
    protected function getUserEvent(User $user = null)
    {
        return \Yii::createObject(['class' => UserEvent::class, 'user' => $user]);
    }

    /**
     * @param  Profile      $profile
     * @return ProfileEvent
     * @throws \yii\base\InvalidConfigException
     */
    protected function getProfileEvent(Profile $profile)
    {
        return \Yii::createObject(['class' => ProfileEvent::class, 'profile' => $profile]);
    }


    /**
     * @param  Account      $account
     * @param  User         $user
     * @return ConnectEvent
     * @throws \yii\base\InvalidConfigException
     */
    protected function getConnectEvent(Account $account, User $user)
    {
        return \Yii::createObject(['class' => ConnectEvent::class, 'account' => $account, 'user' => $user]);
    }

    /**
     * @param  Account         $account
     * @param  ClientInterface $client
     * @return AuthEvent
     * @throws \yii\base\InvalidConfigException
     */
    protected function getAuthEvent(Account $account, ClientInterface $client)
    {
        return \Yii::createObject(['class' => AuthEvent::class, 'account' => $account, 'client' => $client]);
    }

    /**
     * @param  Token        $token
     * @param  RecoveryForm $form
     * @return ResetPasswordEvent
     * @throws \yii\base\InvalidConfigException
     */
    protected function getResetPasswordEvent(Token $token = null, RecoveryForm $form = null)
    {
        return \Yii::createObject(['class' => ResetPasswordEvent::class, 'token' => $token, 'form' => $form]);
    }
}
