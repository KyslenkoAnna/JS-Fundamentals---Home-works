//Task #1
function yourName(){
    console.log(document.querySelector('#inp').value);
}

    document.querySelector('.btn').addEventListener('click', yourName);
/* document.querySelector('.btn').onclick = yourName; */

//Task #2
let receiveBtn=document.getElementById('choose'),
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.close');


window.onload = function(){
receiveBtn.addEventListener('click', function(){
        modal.style.display='block';
});
}
closeBtn.addEventListener('click', function(){
    modal.style.display='none';
});

//Task #3
let i = -1;
	function trafficLight(){
		i++;
		let arr = ['green','yellow','red'],
			changeColor = document.querySelectorAll('.traffic_color');
		if(changeColor[i-1]) changeColor[i-1].style.backgroundColor = '';
		if(i == arr.length) i = 0;
		changeColor[i].style.backgroundColor = arr[i];
	}