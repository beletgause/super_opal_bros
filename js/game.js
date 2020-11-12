var main;
var pausemp3=true;
var ctxmain;
var mob;
var name;
var ctxmob;
var user;
var ctxUser;
var center=false;
var gameWidth = 1850;
var gameHeight = 895;
var hero='тимон';
var fon = new Image();
fon.src = "media/fon.png";
var polimg = new Image();
polimg.src="media/pol.png";
var blockimg = new Image();
blockimg.src="media/googleLogo.png";
var sec=0;
var time=0;
var	t=0;
var pol;
var ctxPol;
var score=0;
var zakop=false;
var fonX=0;
var userimg = new Image();
userimg.src="media/sprite.png";
var user2img = new Image();
user2img.src="media/sprite2.png";
var map = [];
var stayY;


var LeftRightUser = "SR";
var requestAnimFrame = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame;

var beginspeed = 0;
var grav = 0.5;
var tg = 0;
var maxJump = -16;
var num = 0;
var numg = 0;
var gusimg = new Image();
gusimg.src="media/help.png";
var gus = [];
var peshkaimg = new Image();
peshkaimg.src="media/peshkaSprite.png";
var gien = [];
var HP=100;

var CountGus = 0;

var pause=0;

window.onload = init;

function init (){
	name=localStorage.getItem('name');
	main = document.getElementById("main");
	ctxmain = main.getContext("2d");
	mob = document.getElementById("mob");
	ctxMob = mob.getContext("2d");

	pol = document.getElementById("pol");
	ctxPol = pol.getContext("2d");

	user = document.getElementById("user");
	ctxUser = user.getContext("2d");
	title = document.getElementById("title");
	ctxTitle = title.getContext("2d");

	main.width = gameWidth;
	main.height = gameHeight;

	pol.width = gameWidth;
	pol.height = gameHeight;
	mob.width = gameWidth;
	mob.height = gameHeight;

	user.width = gameWidth;
	user.height = gameHeight;
	title.width = gameWidth;
	title.height = gameHeight;

	ctxTitle.fillStyle = "#FFF";
	ctxTitle.font = "bold 20px Sans";


	pol_scena = new Pol();

	player = new Player();
	giens = new Giens();


	m=0;
	mm=0;
	s=0;
	ss=0;

	timerId=setInterval(timer,1000);

	Fon();
	pol_scena.draw();

	player.draw();
	EnterFrame();
	arrayGus();



	document.addEventListener("keydown", checkKeyDown, false);
	document.addEventListener("keyup", checkKeyUp, false);
}

function timer(){//Функция таймера
	if(!pause){
	ss++;
	if(ss==10){
		ss=0;
		s++;
		if(s==6){
			s=0;
			mm++;
			if(mm==10){
				m++;
				mm=0;
			}
		}
	}
	HP-=1;
	sec+=1;
	ctxTitle.clearRect(0,0,gameWidth,gameHeight);
	ctxTitle.font=' 20px Montserrat SemiBold'
	ctxTitle.fillText("Имя: "+ name+"        Брутфорс: " + CountGus+"%        Время:"+m+mm+":"+s+ss+ "        Здоровье: " + HP, 20 ,30);

	}


}
function EnterFrame(){

		update();
		requestAnimFrame(EnterFrame);

}

function update(){
	if (pause!=1) {
	player.chooseDir();
	giengo();
	player.draw();
	giens.draw();
	pol_scena.draw();
	GusDraw();
	}
	// console.log(pause);
}

function Fon(){//отрисовка фона
	ctxmain.clearRect(0,0,gameWidth,gameHeight);
	ctxmain.drawImage(fon,0,0,1888,1080,0,0,gameWidth,gameHeight);
}


function Pol(){//создание объектов для пола и возвышенностей
	this.srcX = 0;
	this.srcY = 900;
	this.drawX = 0;
	this.drawY = 0;
	this.width = 75;
	this.height = 64;

	map.push({x:0,y:750,width: 10000,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});
	map.push({x:Math.floor(Math.random()*6000)+450,y:550,width: this.width,height: this.height});



}

