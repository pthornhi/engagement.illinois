<!doctype html>
<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <title>Office of Public Engagement</title>
	  <link rel="stylesheet" href="/css/style.css">
	  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	  <script type="text/javascript" src="/js/script.js"></script>
	</head>
	<body class="gallery">
	    <!-- SLIDE NAVIGATION --> 
		<nav class="slide-menu push-menu-top">
		    <ul>
			    <li class="mobile-icon nav-item"><button class="nav-toggler toggle-push-top"></button><button class="close-menu"></button></li>
				<li class=""><a class="icon info" href="/about.html"><span>About</span></a></li>
				<li class=""><a class="icon rooms" href="/projects.html"><span>Major Projects</span></a></li>
				<li class=""><a class="icon info" href="/timeline.html"><span>Timeline</span></a></li>
                <li class=""><a class="icon dining" href="/events.html"><span>Events</span></a></li>
				<li class=""><a class="icon events" href="/newsletters.html"><span>Newsletters</span></a></li>
				<li class=""><a class="icon at<icon></icon>tractions" href="/involved.html"><span>Get Involved</span></a></li>
		    </ul>
		</nav><!-- /push menu top -->	

		<!-- greybar header -->
		<header id="greyheadbar" class="home">
			<section class="layout">
				<div id="logo150">
					<a href="/index.html"><img src="/css/images/greybar-logo.png"></a>
				</div><!-- close logo150 -->
				<div id="titlebox">Celebrating our Sesquicentennial 1867-2017</div>
				<div id="logo-donate">
                	<div id="logo">  <a href="http://illinois.edu/" target="_blank">
	<img src="/css/images/site-logo.png" alt="University of Illinois at Urbana-Champaign logo" /></a></div>
					<div id="donate">
						<a href="http://giving.illinois.edu/" target="_blank">
							<img src="/images/donate-btn.png" alt="DONATE BUTTON" class="donate-btn" />
						</a>
					</div><!-- donate -->
				</div><!-- close logo-donate -->
			</section><!-- layout -->
		</header><!-- greyheadbar -->

		<main id="wrapper">
			<nav class="gallery navbar">
			    <section class="layout">
			        <ul class="navlist">
						<li class="nav-item"><a class="icon info" href="/about.html"><span>About</span></a></li>
	                    <li class="nav-item"><a class="icon rooms" href="/projects.html"><span>Major Projects</span></a></li>
						<li class="nav-item"><a class="icon info" href="/timeline.html"><span>Timeline</span></a></li>                                         
	                    <li class="nav-item"><a class="icon dining" href="/events.html"><span>Events</span></a></li>
	                    <li class="nav-item"><a class="icon events" href="/newsletters.html"><span>Newsletters</span></a></li>	
						<li class="nav-item"><a class="icon at<icon></icon>tractions" href="/involved.html"><span>Get Involved</span></a></li>
			        </ul><!-- navlist -->
			    </section><!-- layout -->
			</nav><!-- navigation --> 
					
			 <!-- PAGE CONTENT --> 
			<div class="page" id="gallery">
				<?php print render($page['content']); ?>
			</div> <!-- page -->
		    
		    <!-- footer -->
			<footer>
				<section class="layout">
					<ul class="elements">
						<li class="element first"><a href="http://engage.illinois.edu">Office of Public Engagement</a> at the University of Illinois at Urbana-Champaign</li>
						<li class="element address">807 S. Wright Street, Champaign, IL 61820 </li>
						<li class="element phone">(217) 244-4448 </li>
						<li class="element phone"><a href="http://www.vpaa.uillinois.edu/policies/web_privacy.cfm" target="_blank">Privacy Notice</a></li>
						<li class="element email last"><a href="mailto:publicengagement@illinois.edu" alt="send email">email us</a></li>
					</ul><!-- elements -->
				</section><!-- layout -->
			</footer>
		</main><!-- wrapper -->
	</body>
</html>