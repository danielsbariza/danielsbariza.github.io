const moveForce = 75;
const timeAnimate = 1000

$(document).mousemove(function(e) {
    
    let pagex = e.pageX;
    let pagey = e.pageY;
    
    let docX = $(document).width();
    let docY = $(document).height();

    let speedupX = Math.abs((docX/2 - pagex)/(docX/2))
    let speedupY = Math.abs((docY/2 - pagey)/(docY/2))

    let moveX = (pagex - docX/2)/(docX/2) * (moveForce*speedupX);
    let moveY = (pagey - docY/2)/(docY/2) * (moveForce*speedupY);

    console.log(moveX)

    $('#logo')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
    
});

$(document).mouseleave(function(){
    
    $('#logo').animate({
        'left': '0',
        'right': '0',
        'top': '0',
        'bottom': '0',
    }, timeAnimate/2)
        
})

$(document).ready(function(){
    

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