Pol.prototype.draw = function (){//отрисовка пола и возвышенностей
	ctxPol.clearRect(0,0,gameWidth,gameHeight);
	for (var i=0; i<map.length; i++){
		if (map[i].width==10000) {ctxPol.drawImage(polimg, this.srcX, this.srcY, 5000,
			this.height, map[i].x, map[i].y, 10000, this.height);}
			else{
		ctxPol.drawImage(blockimg, this.srcX, 0, 1200,
			1024, map[i].x, map[i].y, this.width, this.height);}
		var dir = colCheck(player, map[i]);//проверка колизии
		if (dir == "1"){
			player.drawY -= grav;
			beginspeed = 0;
			if (player.drawY < map[i].y)
			{
				player.drawY = map[i].y - player.height;
			}
		}
		if (!zakop) {
		if ((player.drawY + player.height > map[i].y) &&
		(player.drawY <= map[i].y + map[i].height + 5) &&
		(player.drawX + player.width / 2 > map[i].x) &&
		(player.drawX < map[i].x + map[i].width)){//проверка на нахождение персонажа на объекте

		player.drawY = map[i].y + map[i].height + 5;
		beginspeed += 0.9;
		player.isUp = false;

		}
	}
}
}

function Player(){
	this.srcX = 0;
	this.srcY = 0;
	this.drawX = 50;//90
	this.drawY = 600;
	this.width = 60;
	this.height = 45;

	this.isUp = false;
	this.isRight = false;
	this.isLeft = false;
	this.speed = 5;
	// console.log(gien);
}

