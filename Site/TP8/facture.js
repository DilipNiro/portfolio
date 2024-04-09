function result() {
    var priceA1 = document.getElementById("t1").value;
    var priceA2 = document.getElementById("t2").value;
    var priceA3 = document.getElementById("t3").value;
    var quantityA1 = document.getElementById("q1").value;
    var quantityA2 = document.getElementById("q2").value;
    var quantityA3 = document.getElementById("q3").value;

    var resulT1 = Number(priceA1) * Number(quantityA1);
    var resulT2 = Number(priceA2) * Number(quantityA2);
    var resulT3 = Number(priceA3) * Number(quantityA3);
    var resultT = Number(resulT1) + Number(resulT2) + Number(resulT3);

    r1.value = resulT1;
    r2.value = resulT2;
    r3.value = resulT3;
    r4.value = resultT; s
}

function reset() {
    a1.value = "";
    a2.value = "";
    a3.value = "";
    q1.value = "";
    q2.value = "";
    q3.value = "";
    t1.value = "";
    t2.value = "";
    t3.value = "";
    r1.value = "";
    r2.value = "";
    r3.value = "";
    r4.value = "";


}