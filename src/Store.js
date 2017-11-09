import createStore from 'redux-zero';

const initialState = {
    personal : 
        {
            name: "Luisa Datne Gonzales Cáceres",
            shortName: "Luisa Gonzales",
            who: "Front-End Developer",
            age: "22",
            photo: 'https://scontent.faqp1-1.fna.fbcdn.net/v/t1.0-9/12495038_944327562319059_1952233580294026539_n.jpg?oh=a390a8005ee47a90cb00c62115ab932d&oe=5AA722D3',
            bio: "Soy una mujer talentosa y apasionada. Formada como Front End Developer en Laboratoria, y como administradora en la Universidad Católica de Santa María. Esta combinación me ha permitido potenciar mis habilidades y conocimientos respecto al diseño e interacción con las necesidades del cliente. Me encanta aprender siempre cosas nuevas ya que la tecnología avanza de manera exponencial y es mundo fascinante .",  
            badges: 'Cuadro de Honor, La mas agile, Rocking the Sprint',
            education: 'Universidad Católica de Santa María (2012 - actual)',
            workExperience: '',
        },
    info : 
        {
            testimonials: '',
        },
    socials : 
        {
            linkedin : "https://www.linkedin.com/in/luisagonzalescaceres/",
            github : 'luisaGonzales@github.com', 
            email : "luisagc711@gmail.com",
            phone : "943572159",
        },
    repos : 
        {
            react : ['https://luisagonzales.github.io/Scoreboard-State/', 'https://luisagonzales.github.io/Project-Routing/','https://luisagonzales.github.io/Invitations-MVC/', 'https://luisagonzales.github.io/QuizABC-React/', 'https://luisagonzales.github.io/Lyft-Evaluado/'], 
        }
}

const store = createStore(initialState);
export default store;

    
    // portfolios: [
    //     {
    //     //     html:
    //     //     '[https://luisagonzales.github.io/Trello/, \nhttps://luisagonzales.github.io/runMaze/, \nhttps://luisagonzales.github.io/doomII/]',
    //     // jquery:
    //     //     '[https://luisagonzales.github.io/geolocalizacion/, https://luisagonzales.github.io/fotolog/,\nhttps://luisagonzales.github.io/YouTube-API/, \nhttps://luisagonzales.github.io/ReservaAsientos-POC/, \nhttps://luisagonzales.github.io/memoryGame/]',
    //     // css:
    //     //     '[https://luisagonzales.github.io/freeLancer-Flex/, https://luisagonzales.github.io/appLove-Flex/, \nhttps://luisagonzales.github.io/guideBoxModel/, \nhttps://luisagonzales.github.io/saveKoalasII/, \nhttps://luisagonzales.github.io/boxModel/]',
            
    //     }
    // ], 