Player.prototype.draw = function (){// отрисовка игрока
	finish();
	beginspeed += grav;

	ctxMob.clearRect(0,0,gameWidth,gameHeight);

	player.drawY += beginspeed;
	if (HP>100) {HP=100;}
	if(LeftRightUser == "R"){
		if (this.drawX<850&&this.drawX>830&&fonX!=6105) {
			center=true;
			fonX+=this.speed;
			ctxmain.clearRect(0,0,gameWidth,gameHeight);
			ctxmain.drawImage(fon,fonX,0,1888,1080,0,0,gameWidth,gameHeight);
			for (var i=0; i < gus.length; i++){
			ctxUser.clearRect(0,0,gameWidth,gameHeight);
			ctxUser.drawImage(gusimg, 0,0,1920,580,
			gus[i].x-=this.speed, gus[i].y, 50
				, 15);}
			for (var i=0; i < map.length; i++){
			ctxPol.clearRect(0,0,gameWidth,gameHeight);
			ctxPol.drawImage(polimg, 0,0,512,512,
			map[i].x-=this.speed, map[i].y, 50, 50);}
			for (var i=0; i < gien.length; i++){
			ctxMob.clearRect(0,0,gameWidth,gameHeight);
			if(gien[i].dir=='right'){
                ctxMob.drawImage(peshkaimg, 57*Math.floor(numg),0,55,56,
                    gien[i].x-=this.speed, gien[i].y, 55, 56);
			}
			else{
                ctxMob.drawImage(peshkaimg, 57*Math.floor(numg),56,55,56,
                    gien[i].x-=this.speed, gien[i].y, 55, 56);
			}
			}
			ctxUser.clearRect(0,0,gameWidth,gameHeight);
			if (hero=='Пумба') {
				ctxUser.drawImage(userimg, 62*Math.floor(num),30,56,43,this.drawX,this.drawY,56,43);
				}
				else{
				ctxUser.drawImage(user2img, 60*Math.floor(num),0,60,52,this.drawX,this.drawY,60,58);
			}
		}
		else{
		center=false;
		ctxUser.clearRect(0,0,gameWidth,gameHeight);
		if (hero=='Пумба') {
				ctxUser.drawImage(userimg, 62*Math.floor(num),30,56,43,this.drawX,this.drawY,56,43);
				}
				else{
				ctxUser.drawImage(user2img, 60*Math.floor(num),0,60,52,this.drawX,this.drawY,60,58);
			}
		}
	} else if (LeftRightUser == "L"){
		if (this.drawX>10){
			if (this.drawX<850&&this.drawX>830&&fonX!=0) {
				center=true;
				fonX-=this.speed;
				ctxmain.clearRect(0,0,gameWidth,gameHeight);
				ctxmain.drawImage(fon,fonX,0,1888,1080,0,0,gameWidth,gameHeight);
				for (var i=0; i < gus.length; i++){
				ctxUser.clearRect(0,0,gameWidth,gameHeight);
				ctxUser.drawImage(gusimg, 0,0,1920,580,
				gus[i].x+=this.speed, gus[i].y, 50
					, 15);}
				for (var i=0; i < map.length; i++){
				ctxPol.clearRect(0,0,gameWidth,gameHeight);
				ctxPol.drawImage(polimg, 0,0,512,512,
				map[i].x+=this.speed, map[i].y, 50, 50);}
				for (var i=0; i < gien.length; i++){
			ctxMob.clearRect(0,0,gameWidth,gameHeight);
			if(gien[i].dir==='right'){
                ctxMob.drawImage(peshkaimg, 57*Math.floor(numg),0,55,56,
                    gien[i].x+=this.speed, gien[i].y, 55, 56);
			}
			else{
                ctxMob.drawImage(peshkaimg, 57*Math.floor(numg),56,55,56,
                    gien[i].x+=this.speed, gien[i].y, 55, 56);
			}
			}
				ctxUser.clearRect(0,0,gameWidth,gameHeight);
				if (hero==='Пумба') {
				ctxUser.drawImage(userimg, 62*Math.floor(num),90,50,43,this.drawX,this.drawY,50,44);
				}
				else{
					ctxUser.drawImage(user2img, 60*Math.floor(num),50,60,52,this.drawX,this.drawY,60,58);
			}

			}
			else{
			center=false;
			ctxUser.clearRect(0,0,gameWidth,gameHeight);
			if (hero==='Пумба') {
				ctxUser.drawImage(userimg, 62*Math.floor(num),90,50,43,this.drawX,this.drawY,50,44);
				}
				else{
				ctxUser.drawImage(user2img, 60*Math.floor(num),50,60,52,this.drawX,this.drawY,60,58);
			}
			}
		}
	} else if (LeftRightUser === "J"){
		if (this.drawX<850&&this.drawX>830&&fonX!==6105) {
			center=true;
			ctxUser.clearRect(0,0,gameWidth,gameHeight);
			if (hero=="Пумба") {
			ctxUser.drawImage(userimg, 68, 31, 59, 42, this.drawX, this.drawY, 59, 42);
			}
			else{
				ctxUser.drawImage(user2img, 0,0,60,52,this.drawX,this.drawY,60,58);
			}
		}
		else{
		center=false;
		ctxUser.clearRect(0,0,gameWidth,gameHeight);
		if (hero=="Пумба") {
			ctxUser.drawImage(userimg, 68, 31, 59, 42, this.drawX, this.drawY, 59, 42);
			}
			else{
			ctxUser.drawImage(user2img, 0,0,60,52,this.drawX,this.drawY,60,58);
			}
		}
	} else if (LeftRightUser == "SR"){
		ctxUser.clearRect(0,0,gameWidth,gameHeight);
		if (hero=="Пумба") {
		ctxUser.drawImage(userimg, 668, 31, 40, 46, this.drawX, this.drawY, 40, 46);
		}
		else{
			ctxUser.drawImage(user2img, 0, 50
				, 60, 52, this.drawX, this.drawY, 60, 58);
		}
	} else if (LeftRightUser == "SL"){
		ctxUser.clearRect(0,0,gameWidth,gameHeight);
		if (hero=="Пумба") {
		ctxUser.drawImage(userimg, 668, 31, 40, 46, this.drawX, this.drawY, 40, 46);
		}
		else{
			ctxUser.drawImage(user2img, 0, 114, 60, 52, this.drawX, this.drawY, 60, 58);
		}

	} else if (LeftRightUser == "JL"){
		if (this.drawX<850&&this.drawX>830&&fonX!=0) {
			center=true;
			fonX-=this.speed;
			ctxmain.clearRect(0,0,gameWidth,gameHeight);
			ctxmain.drawImage(fon,fonX,0,1888,1080,0,0,gameWidth,gameHeight);
			for (var i=0; i < gus.length; i++){
			ctxUser.clearRect(0,0,gameWidth,gameHeight);
				ctxUser.drawImage(gusimg, 0,0,1920,580,
			gus[i].x+=this.speed, gus[i].y, 50
					, 15);}
			for (var i=0; i < map.length; i++){
			ctxPol.clearRect(0,0,gameWidth,gameHeight);
			ctxPol.drawImage(polimg, 0,0,512,512,
			map[i].x+=this.speed, map[i].y, 50, 50);}
			for (var i=0; i < gien.length; i++){
			ctxMob.clearRect(0,0,gameWidth,gameHeight);
			if(gien[i].dir=='right'){
                ctxMob.drawImage(peshkaimg, 57*Math.floor(numg),0,55,56,
                    gien[i].x+=this.speed, gien[i].y, 55, 56);
			}
			else{
                ctxMob.drawImage(peshkaimg, 57*Math.floor(numg),56,55,56,
                    gien[i].x+=this.speed, gien[i].y, 55, 56);
			}
			}
			ctxUser.clearRect(0,0,gameWidth,gameHeight);
			if (hero=="Пумба") {
			ctxUser.drawImage(userimg, 68, 91, 59, 42, this.drawX, this.drawY, 59, 42);
			}
			else{
				ctxUser.drawImage(user2img, 0, 268, 60, 56, this.drawX, this.drawY, 60, 58);
			}

		}
		else{
		center=false;
		ctxUser.clearRect(0,0,gameWidth,gameHeight);
		if (hero=="Пумба") {
			ctxUser.drawImage(userimg, 68, 91, 59, 42, this.drawX, this.drawY, 59, 42);
			}
			else{
			ctxUser.drawImage(user2img, 0, 268, 60, 56, this.drawX, this.drawY, 60, 58);
			}
		}
	}
	else if (LeftRightUser == "JR"){
		if (this.drawX<850&&this.drawX>830&&fonX!=6105) {
			center=true;
			fonX+=this.speed;
			ctxmain.clearRect(0,0,gameWidth,gameHeight);
			ctxmain.drawImage(fon,fonX,0,1888,1080,0,0,gameWidth,gameHeight);
			for (var i=0; i < gus.length; i++){
			ctxUser.clearRect(0,0,gameWidth,gameHeight);
				ctxUser.drawImage(gusimg, 0,0,1920,580,
			gus[i].x-=this.speed, gus[i].y, 50
					, 15);}
			for (var i=0; i < map.length; i++){
			ctxPol.clearRect(0,0,gameWidth,gameHeight);
			ctxPol.drawImage(polimg, 0,0,512,512,
			map[i].x-=this.speed, map[i].y, 50, 50);}
			for (var i=0; i < gien.length; i++){
			ctxMob.clearRect(0,0,gameWidth,gameHeight);
			if(gien[i].dir=='right'){
			ctxMob.drawImage(peshkaimg, 57*Math.floor(numg),0,55,56,
				gien[i].x-=this.speed, gien[i].y, 55, 56);
			}
			else{
				ctxMob.drawImage(peshkaimg, 57*Math.floor(numg),56,55,56,
				gien[i].x-=this.speed, gien[i].y, 55, 56);
			}
			}
			ctxUser.clearRect(0,0,gameWidth,gameHeight);
			if (hero=="Пумба") {
			ctxUser.drawImage(userimg, 68, 31, 59, 42, this.drawX, this.drawY, 59, 42);
			}
			else{
				ctxUser.drawImage(user2img, 0, 216, 60, 56, this.drawX, this.drawY, 60, 58);
			}
		}
		else{
		center=false;
		ctxUser.clearRect(0,0,gameWidth,gameHeight);
		if (hero=="Пумба") {
			ctxUser.drawImage(userimg, 68, 31, 59, 42, this.drawX, this.drawY, 59, 42);
			}
			else{
			ctxUser.drawImage(user2img, 0, 216, 60, 56, this.drawX, this.drawY, 60, 58);
			}
		}
	}
	// console.log(this.drawX);
	// console.log(fonX);
}

