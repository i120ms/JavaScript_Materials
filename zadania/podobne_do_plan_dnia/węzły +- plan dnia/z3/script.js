function dodajWydarzenie() {
    const typ = document.getElementById("typ").value;
    const data = document.getElementById("data").value;
    const nazwa = document.getElementById("nazwa").value;

    let src = "";

    switch (typ) {
        case "koncert":
            src = "koncert.png";
            break;
        case "egzamin":
            src = "egzamin.png";
            break;
        case "wycieczka":
            src = "wycieczka.png";
            break;
        case "urodziny":
            src = "urodziny.png";
            break;
        default:
            return;
    }

    const tekst = `${data} - ${nazwa}`;

    dodajElement(src, tekst);
}

function dodajElement(src, tekst) {
    const lista = document.getElementById("lista");
    const box = document.createElement("div");

    box.classList.add("wydarzenie");

    const img = document.createElement("img");
    img.src = src;

    const p = document.createElement("p");
    p.textContent = tekst;

    box.appendChild(img);
    box.appendChild(p);

    lista.appendChild(box);

    box.scrollIntoView({ behavior: "smooth" });
}