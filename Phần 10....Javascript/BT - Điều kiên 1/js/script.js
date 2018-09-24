//Bài 1
console.log('--Bài 1--')
function bai1(a, b) {
  if (typeof a == "number" && typeof b == "number") {
      if (a > b){ //cho giá trị của a và b là number
         return "A là số lớn hơn"//chạy a là số lớn hơn
                                     }
      if (a < b){
         return "A là số bé hơn"//chạy b là số bé hơn
                                     }
                                     }
  if (typeof a != "number" && typeof b != "number") {
    return "A và B không là số";//cho giá trị của a và b không phải là số.
  }

}
console.log(bai1(2,1));//cho giá trị của a là 2 và của b là 1 thì suy ra a là số lớn hơn
console.log(bai1(1,2));//cho giá trị của a là 1 và b là 2 suy ra a là số bé hơn
//Bài 2
console.log('--Bài 2--')
function bai2(n) {
if (n > 0) {
   var i;
  var gt = 1;
 
  for (i = 1; i <= n; i = i + 1) {
    gt = gt*i;
  }
  return "giai thừa của " + n + " là: " + gt;
  }
if (n < 0) {
   return +  n + " không phải là số nguyên dương";
  }
  
}
//vd:
console.log(bai2(5));
console.log(bai2(-1));
console.log(bai2(3));
console.log(bai2(-6));
// Bài 3
console.log('--Bài 3--');
function bai3(arr) {
	var arr2 = [];
	for (var i = 0; i < arr.length; i = i + 1) {
		if (arr[i] % 2 == 0) {
			arr2.push(arr[i]);
		}
	}
	arr2.sort(function(a, b){return b-a});
	return arr2;
}
arr = [1,2,3,4,5,6,7,8,9,10];
console.log('Mảng ban đầu:',arr);
console.log('Mảng chẵn giảm dần:',bai3(arr));
var acc1 = {
	userName: "duyanh",
	passWord: "secret",
	conFirm: "secret"
};
//bai4
function bai4(acc) {
	if (acc.userName.length == "" || acc.userName == " ") {
		return "Tên đăng nhập rỗng! Nhập lại!";		
	} else if (acc.userName.length > 20) {
		return "Tên đăng nhập quá dài! Nhập lại";			
	} else if (acc.passWord.length < 6) {
		return "Mật khẩu quá ngắn! Nhập lại!";			
	} else if (acc.passWord.length > 32) {
		return "Mật khẩu quá dài! Nhập lại!" ;
	} else if (acc.conFirm != acc.passWord) {
		return "Xác nhận mật khẩu bị sai!";
	};
	
	if (acc.userName.length <= 20 && acc.userName.length != "" && acc.userName != " " && acc.passWord.length >= 6 && acc.passWord.length <= 32 && acc.conFirm == acc.passWord) {
		console.log("User name:",acc.userName);
		console.log("Password:",acc.passWord);	
		return "Confirm!";
	};	
};