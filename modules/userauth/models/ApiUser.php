<?php
namespace app\modules\userauth\admin\models;
class ApiUser extends \luya\admin\ngrest\base\NgRestModel implements luya\admin\base\JwtIdentityInterface
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'user';
    }

    /**
     * @inheritdoc
     */
    public static function ngRestApiEndpoint()
    {
        return 'api-user';
    }

    // ....... other ngrest models specific content ........... //

    /* JwtIdentityInterface */

    public function getId()
    {
        return $this->id;
    }

    public static function loginByJwtToken(\Lcobucci\JWT\Token\Plain $token)
    {
        // $userId = $token->claims()->get('uid');
        return self::findOne(['jwtToken' => $token->toString()]);
    }
}~