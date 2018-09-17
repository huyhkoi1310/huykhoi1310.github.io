//Bài 1
console.log("--Bài 1--")
function bai1(x) {
	var i;
	return x*x;
}
// Vd :
console.log(bai1(1));
console.log(bai1(2));

//Bài 2
console.log("--Bài 2--")
function bai2(a, b, c) {
	var x;
	x = 3*a + 2*b - c;
	return bai1(x);
}
console.log(bai2(1,2,3));
console.log(bai2(2,3,4));