Player.prototype.chooseDir = function(){//выбор направления игрока
	if (this.isRight){
		if (center) {
			player.drawX=player.drawX;
			if (tg == 1)
			{
				LeftRightUser = "R";
				GoPlayerRight();
			}
		}
		else{
			player.drawX += this.speed;
			if (tg == 1)
			{
				LeftRightUser = "R";
				GoPlayerRight();
			}
		}
	}else
	if (this.isLeft ){
		if (center) {
			player.drawX=player.drawX;
			if (tg == 1)
			{
				LeftRightUser = "L";
				GoPlayerLeft();
			}
		}
		else{
			if (this.drawX>10){
				player.drawX -= this.speed;
			}
			if (tg == 1)
			{
				LeftRightUser = "L";

				GoPlayerLeft();

			}
		}
	}
	if (this.isUp&& tg == 1){
		beginspeed = maxJump;
		LeftRightUser = "J"
	}

	if (this.isUp && tg == 0 && this.isRight)
	{
		LeftRightUser = "JR";
	}

	if (this.isUp && tg == 0 && this.isLeft)
	{
		LeftRightUser = "JL";
	}
}

function GoPlayerRight(){//вспомогательная функция для правильной отрисовки по спрайту
	num = num + 0.3;
	if (num > 12){
		num=0;
	}
}

