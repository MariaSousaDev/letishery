export const dataFilterWork = [
    { label: "OG", code: "og" }, 
    { label: "Fanart", code: "fan" }, 
    { label: "Commission", code: "comm" }, 
    { label: "Character Design", code: "chara" }, 
    { label: "Illustration", code: "illu" }, 
    { label: "Chibi", code: "chibi" }]

const baseUrl = "https://www.letishery.art/images/works/"


export const dataWork = [
    { 
        image: baseUrl +"2024-leobday.png", 
        code: ["fan"],
    },{
        image: baseUrl+"2024-twstwonderlandchibifan.png", 
        code: ["fan", "chibi"],
        mode: 'horizontal'
    },{ 
        image: baseUrl +"2024-shirorinfan.png", 
        code: ["fan", "illu"],
        mode: 'default'
    },{ 
        image: baseUrl +"2024-newyearleti.png", 
        code: ["og", "illu"],
        mode: 'vertical'
    },{ 
        image: baseUrl +"2024-ironmousefan.png", 
        code: ["fan", "illu"],
        mode: 'default'
    },{ 
        image: baseUrl +"2024-falkycomm.png", 
        code: ["comm", "illu"],
        mode: 'horizontal'
    },{ 
        image: baseUrl +"2024-cherrycommcharacterdesign.png", 
        code: ["chara", "comm"],
        mode: 'default'
    },{ 
        image: baseUrl +"2023-teutafan.png", 
        code: ["fan", "illu"],
        mode: 'vertical'
    },{ 
        image: baseUrl +"2023-sakuracardcaptorsfan.png", 
        code: ["fan", "illu"],
        mode: 'default'
    },{ 
        image: baseUrl +"2023-reimufanart.png", 
        code: ["fan", "illu"],
        mode: 'default'
    },{ 
        image: baseUrl +"2023-nyokocomm.png", 
        code: ["comm", "illu", "chibi"],
        mode: 'horizontal'
    },{ 
        image: baseUrl +"2023-mikufan.png", 
        code: ["fan", "illu"],
        mode: 'default'
    },{ 
        image: baseUrl +"2023-lilianafan.png", 
        code: ["fan", "illu"],
        mode: 'default'
    },{ 
        image: baseUrl +"2023-letiportrait.png", 
        code: ["og", "illu"],
        mode: 'vertical'
    },{ 
        image: baseUrl +"2023-ichikafan.png", 
        code: ["fan", "illu"],
        mode: 'default'
    },{ 
        image: baseUrl +"2023-bettelfan.png", 
        code: ["fan", "illu"],
        mode: 'vertical'
    },{ 
        image: baseUrl +"2023-ironmousevtuberfan.png", 
        code: ["fan", "illu"],
        mode: 'horizontal'
    },{ 
        image: baseUrl +"2023-cardiafan.png", 
        code: ["fan", "illu"],
        mode: 'default'
    },{ 
        image: baseUrl +"2022-sumifan.png", 
        code: ["fan", "illu"],
        mode: 'default'
    },{ 
        image: baseUrl +"2022-letiportrait.png", 
        code: ["og", "illu"],
        mode: 'default'
    },
]