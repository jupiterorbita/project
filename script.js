var heroImage = document.getElementById("heroImage")
var heroName = document.getElementById("heroName")



// async await
async function asyncGetHero() {
    // grab the input

    var heroId = document.getElementById("heroNum").value
    console.log("heroId", heroId)


    // var response = await fetch("https://akabab.github.io/superhero-api/api/id/" + heroId + ".json");
    var response = await fetch(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`);
    // error handling
    if (!response.ok) {
        console.log("houston we have a problem")
        heroImage.src = "https://placekitten.com/408/287"
    }
    var heroData = await response.json();
    console.log(heroData.name);
    console.log(heroData.images.md);

    // go to the DOM to access the image and place its source


    heroImage.src = heroData.images.md;
    heroName.innerText = heroData.name
}


// --------------------------
async function asyncGetPokemon() {
    // grab the input

    var pokeName = document.getElementById("pokeName").value
    console.log("pokeName", pokeName)
    var lower = pokeName.toLowerCase()
    console.log(lower)


    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + lower);
    // error handling
    if (!response.ok) {
        console.log("houston we have a problem")
        heroImage.src = "https://placekitten.com/408/287"
    }
    var pokeData = await response.json();
    console.log(pokeData.sprites.front_default);

    // go to the DOM to access the image and place its source


    heroImage.src = pokeData.sprites.front_default
    heroName.innerText = pokeData.name
}
// asyncGetHero()

// then - catch
function promiseHeroData() {

    fetch("https://akabab.github.io/superhero-api/api/id/473.json")
        .then(function (serverResponse) {
            console.log(serverResponse)
            return serverResponse.json()
        })
        .then(function (jsonData) {
            console.log(jsonData)
        })
        .catch(function (errResponse) {
            console.log("houston we have a problem")
            console.log(errResponse);
            heroImage.src = "https://placekitten.com/408/287"
        })

}
// promiseHeroData()

