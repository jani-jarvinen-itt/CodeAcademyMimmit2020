console.log("Valitsimet.js-tiedosto käynnistyy.");

// id-valitsin
var pElementti = document.getElementById("mun-oma-id-merkintä");
pElementti.innerText = "JavaScript-koodin kautta muutettu.";
pElementti.onclick = () => alert("Moi!");

// luokka-valitsin
var tyyliElementit = document.getElementsByClassName("mun-oma-tyyli");
tyyliElementit.item(1).innerHTML = "Toinen <b>rivi</b> tekstiä.";

// elementti-valitsin
var otsikkoElementit = document.getElementsByTagName("h1");
otsikkoElementit.item(0).style.color = "green";
