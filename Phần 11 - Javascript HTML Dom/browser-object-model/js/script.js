var arr=[
	{
		Quest : 'Trong các tướng sau tướng nào không phải là khắc tinh của Yasuo',
		A : 'Reven',
		B : 'Jax',
		C : 'Jinx',
		D : 'Akali',
		tr : 'Jinx'
	},
	{
		Quest : 'Trong các tướng sau tướng có thể dồn AP(Phép) bằng kĩ năng là tướng nào',
		A : 'Zoe',
		B : 'Temmo',
		C : 'Fizz',
		D : 'Veigar',
		tr : 'Veigar'
	},
	{
		Quest : 'Trong các tướng sau tướng nào không phải pháp sư',
		A : 'Ahri',
		B : 'Amumu',
		C : 'Aurolion Sol',
		D : 'Yasuo',
		tr : 'Yasuo'
	},
	{
		Quest : 'Giữa Zed và Yasuo ai mạnh hơn',
		A : 'Zed',
		B : 'Yasuo',
		C : 'Không ai',
		D : 'Tuỳ thằng đánh',
		tr : 'Tuỳ thằng đánh'
	},
	{
		Quest : 'Khi chơi LOL Star bạn sợ gì nhất',
		A : 'Yasuo',
		B : 'Zed',
		C : 'Đội Bạn',
		D : 'Đồng đội Ngu',
		tr : 'Đồng đội Ngu'
	},
	{
		Quest : 'Trong các tướng sau tướng nào không có khả năng bất tử ?',
		A : 'Trydame',
		B : 'Eko',
		C : 'Maphai',
		D : 'Zilean',
		tr : 'Maphai'
	},
	{
		Quest : 'Trong các tướng sau tướng nào có máu trâu bò nhất LOL ?',
		A : 'Garen',
		B : 'Maphai',
		C : 'Taric',
		D : 'ChoGath',
		tr : 'ChoGath',
	},
	{
		Quest : 'Zed sợ ai nhất ?',
		A : 'Yasuo',
		B : 'Tristina',
		C : 'Thằng không biết chơi',
		D : 'Jax',
		tr : 'Thằng không biết chơi',
	},
	{
		Quest : 'Yasuo đi vị trí nào là yếu nhất?',
		A : 'Mid',
		B : 'Top',
		C : 'Rừng',
		D : 'Bots',
		tr : 'Rừng',
	},
	{
		Quest : 'Annie cần bao nhiêu hoả phép để có thể choáng mục tiêu?',
		A : '1',
		B : '2',
		C : '3',
		D : '4',
		tr : '4',
	},
];
var q= document.querySelectorAll('.change');
document.getElementById('a').style.display = 'none';
document.getElementById('b').style.display = 'none';
document.getElementById('c').style.display = 'none';
document.getElementById('d').style.display =' none';
	 

var num=0;var dem=0;
var start=document.querySelector('.start');
start.addEventListener('click',run);


// xet khi click 
function run(){
	document.getElementById('q').innerHTML = arr[0].Quest;
	document.getElementById('a').innerHTML = arr[0].A;
	document.getElementById('b').innerHTML = arr[0].B;
	document.getElementById('c').innerHTML = arr[0].C;
	document.getElementById('d').innerHTML = arr[0].D;
	document.getElementById('a').style.display = 'inline-block';
	document.getElementById('b').style.display = 'inline-block';
	document.getElementById('c').style.display = 'inline-block';
	document.getElementById('d').style.display = 'inline-block';
	for (let i=0; i<q.length ; i++){
		q[i].addEventListener('click', function(){
			num++;	
			if ( num<arr.length){
				if ( this.innerHTML==arr[num-1].tr){ dem=dem+1};
				//alert( this.innerHTML +' ' +arr[num-1].tr+' '+ dem +'xx'+arr.length);
				document.getElementById('q').innerHTML = arr[num].Quest;
				document.getElementById('a').innerHTML = arr[num].A;
				document.getElementById('b').innerHTML = arr[num].B;
				document.getElementById('c').innerHTML = arr[num].C;
				document.getElementById('d').innerHTML = arr[num].D;
			}
			else if ( num==arr.length){ 
				if ( this.innerHTML==arr[num-1].tr){ dem=dem+1};
				document.getElementById('q').innerHTML =' Cũng chưa gọi là bess lắm mới vượt qua được'+ dem +'/10 câu hỏi <br/> Gà !! :)) ';
				if (dem>=10){
						window.location.assign('text1.html');

				}
				document.getElementById('a').style.display = 'none';
				document.getElementById('b').style.display = 'none';
				document.getElementById('c').style.display = 'none';
				document.getElementById('d').style.display = 'none';
				//num=0;dem=0;
			}
		});
	};	
}

var re=document.querySelector('.re');
re.addEventListener('click',function(){
	window.location.assign('text.html');
});

