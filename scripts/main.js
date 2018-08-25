"use strict";
/* global $ */
$(".navbar-nav>li>a").click(function ()
 {
  $(".navbar-collapse").collapse("hide");
});

/* The greeting ;)

function myFunction(){
var myHeading = document.querySelector('.bienvenida');
var yourName = prompt('Why hello, please tell me your name..');
myHeading.innerHTML = 'Welcome to my page, ' + yourName ;
}
*/
var myHeading = document.querySelector('.bienvenida');

function setUserName() {
  var myName = prompt('Why hello, please tell me your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcome to my presentation page, ' + myName + '😀';
}

if(!localStorage.getItem('name')) {
  window.setTimeout(setUserName, 2000);
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to my presentation page, ' + storedName + '😀';
}

function mOver(obj) {
  obj.setAttribute ("width","297px");
  obj.setAttribute ("height","297px");
  obj.setAttribute ("border","5px");
  myHeading.innerHTML = "Yeah, that is me 😁"
}

function mOut(obj) {
  obj.setAttribute ("width","288px");
  obj.setAttribute ("height","288px");
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to my presentation page, ' + storedName + '😀';
}
/*code for the extra fact*/
var i = 0;
var txt = 'I love my web development class. 😏';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("extraFact").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
