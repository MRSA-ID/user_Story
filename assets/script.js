const Buttons = document.querySelector('.buttons');
const buttonUp = document.querySelector('.up');
const buttonDown = document.querySelector('.down')



window.addEventListener('scroll', function(){
	let scroll = document.body.scrollTop;
	if(scroll > 1250){
		return buttonUp.classList.remove('active');
	}else{
		return buttonUp.classList.add('active');
	}
});

buttonDown.addEventListener('click', function(){
	window.scrollTo({
		top: 625,
		left: 0,
		behavior: "smooth"
	});
})

Buttons.addEventListener('click', (e) => {
	let button = e.target;
	if(button.parentElement.className.split(' ')[1] == 'up'){
		window.scrollTo({
			top: 0,
			left:0,
			behavior: "smooth"
		});	
	} 
});

