function ustawDzien() {
    const dataInput = document.getElementById("data");
    const dzienSekcja = document.getElementById("dzien");

    dzienSekcja.innerHTML = "";

    const data = new Date(dataInput.value);

    const dniTygodnia = [
        "Niedziela",
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota"
    ];

    const nazwaDnia = dniTygodnia[data.getDay()];

    const h2 = document.createElement("h2");
    h2.textContent = nazwaDnia;

    dzienSekcja.appendChild(h2);
}

function dodajZadanie() {
    const rodzaj = document.getElementById("rodzaj").value;
    const godzina = document.getElementById("godzina").value;
    const opis = document.getElementById("opis").value;
    const lista = document.getElementById("lista");

    const box = document.createElement("div");
    box.classList.add("zadanie");

    const img = document.createElement("img");

    switch (rodzaj) {
        case "nauka":
            img.src = "nauka.png";
            break;
        case "praca":
            img.src = "praca.png";
            break;
        case "dom":
            img.src = "dom.png";
            break;
        case "sport":
            img.src = "sport.png";
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

function zapiszPlan() {
    alert("w przygotowaniu");
}

function drukujPlan() {
    window.print();
}