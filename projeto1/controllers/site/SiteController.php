<?php

/**
*
* Controller do site.
*
* @author Code Universe
*
**/
class SiteController extends Controller
{

	public function index()
	{		
		$this->setLayout('site/shared/layout.php');
		$this->view('site/home/index.php');

	}

	public function contact() {
		$this->setLayout('site/shared/layout.php');
		$this->view('site/contact/index.php');
	}

	public function about() {
		$this->setLayout('site/shared/layout.php');
		$this->view('site/about/index.php');
	}

}