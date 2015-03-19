<?php

/**
 * Client routes
 */
$app->get('/clients', 'Sheaker\Controller\ClientController::getClient');

/**
 * Informations routes
 */
$app->get('/infos', 'Sheaker\Controller\MainController::getInfos');
