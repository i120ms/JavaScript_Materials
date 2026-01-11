function ustawDate() {
    const dataA = document.getElementById("data");
    const termin = document.getElementById("termin");

    termin.innerHTML = "";

    const data = new Date(dataA.value);

    const dniTygodnia = [
        "niedziela",
        "poniedziałek",
        "wtorek",
        "środa",
        "czwartek",
        "piątek",
        "sobota"
    ];

    const nazwaDnia = dniTygodnia[data.getDay()];

    const h2 = document.createElement("h2");
    h2.textContent = nazwaDnia;

    termin.appendChild(h2);
}

function dodajRezerwacje() {
    const zasob = document.getElementById("zasob").value;
    const godzina = document.getElementById("godzina").value;
    const opis = document.getElementById("opis").value;
    const lista = document.getElementById("lista");

    const box = document.createElement("div");
    box.classList.add("rezerwacja");

    const img = document.createElement("img");

    switch (zasob) {
        case "sala":
            img.src = "sala.png";
            break;
        case "projektor":
            img.src = "projektor.png";
            break;
        case "laptop":
            img.src = "laptop.png";
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

function zapiszRezerwacje() {
    alert("w przygotowaniu")
}

function drukujRezerwacje() {
    const lewa = document.getElementById("lewa");
    const prawa = document.getElementById("prawa");

    const lewaDisplay = lewa.style.display;
    const prawaWidth = prawa.style.width;

    lewa.style.display = "none";
    prawa.style.width = "100%";

    window.print();

    lewa.style.display = lewaDisplay;
    prawa.style.width = prawaWidth;
}