const moveForce = 40; // max popup movement in pixels
// const rotateForce = 15; // max popup rotation in deg

$(document).mousemove(function(e) {

    let docX = $(document).width();
    let docY = $(document).height();
    
    let moveX = (docX - e.pageX) / (docX) * -moveForce + 150;
    let moveY = (e.pageY - docY) / (docY) * -moveForce - 30;
    
    // let rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
    // let rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);

    $('#logo')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        // .css('transform', 'rotateY('+rotateY+'deg) rotateX('+rotateX+'deg)');

});


jQuery(document).ready(function($){
    
    const timeAnimate = 1500
    $("#header").animate({
        "top": "0" 
    }, timeAnimate);


    $(".desc-nombre").animate({
        "opacity": "1",
    } ,timeAnimate, function() {

        $(".desc-texto").animate({
            "left": "0rem",
            "opacity": "1",
        },timeAnimate)

    })

})