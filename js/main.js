var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

$(document).mousemove(function(e) {

    var docX = $(document).width();
    var docY = $(document).height();
    
    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
    
    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
    
    $('#logo')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'rotateY('+rotateY+'deg)');

        /* rotateX('+rotateX+'deg) */

});


jQuery(document).ready(function($){
    

    

    const timeAnimate = 1500
    $("#header").animate({
        "top": "0" 
    }, timeAnimate*(3/2));
    $(".desc-nombre").hide();
    $(".desc-nombre").fadeIn(timeAnimate/2, function() {

        $(".desc-texto").animate({
            "left": "0rem",
            "opacity": "1",
        },timeAnimate)
    })


    

    
    
    
    
    
    
})