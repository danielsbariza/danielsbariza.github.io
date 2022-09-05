import { projects } from "./projects.js";

const moveForceLogo = 0.09
const moveForceScroll = 70;
const timeAnimate = 1000;

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
    
    $(".popup-open").on("click", function(){
        $(".popup, .popup-bg").fadeIn("slow",function(){
            
            $(".popup-close").on("click", function(){
                $(".popup, .popup-bg").fadeOut("slow");
            })
        });
    })



    projects.map((project,index) => {
        let directionProject = (index%2==0) ? "project-left" : "project-right";
        
        let strProject = `
        <div style="
            background: var(--trans-oscuro) url(${project.bgUrl});
            background-repeat: no-repeat;
            background-position: center center;
            background-size:cover;
            background-blend-mode: darken;
        "
        class="project ${directionProject}">
            <h2 class="project-title">${project.tittle}</h2>
            ${
                project.language.map(value => value
            )}
            <p class="project-desc">${project.desciption}</p>
            <form action="${project.url}">
            <a href="${project.url}" target="_blank" class="buttons">Ir a la web</a>
        </div>
        `;
        $('#projects-grid').append($.parseHTML(strProject))
    })


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
    $(document).mousemove(function(e){
        
        let moveX = e.pageX;
        let moveY = e.pageY;
        
        const position = $('.shape').position();

        if (moveX < position.left && moveY < position.top){

          $('.shape').css('transform',`translate(${moveX * moveForceLogo}px, ${moveY * moveForceLogo}px) rotate(5deg)`);

        } else if (moveX < position.left && moveY > position.top) {

            $('.shape').css('transform',`translate(${moveX * moveForceLogo}px, -${moveY * moveForceLogo}px) rotate(-5deg)`);

          } else if (moveX > position.left && moveY < position.top) {

            $('.shape').css('transform',`translate(-${moveX * moveForceLogo}px, ${moveY * moveForceLogo}px) rotate(7deg)`);

          } else if (moveX > position.left && moveY > position.top) {
            
            $('.shape').css('transform',`translate(-${moveX * moveForceLogo}px, -${moveY * moveForceLogo}px) rotate(-7deg)`);

          }
    })
    
}
// --- FIN --- movimiento del logo


// --- INICIO --- movimiento de los proyectos

$(document).scroll(function(){
    if ($(window).width() > 768){

        let scrollY = $(document).scrollTop();
        let docY = $(document).height();
        let moveX = moveForceScroll - Math.abs((scrollY - docY))/(docY) *moveForceScroll;

        $('.project-left')
        .css('left',`${moveX}px`)

        $('.project-right')
        .css('right',`${moveX}px`)
    }
    
})

// --- FIN --- movimiento de los proyectos






