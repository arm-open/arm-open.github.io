//move nav element position according to window width
moveNavigation();
$(window).on('resize', function(){
	(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
});

//open sub-navigation
$('.cd-subnav-trigger').on('click', function(event){
	event.preventDefault();
	$('.cd-main-nav').toggleClass('moves-out');
});

function moveNavigation(){
	var navigation = $('.cd-main-nav-wrapper');
	var screenSize = checkWindowWidth();
	
	navigation.detach();
	navigation.insertBefore('.cd-nav-trigger');
}

function checkWindowWidth() {
	var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
	return ( mq == 'mobile' ) ? false : true;
}