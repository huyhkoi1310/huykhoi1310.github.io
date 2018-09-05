// Bài 1
console.log('-----Bài 1-----')
function bai1(num) {
	return x*x;
}
console.log('Testcase')
console.log(bai1(3));
console.log(bai1(5));

// Bài 2
console.log('-----Bài 2-----')
function bai2(a, b, c) {
	var x;
	x = 3*a + 2*b - c;
	return bai1(x);
}
console.log('Testcase')
console.log(bai2(1,2,3));
console.log(bai2(4,5,6));

// Bài 3
console.log('-----Bài 3-----')
var str = "Sơn Tùng MTP là một trong những ca sĩ được yêu thích nhất trong làn ca sĩ của việt nam";
console.log('Chuỗi ban đầu là:',str);
console.log('Có:',str.length,'ký tự');
function bai3() {
	var res = str.slice(0,10) + '...';
	return res;

	// var res = str.replace(str.slice(10,65),'...');
	// return res;	
}
console.log('Kết quả sau khi cắt chuỗi:')
console.log(bai3());

// Bài 4
console.log('-----Bài 4-----')
function bai4(str) {
	var res = str.toLowerCase();
	var res_upper = res.replace(res[0],res[0].toUpperCase());
	return res_upper;
}
console.log('Testcase');
var str = "welcome to Techmaster";
console.log(str);
console.log(bai4(str));

// Bài 5
console.log('-----Bài 5-----')
function bai5(arr) {
	var sorted = arr.sort(function(a, b){return a-b});
	return sorted[0];
}
console.log('Testcase');
var arr = [3,6,8,4,2,7];
console.log('Ta có mảng:',arr);
console.log('Phần tử nhỏ nhất của mảng là:',bai5(arr));

// Bài 6
console.log('-----Bài 6-----')
function bai6(arr) {
	return arr.sort();
}
console.log('Testcase');
var arr = ["Yasuo","Red","Teemo","Fizz","Garen"];
console.log('Danh sách học viên:',arr);
console.log('Sắp xếp:',bai6(arr));

// Bài 7
console.log('-----Bài 7-----')
var teacher = {
	firstName: "Sơn",
	lastName: "Tùng",
	age: 24,
	say: function(){}
}

var student = {
	firstName: "Hoàng",
	lastName: "Sơn",
	age: 25,
	say: function(){}
}

var parent = {
	firstName: "Khởi",
	lastName: "My",
	age: 28,
	say: function() {}
}

var aboutMe = function() {
	console.log("Xin chào, tôi là " + this.firstName + " " + this.lastName + ". "
	 + "Năm nay tôi " + this.age + " tuổi.");
}

console.log('Nhập để tìm thầy giáo/học sinh/phụ huynh');
function bai7(teacher) {
	teacher.say = aboutMe;
	teacher.say();
}

function bai7(student) {
	student.say = aboutMe;
	student.say();
}

function bai7(parent) {
	parent.say = aboutMe;
	parent.say();
}