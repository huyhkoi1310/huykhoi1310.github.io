$('#form-register').on('submit', function() {
	console.log($('#user-name').val());
	if ($('#user-name').val().trim() == '') {
		return false;
	}
	return true;
})