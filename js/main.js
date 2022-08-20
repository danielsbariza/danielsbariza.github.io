const moveForce = 40;
const timeAnimate = 1500;

$(document).ready(function(){
    
    setTimeout(function(){
        
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });

        $('#loader').fadeOut('slow',animation(),movementLogoAbout())

        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    },1000)
    
    
    
    
    function animation(){
        
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
    }
    

})

// --- INICIO --- movimiento del logo
function movementLogoAbout() {

    $(document).mouseenter(function(e){

        let [moveX, moveY] = movement(e);
    
        $('#logo').animate({
            'left': `${moveX}px`,
            'top': `${moveY}px`,
        }, 150)
    })
    
    $(document).mousemove(function(e) {
        
        let [moveX, moveY] = movement(e);
        
        setTimeout(function(){
            $('#logo')
                .css('left',`${moveX}px`)
                .css('top', `${moveY}px`)
        }, 300)
    
    });
    
    $(document).mouseleave(function(){
    
        $('#logo').animate({
            'left': '0',
            'top': '0',
            'right': '0',
            'bottom': '0',
        }, 300)
    
    })
}


function movement(e) {
    let pagex = e.pageX;
    let pagey = e.pageY;

    let docX = $(window).width();
    let docY = $(window).height();

    // let speedupX = Math.abs((docX/2 - pagex)/(docX/2))
    // let speedupY = Math.abs((docY/2 - pagey)/(docY/2))
    let moveX = (pagex-docX/2)/(docX/2) * (moveForce);
    let moveY = (pagey-docY/2)/(docY/2) * (moveForce);
    console.log(`pagex: ${pagex}`)
    console.log(`docX: ${docX}`)
    console.log(`pagey: ${pagey}`)
    console.log(`docY: ${docY}`)
    return [moveX, moveY];
}

// --- FIN --- movimiento del logo