function tinhCanBacHai(a){
	var s='';
	s=s+a;
	console.log(s);
	const display = document.getElementById('x');
	display.value+=s;
	var tg=s.slice(1);
	var kq=Math.sqrt(Number(tg));
	display.value=s;
}