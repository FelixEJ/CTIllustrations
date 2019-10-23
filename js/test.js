<script type="text/javascript">
$(document).ready(function() {

    //fill container with test images
    $('#container').append(new Array(60).join(
	'<a href="http://www.google.com/images/logos/ps_logo2.png" target="_blank">
	<img src="http://www.google.com/images/logos/ps_logo2.png" width="64" height="64" /></a>'))

    var $images = $('#container img');

    $images.hide();

    $images.each(function(index) {
        $(this).delay(index * 50).fadeIn();
    });

});
</script>