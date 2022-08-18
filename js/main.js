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