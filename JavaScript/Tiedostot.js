const tiedostonimi = "C:\\Academy\\Mimmit\\HTML\\Peruspohja.css";
console.log("Aloitetaan tiedoston lukeminen.");

const fs = require('fs');

const data = fs.readFileSync(tiedostonimi, { encoding: "utf8" });
console.log(data);
