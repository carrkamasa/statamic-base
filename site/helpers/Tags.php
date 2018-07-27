<?php

namespace Statamic\SiteHelpers;

use Statamic\Extend\Tags as AbstractTags;
use GuzzleHttp\Client;

class Tags extends AbstractTags
{
    public function testTag()
    {
        // Make API call
        $api_response = file_get_contents('https://catfact.ninja/fact');

        // Decode to PHP object
        $api_data = json_decode($api_response);

        return $api_data->fact;
    }
}
