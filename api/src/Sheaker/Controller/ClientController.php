<?php

namespace Sheaker\Controller;

use Sheaker\Entity\Client;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ClientController
{
    public function getClient(Request $request, Application $app)
    {
        $getParams = [];
        $getParams['id'] = $app->escape($request->get('id'));
        $getParams['subdomain'] = $app->escape($request->get('subdomain'));

        if (!empty($getParams['id'])) {
            $client = $app['repository.client']->find($getParams['id']);
            if (!$client) {
                $app->abort(Response::HTTP_NOT_FOUND, 'Client not found');
            }
        }
        else if (!empty($getParams['subdomain'])) {
            $client = $app['repository.client']->findBySubdomain($getParams['subdomain']);
            if (!$client) {
                $app->abort(Response::HTTP_NOT_FOUND, 'Client not found');
            }

            unset($client->secretKey);
        }
        else {
            $app->abort(Response::HTTP_BAD_REQUEST, 'Missing parameters');
        }

        return json_encode($client, JSON_NUMERIC_CHECK);
    }
}
