export const languages = {
    html: `<img src="./icons/ico-html.svg" alt="html">`,
    css: `<img src="./icons/ico-css.svg" alt="css">`,
    javascript: `<img src="./icons/ico-js.svg" alt="js">`,
    python: `<img src="./icons/ico-python.svg" alt="python">`,
    react: `<img src="./icons/ico-react.svg" alt="react">`,
    angular: `<img src="./icons/ico-angular.svg" alt="angular">`,
}


export const projects = [
    {
        tittle: "Renovacion de la pagina web de la Universidad Industrial de Santander",
        bgUrl: "../images/img-uis.webp",
        url: "https://uis.edu.co",
        desciption: "Para este proyecto, me desempeño como auxiliar del equipo de trabajo Character TEAM, donde el principal objetivo es la renovación, desarrollo y diseño de la nueva página web de la Universidad Industrial de Santander.",
        language: [
            languages.html,
            languages.css,
            languages.javascript,
        ],
    },
    {
        tittle: "Dimensionamiento de microrredes aisladas a partir de técnicas de regresión de aprendizaje automático",
        bgUrl: "../images/img-PdG.webp",
        url: "https://github.com/danielsbariza/TesisDeGrado",
        desciption: "En este proyecto se propone una metodología alternativa para el dimensionamiento de microrredes aisladas para condiciones climáticas y de carga especificas utilizando técnicas de regresión de aprendizaje automático.<br>Se busca evaluar su desempeño con respecto a la formulación clásica y proponer un procedimiento para evaluar la relación entre la precisión de los modelos y la proporción de los datos usados.",
        language: [
            languages.python,
        ],
    },
    {
        tittle: "editor de Markdown",
        bgUrl: "../images/img-markdown.webp",
        url: "https://cdpn.io/pen/debug/eYMwjBd?authentication_hash=wQAPobJNXOwr",
        desciption: "Redacta en sintaxis Markdown en este editor.",
        language: [
            languages.html,
            languages.css,
            languages.javascript,
            languages.react,
        ],
    },


    // {
    //     tittle: "Frases aleatorias",
    //     bgUrl: "../images/img-project.webp",
    //     desciption: "Frases celebres aleatorias (y twitteables!)"
    // },

    // {
    //     tittle: "Percusion",
    //     bgUrl: "../images/img-project.webp",
    //     desciption: "Toca algunas notas en esta web."
    // },
    // {
    //     tittle: "Buscador de Gifs",
    //     bgUrl: "../images/img-project.webp",
    //     desciption: "Busca algunos gifs en esta pagina web!"
    // },
];

