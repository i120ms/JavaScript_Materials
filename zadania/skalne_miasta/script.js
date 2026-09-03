function pokaz1() {
    pokaz(1);
}

function pokaz2() {
    pokaz(2);
}

function pokaz3() {
    pokaz(3);
}

function pokaz4() {
    pokaz(4);
}

function pokaz5() {
    pokaz(5);
}

function pokaz6() {
    pokaz(6);
}

function pokaz7() {
    pokaz(7);
}

function pokaz8() {
    pokaz(8);
}


function pokaz(numer) {
    let lewy = document.getElementById("lewy");

    let stareZdjecie = document.getElementById("duzeZdjecie");
    let starePrzyciski = document.getElementById("przyciski");

    if (stareZdjecie) {
        stareZdjecie.remove();
    }

    if (starePrzyciski) {
        starePrzyciski.remove();
    }

    let zdjecie = document.createElement("img");
    zdjecie.src = "z" + numer + ".jpg";
    zdjecie.id = "duzeZdjecie";
    zdjecie.alt = "Trasa " + numer;

    lewy.appendChild(zdjecie);

    let przyciski = document.createElement("div");
    przyciski.id = "przyciski";
    przyciski.className = "przyciski-akcji";

    let like = document.createElement("button");
    like.className = "btn btn-like";
    like.innerHTML = "❤️ Dodaj do ulubionych";

    like.onclick = function() {
        lubie(numer);
    };

    let download = document.createElement("button");
    download.className = "btn btn-download";
    download.innerHTML = "⬇️ Pobierz zdjęcie";

    download.onclick = function() {
        pobierz("z" + numer + ".jpg");
    };

    przyciski.appendChild(like);
    przyciski.appendChild(download);

    lewy.appendChild(przyciski);


    let footer = document.querySelector("footer");

    let historia = document.createElement("img");
    historia.src = "z" + numer + ".jpg";
    historia.alt = "Trasa " + numer;

    footer.appendChild(historia);
}


function lubie(id) {
    let prawy = document.getElementById("prawy");

    let zdjecie = document.createElement("img");
    zdjecie.src = "z" + id + ".jpg";
    zdjecie.alt = "Trasa " + id;

    prawy.appendChild(zdjecie);
}


function pobierz(sciezka) {
    // tej funkcji nie piszemy
}