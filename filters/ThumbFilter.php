<?php

namespace app\filters;

class ThumbFilter extends \luya\admin\base\Filter
{
    public static function identifier()
    {
        return 'my-filter';
    }

    public function name()
    {
        return 'my App Filter';
    }

    public function chain()
    {
        return [
            [self::EFFECT_THUMBNAIL, [
                'width' => 100,
                'height' => 100,
            ]],
        ];
    }
}
