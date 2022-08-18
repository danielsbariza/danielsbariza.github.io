jQuery(document).ready(function($){
    const timeAnimate = 1500
    
    $("#header").animate({
        "top": "0" 
    }, timeAnimate);

    $(".desc-nombre, .desc-texto").hide();


    $(".desc-nombre").fadeIn(timeAnimate, function() {

        $(".desc-texto").fadeIn(timeAnimate)  
        
    })

    

    
    
    
    
    
    
})