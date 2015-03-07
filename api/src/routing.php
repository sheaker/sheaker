<?php

/*
 * User routes
 */
 $app->get('/clients',      'Sheaker\Controller\ClientController::existClient');
 $app->get('/clients/{id}', 'Sheaker\Controller\ClientController::getClient')->assert('id', '\d+');
