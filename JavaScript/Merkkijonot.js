const luku1 = 200;
const luku2 = 400;

let nimi = "Olli Oppilas";
let nimi = 'Olli Oppilas';

let viesti = "Luku 1 = " + luku1 + ", ja luku 2 = " + luku2 + ".";
let viesti = `Luku 1 = ${luku1}, ja luku 2 = ${luku2}.`;

// nimi = null;
// nimi = undefined;

// malli 1
if ((nimi != null) && (nimi != undefined) && (nimi != "")) {
    console.log("1: Moi " + nimi + "!");
}

// malli 2
if ((typeof nimi == "string") && (nimi != "")) {
    console.log("2: Moi " + nimi + "!");
}

// malli 3
if (nimi) {
    console.log("3: Moi " + nimi + "!");
}

/*
let kylläEi = false;
kylläEi = true;

if (kylläEi) {
    console.log("Kyllä!");
}
else {
    console.log("Ei!");
}
*/