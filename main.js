let reponse = document.querySelector('div#rep');
let txtBtn = document.querySelector('p#btn');
let logoBtn = document.querySelector('span.material-icons')

function myFunction() {
    var toggleBtn = document.querySelector("button");
    if (toggleBtn.id === "active") {
        toggleBtn.id = "desactive";
        txtBtn.innerHTML = "Afficher les formulaire de recrutement";
        logoBtn.innerHTML = "expand_more";
        reponse.innerHTML = "";
    } else {
        toggleBtn.id = "active";
        txtBtn.innerHTML = "Enlever les formulaire de recrutement"
        logoBtn.innerHTML = "expand_less";
        reponse.innerHTML = "form";
    }
} 