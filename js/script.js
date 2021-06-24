var nickname;
var	najata=false;

document.addEventListener("keydown",probel,false);
window.onload = function(){ //запускается при загрузке страницы
	document.getElementById('login').value=localStorage.getItem('name');
	if(document.getElementById('login').value.trim()!=''){  //Если поле логин пустое, то кнопка заблокирована
		document.getElementById('start').disabled=false;

		var a = document.querySelector('#text');
		
		
	}
}
function probel(e){
	if(e.keyCode==32&&najata){
		window.location.href='game.html';
	}
}
function start(){
	if(document.getElementById('login').value.trim()!=''){ //Если поле логин пустое, то кнопка заблокирована
		document.getElementById('start').disabled=false;
	}
	else{
		document.getElementById('start').disabled = true;
	}
}

function go(){
	nickname=document.getElementById('login').value;
	localStorage.setItem('name',nickname);
	najata=true;
	localStorage.setItem("hero",document.getElementById("hero").value);
	$("#video").css("display","block");
	$(".panel").css("display","none");
	document.getElementById('video').play();
	document.getElementById('video').volume=0.2;

	document.getElementById('start').disabled = true;
	setTimeout(function() {window.location.href='game.html';}, 25000);//спустя 25 секунд перенаправляет на страницу игры

}






