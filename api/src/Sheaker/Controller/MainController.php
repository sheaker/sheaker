<?php

namespace Sheaker\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class MainController
{
    public function getInfos(Request $request, Application $app)
    {
        $reserved_subdomains = [];
        foreach ($app['db']->fetchAll('SELECT * FROM reserved_subdomains rs') as $sub) {
            array_push($reserved_subdomains, $sub['subdomain']);
        }

        $infos = [];
        $infos['reserved_subdomains'] = $reserved_subdomains;

        return json_encode($infos, JSON_NUMERIC_CHECK);
    }
}
