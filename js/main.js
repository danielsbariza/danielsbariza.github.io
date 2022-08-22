const moveForceMouse = 40;
const moveForceScroll = 100;
const timeAnimate = 1500;
const projects = [
    {
        tittle: "Renovacion de la pagina web UIS",
        bgUrl: "../images/img-uis.webp",
        desciption: "Pagina web de la Univesidad Industrial de Santander"
    },
    {
        tittle: "Dimensionamiento de microrredes aisladas",
        bgUrl: "../images/img-PdG.webp",
        desciption: "uso de Maching learning el analisis de microrredes aisladas de generacion electrica"
    },
    {
        tittle: "Frases aleatorias",
        bgUrl: "../images/img-project.webp",
        desciption: "Frases celebres aleatorias (y twitteables!)"
    },
    {
        tittle: "editor de Markdown",
        bgUrl: "../images/img-project.webp",
        desciption: "Redacta en sintaxis Markdown en este editor."
    },
    {
        tittle: "Percusion",
        bgUrl: "../images/img-project.webp",
        desciption: "Toca algunas notas en esta web."
    },
    {
        tittle: "Buscador de Gifs",
        bgUrl: "../images/img-project.webp",
        desciption: "Busca algunos gifs en esta pagina web!"
    },
]



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
    
    projects.map((project,index) => {
        let directionProject = (index%2==0) ? "project-left" : "project-right";
        
        let strProject = `
        <div style="
            background: var(--trans-oscuro) url(${project.bgUrl});
            background-repeat: no-repeat;
            background-size:cover;
            background-blend-mode: darken;
        "
        class="project ${directionProject}">
            <h2 class="project-title">${project.tittle}</h2>
            <img src="./icons/ico-html.svg" alt="html">
            <img src="./icons/ico-css.svg" alt="css">
            <img src="./icons/ico-js.svg">
            <p class="project-desc">${project.desciption}</p>
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
    let moveX = (pagex - docX/2)/(docX/2) * (moveForceMouse);
    let moveY = (pagey - docY/2)/(docY/2) * (moveForceMouse);
    
    return [moveX, moveY];
}

// --- FIN --- movimiento del logo


// --- INICIO --- movimiento de los proyectos

$(document).scroll(function(){
    
    let scrollY = $(document).scrollTop();
    let docY = $(document).height();
    let moveX = moveForceScroll - Math.abs((scrollY - docY))/(docY) *moveForceScroll;

    $('.project-left')
        .css('left',`${moveX}px`)

    $('.project-right')
        .css('right',`${moveX}px`)

})








