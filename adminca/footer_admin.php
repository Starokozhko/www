</div>


			<script src="../js/jquery-ui.js"></script>
			<script src="../js/myscript.js"></script>

			<script>



				$( "#button" ).button();
				$( "#button-icon" ).button({
					icon: "ui-icon-gear",
					showLabel: false
				});



				$( "#radioset" ).buttonset();



				$( "#controlgroup" ).controlgroup();



				$( "#tabs" ).tabs();



				$( "#dialog" ).dialog({
					autoOpen: false,
					width: 400,
					buttons: [
					{
						text: "Ok",
						click: function() {
							$( this ).dialog( "close" );
						}
					},
					{
						text: "Cancel",
						click: function() {
							$( this ).dialog( "close" );
						}
					}
					]
				});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});



$( "#datepicker" ).datepicker({
	inline: true
});




$( "#progressbar" ).progressbar({
	value: 20
});



$( "#spinner" ).spinner();



$( "#menu" ).menu();



$( "#tooltip" ).tooltip();



$( "#selectmenu" ).selectmenu();


// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
	);
</script>




?>
</body>
</html>