var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");

// Bài 1
console.log('--Bài 1--')
function changeFontSize(x) {
	p1.style.fontSize = x+"px";
	p2.style.fontSize = x+"px";
	p3.style.fontSize = x+"px";
}

// Bài 2
console.log('--Bài 2--');
function increaseFontSize(p) {
	var fontSize = p.style.fontSize;
	var x = parseInt(fontSize)
	if (x < 30) {
		x++;
		p.style.fontSize = x+"px";
	} else {
		alert("Font size > 30px! Không thể tăng thêm!");
	}
}
//Bài 3
console.log('--Bài 3--')
function decreaseFontSize(p){
	var fontSize = p.style.fontSize;
	var x = parseInt(fontSize)
	if (x > 10) {
		x--;
		p.style.fontSize = x+"px";
	}else{
		alert("Font size < 10px! Không thể giảm thêm");
	}
}
//Bài 4
console.log("--Bài 4--")
function changeColor(){
	p1.style.color = "green";
	p2.style.color = "yellow";
	p3.style.color = "red";
}
//Bài 5
console.log("--Bài 5--")
function changeBgColor(color){
	
}