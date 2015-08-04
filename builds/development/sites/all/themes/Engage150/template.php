<?php
function engage150_preprocess_views_view__gallery(&$variables) {
	die("ERERER");
	print_r(array_keys($variables));
   	 $variables['template_files'][] = "gallery.page.tpl.php";
}


?>