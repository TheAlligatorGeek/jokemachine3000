var button = document.getElementById("apiButton")
button.onclick = apiFunction;

function apiFunction(){
    fetch("https://official-joke-api.appspot.com/random_joke").then(function(response){
        return response.json(); // I get the JSON Data
    }).then(function(data){
        console.log(data.setup);
        var container = document.getElementById("jokeInfo");
        var lineContainer = document.getElementById("lineAppear");
        var buttonContainer = document.getElementById("buttonJoke");
        container.innerHTML = `<h1>${data.setup}</h1>`;
        lineContainer.innerHTML = `<hr>`;
        setTimeout(timer, 3000);
        function timer(){
            var buttonContainer = document.getElementById("buttonJoke");
            buttonContainer.innerHTML = `<h1>${data.punchline}</h1>`;
        }
    })
}