let reponse = document.querySelector('div#rep');
let txtBtn = document.querySelector('p#btn');
let logoBtn = document.querySelector('span.material-icons')
let contentHtml = '<ul><li><h3>DÉVELOPPEUR</h3><a class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSer9XcD21PCCqawiHfF82hhX1O-RUWattlnGf0o1iWu5mdLwg/viewform?usp=sf_link">Accedez au formulaire</a></li><li><h3>GRAPHISTE/DESIGNER</h3><a class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSeqvsgsvkItfJyu09LvRGLyMyOczVliqTg2bF5QWFUi6GSIcw/viewform?usp=sf_link">Accedez au formulaire</a></li><li><h3>MONTEUR-VIDÉO</h3><a class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSeKHDYQTqZvkFK89LO1T5UQG1BoZcDIFz_n1KBA5tXNqyplzw/viewform?usp=sf_link">Accedez au formulaire</a></li></ul><ul><li><h3>BUILDER-MINECRAFT</h3><a class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLScKQkZcm5bEyT1P06yWF3NSR9-23wE_msztn_QcDf9G-HRU5g/viewform?usp=sf_link">Accedez au formulaire</a></li><li><h3>COMPOSITEUR/MUSICIEN/CHANTEUR</h3><a class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSfV4Nb3D_S1EALC-INAt7M5uxwQHv3h0j3ltms1rtqVOgGWYQ/viewform?usp=sf_link">Accedez au formulaire</a></li><li><h3>MODÉRATEUR/ASSISTANT</h3><a class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSc9DeAU_koGj3UJNYiB7judKpzkIPDUvDXGmvvs9z3cDF7XpA/viewform?usp=sf_link">Accedez au formulaire</a></li></ul><ul><li><h3>ANIMATEUR-DISCORD</h3><a class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSflU5SxdYVPOnyJZB0SWi4xNjqNJAFycPAMBAQkJDY_uzHu6w/viewform?usp=sf_link">Accedez au formulaire</a></li><li><h3>COMMUNITY-MANGER</h3><a class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSdlVrklk0i8NPk8VqcK3ueDt6pOoM4LTHBiYnpovWjFDvKyCQ/viewform?usp=sf_link">Accedez au formulaire</a></li><li><h3>MEMBRE DE LEQUIPE DE TYROLIUM</h3><a class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSdRZ5UxQCDDXHHx6xQKxgrS_JiwAZnr4QQbPs3glVem5-cOnA/viewform?usp=sf_link">Accedez au formulaire</a></li></ul>';

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
        reponse.innerHTML = contentHtml;
    }
} 