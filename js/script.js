const header = document.querySelector('header');
const body = document.querySelector('body');
const toggle = document.getElementById('toggle'); 

toggle.onclick = function(){
	toggle.classList.toggle('active');
	body.classList.toggle('active');
	header.classList.toggle('active');
}     