function seconnecter() {
    var login = prompt("Donner votre nom d'utilisateur");
    var password = prompt("Entrer votre mot de passe ");

    if (login == "admin" && password == "admin") {
        document.write("Bienvenue " + login)
    } else {
        alert("Accès refusé");
    }
}

function seconnecter3() {
    var i = 0;
    do {
        var id = prompt("Entrez votre nom d'utilisateur");
        var mdp = prompt("Entrez votre mot de passe");
        if (id == "admin" && mdp == "admin") {
            document.write("Bienvenue" + id);
            break
        } else {
            alert("Accès refusé");
            i++;
        }
    }
    while (i < 3);
    if (i == 3) {
        alert("Delai dépassé");
    }

}



function affichetab() {
    document.write('<table border=2px width=30%>');
    for (var i = 0; i <= 5; i++) {
        document.write('<tr> <td>*</td> <td>*</td> <td>*</td> </tr>');
    }
    document.write('</table>');
}

function affichetab2() {
    var asknumber = prompt("Combien de lignes souhaitez vous");
    document.write('<table border=2px width=30%>');
    for (var i = 0; i <= asknumber; i++) {
        document.write("<tr> <td>" + i + "</td> <td>*</td> <td>*</td> </tr>");
    }
    document.write('</table>');
}

function cdc() {
    var chaine = prompt("Donnez un mot");
    document.write(chaine.toUpperCase() + "<br>");
    document.write(chaine.toLocaleLowerCase() + "<br>");
    document.write("la chaine contient " + chaine.length + " caractères" + "<br>");
    document.write("la première lettre est " + chaine.substr(0, 1) + "<br>");

}

function swich() {
    var color = prompt("Entrez une couleur");
    switch (color) {
        case "rouge": document.body.style.background = "red";
            break;
        case "ROUGE": document.body.style.background = "red";
            break;
        case "vert": document.body.style.background = "green";
            break;
        case "Vert": document.body.style.background = "green";
            break;
        case "rose": document.body.style.background = "pink";
            break;
        case "ROSE": document.body.style.background = "pink";
            break;

        default: alert("Couleur non définie");

    }
}