function GoPlayerLeft(){//вспомогательная функция для правильной отрисовки по спрайту
	num = num + 0.3;
	if (num > 12){
		num=0;
	}
}
function giengo(){//вспомогательная функция для правильной отрисовки по спрайту
	numg = numg + 0.1;
	if (numg > 4){
		numg=0;
	}
}

function checkKeyDown(e){//проверка нажатия клавиш
	var keyId = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyId);


	if (pausemp3){document.getElementById('music').play(); document.getElementById('music').volume=0.1;  pausemp3=!pausemp3}
	if (pause!=1) {

	if (e.keyCode == 40 && player.drawY==705) {//закопка
	if (zakop == false) {

	player.speed=0;
	grav=0;
	zakop = true;
	stayY=player.drawY;
	player.drawY+=500;
	}
	}
	if (e.keyCode == 38&&zakop){
	player.isUp = true;
	player.speed=5;
	grav=0.5;
	zakop = false;
	player.drawY=stayY;
	e.preventDefault();
	}
	if (keyChar == "'"){
		player.isRight = true;
		e.preventDefault();
	}
	if (keyChar == "%"){
		player.isLeft = true;
		e.preventDefault();
	}
	if (keyChar == "&"){
		player.isUp = true;
		e.preventDefault();
	}

	}if (e.keyCode==27){
		setTimeout(Pause,100);
		e.preventDefault();

	}
	if ((e.keyCode==27)&&(pause==1)){
		setTimeout(unPause,100);
		e.preventDefault();

	}



}
function Pause(){//пауза
	pause=1;
	// console.log(pause);
}
function unPause(){//снятие с паузы
	pause=0;
	// console.log(pause);
}

function checkKeyUp(e){//проверка ОТжатия клавиш
	var keyId = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyId);

	if (keyChar == "'"){
		player.isRight = false;
		e.preventDefault();
		LeftRightUser = "SR";
	}
	if (keyChar == "%"){
		player.isLeft = false;
		e.preventDefault();
		LeftRightUser = "SL";
	}
	if (keyChar == "&"){
		player.isUp = false;
		e.preventDefault();
	}
}

