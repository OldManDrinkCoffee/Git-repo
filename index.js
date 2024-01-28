// fetch = function used for making Http requests to fetch resources
//         (JSON style data, images, files)
//          Simplifies asynchronous data fetching in JS and 
//          used for interacting with APIs to retrieve and send
//          data aynchronously over the web.
//          fetch(url, {options})




async function fetchData() {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    }
    catch(error){
        console.error(error)
    }
}