<?php

/**
*
* Definição das rotas e seus respectivos controllers e actions
*
* @author Code Universe
*
**/

// rotas normais
$commonRoutes = array(
	'/'               => 'SiteController/index',
	'contato'         => 'SiteController/contact',
	'quem-somos'	  => 'SiteController/about',
);

// rotas POST
$commonPost = array(
	'submitContact' => 'ContactController/submitContact',
);

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;