<?php

namespace Sheaker\Controller;

use Sheaker\Entity\Client;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ClientController
{
    public function existClient(Request $request, Application $app)
    {
        $getParams = [];
        $getParams['subdomain'] = $app->escape($request->get('subdomain'));

        foreach ($getParams as $value) {
            if (!isset($value)) {
                $app->abort(Response::HTTP_BAD_REQUEST, 'Missing parameters');
            }
        }

        $client = $app['repository.client']->findBySubdomain($getParams['subdomain']);
        if (!$client) {
            $app->abort(Response::HTTP_NOT_FOUND, 'Client not found');
        }

        return json_encode(['subdomain' => $client->getSubdomain(), 'name' => $client->getName()], JSON_NUMERIC_CHECK);
    }

    public function getClient(Request $request, Application $app)
    {
        $authorizationHeader = $request->headers->get('Authorization');
        if ($authorizationHeader == null) {
            $app->abort(Response::HTTP_UNAUTHORIZED, 'No Authorization token sent');
        }

        //@Todo: Get Secret key for user X
        $token = explode(' ', $authorizationHeader)[1];
        try {
            $decodedToken = \JWT::decode($token, $this->secretKey);
        }
        catch (UnexpectedValueException $ex) {
            $this->app->abort(Response::HTTP_UNAUTHORIZED, 'Invalid token');
        }

        if (!in_array('admin', $decodedToken->user->permissions) && !in_array('modo', $decodedToken->user->permissions)) {
            $app->abort(Response::HTTP_FORBIDDEN, 'Forbidden');
        }

        $getParams = [];
        $getParams['id'] = $app->escape($request->get('id'));

        foreach ($getParams as $value) {
            if (!isset($value)) {
                $app->abort(Response::HTTP_BAD_REQUEST, 'Missing parameters');
            }
        }
    }
}
