console.log("Laskin.js-tiedosto käynnistyy.");

// const nimi = prompt("Anna nimesi:");
// alert("Moi "+nimi+"!");

$("#summaPainike").click(function () {

    const luku1 = $("#luku1").val();
    const luku2 = $("#luku2").val();
    const summa = parseInt(luku1) + parseInt(luku2);

    alert("Summa on: " + summa);
});
