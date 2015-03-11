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
            $authorizationHeader = $request->headers->get('Authorization');
            if ($authorizationHeader == null) {
                $app->abort(Response::HTTP_UNAUTHORIZED, 'No Authorization token sent');
            }

            $client = $app['repository.client']->find($getParams['id']);
            if (!$client) {
                $app->abort(Response::HTTP_NOT_FOUND, 'Client not found');
            }

            $token = explode(' ', $authorizationHeader)[1];
            try {
                $decodedToken = \JWT::decode($token, $client->getSecretKey());
            }
            catch (UnexpectedValueException $ex) {
                $this->app->abort(Response::HTTP_UNAUTHORIZED, 'Invalid token');
            }

            if (!in_array('admin', $decodedToken->user->permissions) && !in_array('modo', $decodedToken->user->permissions)) {
                $app->abort(Response::HTTP_FORBIDDEN, 'Forbidden');
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