function colCheck(shapeA, shapeB){//проверка колизии
	var colDir = null;
	if (!zakop) {
	if (shapeA.drawY < shapeB.y)
	{
		if ((shapeA.drawY + shapeA.height > shapeB.y) &&
			(shapeA.drawX + shapeA.width / 2 > shapeB.x) &&
			(shapeA.drawX < shapeB.x + shapeB.width))
			{
				colDir = "1";
				tg = 1;
			}
			else if (shapeA.drawY + shapeA.height < shapeB.y)
			{
				tg = 0;
			}
	}
	return colDir;
}
}
function Giens(){//создание гиен

		for (var i =0; i <10; i++) {
			x=Math.floor(Math.random()*6000)+700;
			gien.push({x:x,y:700,width: 50,height: 50,xSpawn:x,distance:x,dir:'right',d:true});

		}
}

Giens.prototype.draw = function (){// отрисовка гиен и их взаимодействие с игроком

	for (var i=0; i < gien.length; i++){
		if (pause!=1){

		if (gien[i].distance>=(gien[i].xSpawn-500)&&(gien[i].dir=='left')) {
			gien[i].x-=1;
			gien[i].distance-=1;
		}
		else if(gien[i].distance<=(gien[i].xSpawn+500)){

			gien[i].dir='right';
			gien[i].x+=1;
			gien[i].distance+=1;
		}
		else if(gien[i].distance>=(gien[i].xSpawn+500)&&(gien[i].dir=='right')){
			gien[i].dir='left';
			gien[i].x-=1;
			gien[i].distance-=1;
		}
		}
		if(gien[i].dir=='right'){
		// ctxMob.clearRect(0,0,gameWidth,gameHeight);
		ctxMob.drawImage(peshkaimg, 57*Math.floor(numg),0,55,56,
			gien[i].x, gien[i].y, 55, 56);
		}
		else{
			// ctxMob.clearRect(0,0,gameWidth,gameHeight);
		ctxMob.drawImage(peshkaimg, 57*Math.floor(numg),56,55,56,
			gien[i].x, gien[i].y, 55, 56);
		}

		if ((player.drawX + player.width > gien[i].x) &&
			(player.drawX < gien[i].x + gien[i].width ) &&
			(player.drawY + player.height > gien[i].y) &&
			(player.drawY < gien[i].y+gien[i].height)
			){
			if(gien[i].d==true){
				gien[i].d=false;
				HP-=30;
			}
			else if (time>=100) {
					HP-=30;
					time=0;
				}
				else{
					time+=1;
				}

		}
		else{
			gien[i].d=true;
		}


			}

}

function arrayGus(){//создание поедаемых объектов
	gus.push({x:map[Math.floor(Math.random()*19)+1].x+Math.floor(Math.random()*30)+15,y:530,width: 50,height: 15});
	gus.push({x:map[Math.floor(Math.random()*19)+1].x+Math.floor(Math.random()*30)+15,y:530,width: 50,height: 15});
	gus.push({x:map[Math.floor(Math.random()*19)+1].x+Math.floor(Math.random()*30)+15,y:530,width: 50,height: 15});
	gus.push({x:map[Math.floor(Math.random()*19)+1].x+Math.floor(Math.random()*30)+15,y:530,width: 50,height: 15});
	gus.push({x:map[Math.floor(Math.random()*19)+1].x+Math.floor(Math.random()*30)+15,y:530,width: 50,height: 15});
	gus.push({x:map[Math.floor(Math.random()*19)+1].x+Math.floor(Math.random()*30)+15,y:530,width: 50,height: 15});

}

function GusDraw(){//отрисовка поедаемых объектов
	for (var i=0; i < gus.length; i++){
		ctxUser.drawImage(gusimg, 0,0,1920,580,
			gus[i].x, gus[i].y, 50
			, 15);

		if ((player.drawX + player.width > gus[i].x) &&
			(player.drawX < gus[i].x + gus[i].width ) &&
			(player.drawY + player.height > gus[i].y) &&
			(player.drawY < gus[i].y+gus[i].height)
			){

			gus.splice(gus.indexOf(gus[i]),1);
			HP+=5;
			CountGus++;
		}

	}

}
function finish(){//окончание игры
	if (HP<=0) {
		pause=1;
		score=1000-sec+(CountGus*10);

		alert("Вы проиграли");
	}
	else if(player.drawX==1755){
		pause=1;

		score=1000-sec+(CountGus*10);
		alert("Вы победили");

	}
}
