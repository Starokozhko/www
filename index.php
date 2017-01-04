<?php
	include('header.php');
?>

			<div class="content">
<?php
	$content = $_GET[content];
	if($content == ""){
		include('content_index.php');
	} else {
		include('content.php');
	}
?>
				<!-- 	<div class="item">
					<h2>Название статьи 0</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolorem repellendus eum eveniet illum mollitia!</p>
					<ul id="icons" class="ui-widget ui-helper-clearfix">
						<li class="ui-state-default ui-corner-all" title=".ui-icon-person"><span class="ui-icon ui-icon ui-icon-person"></span>51</li>
						<li class="ui-state-default ui-corner-all" title=".ui-icon-comment"><span class="ui-icon ui-icon-comment"></span>15</li>
					</ul>
				</div>

				<div class="item">
					<h2>Название статьи 1</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolorem repellendus eum eveniet illum mollitia!</p>
					<ul id="icons" class="ui-widget ui-helper-clearfix">
						<li class="ui-state-default ui-corner-all" title=".ui-icon-person"><span class="ui-icon ui-icon ui-icon-person"></span>23</li>
						<li class="ui-state-default ui-corner-all" title=".ui-icon-comment"><span class="ui-icon ui-icon-comment"></span>3</li>
					</ul>
				</div>

				<div class="item">
					<h2>Название статьи 2</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolorem repellendus eum eveniet illum mollitia!</p>
					<ul id="icons" class="ui-widget ui-helper-clearfix">
						<li class="ui-state-default ui-corner-all" title=".ui-icon-person"><span class="ui-icon ui-icon ui-icon-person"></span>20</li>
						<li class="ui-state-default ui-corner-all" title=".ui-icon-comment"><span class="ui-icon ui-icon-comment"></span>19</li>
					</ul>
				</div> -->

				
			<?php
			include('footer.php');
			?>