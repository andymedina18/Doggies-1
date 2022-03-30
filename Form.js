class Form {
    constructor() {

    }

    //Se muestra 
    display() {

        var title = createElement("h2");
        title.html("Missunderstood doggies");
        title.position(600, 100);

        //h2 - estilo de texto
        var story = createElement("h2");
        story.html("Aquí va inicio");
        story.position(500, 250);

        //DOnde se escribe
        var input = createInput("Name");
        input.position(500, 350);

        var botton = createBotton("PLAY");
        botton.position(400, 500);

        var greeting = createElement("h3");

        //MousePressed 


    }

}