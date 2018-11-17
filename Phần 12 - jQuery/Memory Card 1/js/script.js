var cards = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'f13', 'f14', 'f16', 'f17'];
var current = null;
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex){
		randomIndex = Math.floor(Math.random()*currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
function flip(card) {
	console.log(card);
	$(card).toggleClass('flipped');
	if (!current) {
		current = $(card);
	}else {
		if (current.attr('data-name') != $(card).attr('data-name')){
			console.log('Khác nhau');
			current.toggleClass('flipped');
			$(card).toggleClass('flipped');
			current=null;
		} else {
			setTimeout(function(){
				console.log('Giống nhau')
				$(card).css('opacity', '1');
				current.css('opacity', '1');
				current=null;
			}, 200);
		}

	}
}
	



