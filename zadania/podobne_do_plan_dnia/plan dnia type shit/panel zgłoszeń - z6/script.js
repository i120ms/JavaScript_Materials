function ustawDate() {
    const dataA = document.getElementById("data");
    const dataZgloszen = document.getElementById("dataZgloszen");

    dataZgloszen.innerHTML = "";

    const data = new Date(dataA.value);

    const dniTygodnia = [
        "Niedziela",
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota"
    ];

    const nazwaDaty = dniTygodnia[data.getDay()];
    const h2 = document.createElement("h2");
    h2.textContent = nazwaDaty;

    dataZgloszen.appendChild(h2);
}

function dodajZgloszenie() {
    const typ = document.getElementById("typ").value;
    const godzina = document.getElementById("godzina").value;
    const opis = document.getElementById("opis").value;
    const lista = document.getElementById("lista");

    const box = document.createElement("div");
    box.classList.add("zgloszenie");
    const img = document.createElement("img");

    switch (typ) {
        case "sprzet":
            img.src = "sprzet.png";
            break;
        case "software":
            img.src = "software.png";
            break;
        case "siec":
            img.src = "siec.png";
            break;
        case "inne":
            img.src = "inne.png";
            break;
        default:
            return;
    }

    const p = document.createElement("p");
    p.textContent = `${godzina} - ${opis}`;

    box.appendChild(img);
    box.appendChild(p);
    lista.appendChild(box);
}

function zapiszZgloszenia() {
    alert("w przygotowaniu");
}

function drukujZgloszenia() {
    const lewa = document.getElementById("lewa");
    const prawa = document.getElementById("prawa");

    const lewaDisplay = lewa.style.display;
    const prawaWidth = prawa.style.width;

    lewa.style.display = "none"
    prawa.style.width = "100%"

    window.print();

    lewa.style.display = lewaDisplay;
    prawa.style.width = prawaWidth;
}