<?php

namespace App\Utils;
use App\Models\Setting;
use Illuminate\Support\Collection;

class WebConfig
{
    public static function getPaginationLimit()
    {
        $data = Setting::where('key', 'pagination_limit')->get('value');

        dd($data['value']);
        return $data['value'];
    }

    public static function getSettingValue($key)
    {
        $result = null;
        $data = Setting::where(['key' => $key])->first();
        if (isset($data)) {
            $result = json_decode($data['value'], true);
            if (is_null($result)) {
                $result = $data['value'];
            }
        }

        return $result;
    }
}
