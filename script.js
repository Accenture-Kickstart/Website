let cards = [
    {name: "pikachu", img: ""},
    {name: "", img: ""},
    {name: "", img: ""},
    {name: "", img: ""},
    {name: "", img: ""},
    {name: "", img: ""},
    {name: "", img: ""},
    {name: "", img: ""},
    {name: "", img: ""},
]
/*async function f() {
    pokemon = await fetch("https://pokeres.bastionbot.org/images/pokemon/1.png");
    pokemon = await pokemon.json();
}
*/
function showCard() {
        let pokecard = document.getElementById("try");
        pokecard.src = "https://pokeres.bastionbot.org/images/pokemon/1.png"
        return pokecard;
    //});
}
document.getElementById("try").innerHTML = showCard();
showCard();

function showCardByNumber() {
    let cardByNumber = parseInt(document.getElementById("").value);
}
function showRandomCard() {

}