console.log("TiedostoTesti.js-tiedosto käynnistyy.");

const tiedostonimi = "C:\\Academy\\Mimmit\\HTML\\Peruspohja.css";
console.log("Aloitetaan tiedoston lukeminen.");

// tämä ei toimi selaimessa:
const fs = require('fs');

// tämäkään ei tietoturvan takia toimi selaimessa:
const data = fs.readFileSync(tiedostonimi, { encoding: "utf8" });
console.log(data);
