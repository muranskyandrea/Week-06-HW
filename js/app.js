

$(window).resize(function() {

    myWinWidth();
});


function myWinWidth() {
    var winWidth = $(window).width();
    console.log(winWidth);    
        if(winWidth > 768){
                 $('.topNav').show();          
        }
    return false;
};


jQuery('.hamburgerLine').click(function(){
	jQuery('.topNav').slideToggle('500');
	jQuery('nav .topNav').toggleClass('mobileHide');


});





