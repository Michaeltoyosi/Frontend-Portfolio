//slide in Animation for our executed project

let show = document.querySelectorAll(".image");
function move(){
	var windowHeight = window.innerHeight;
	for(i = 0;i<show.length;i++){
var elementTop = show[i].getBoundingClientRect().top;
var num = 10;
if(elementTop<windowHeight-num){
	show[i].classList.add("active");
}
	else{
			show[i].classList.remove('active');
		}
}
}
window.addEventListener('scroll',move);

//Our executed project functionality

window.addEventListener("load",function(){
	var pro = document.getElementById("pro");
	pro.classList.add('active');
})

let slides = document.getElementById('imgg');
function slide(){
	var height = window.innerHeight;
	var number =200;
	var slidesTop = slides.getBoundingClientRect().top;
	if(slidesTop<height-number){
		slides.classList.add("active");
	}
	else{
		slides.classList.remove("active");
	}
}
window.addEventListener('scroll',slide);
var bar = document.querySelector(".bars");
var dropdown = document.querySelector(".dropdown");
function toggle(){
if(bar.firstElementChild.classList.contains('fa-bars')){
	bar.firstElementChild.classList.replace('fa-bars','fa-times');
	dropdown.style.display = "block"
}

else{
  bar.firstElementChild.classList.replace('fa-times','fa-bars');
  dropdown.style.display = "none"
}
}
bar.addEventListener('click',toggle);