<?php

/*
 * User routes
 */
$app->get('/clients/{id}',       'Sheaker\Controller\ClientController::getClient');
