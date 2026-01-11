function ustawDzien() {
    const dataS = document.getElementById("data");
    const kiedy = document.getElementById("kiedy");

    kiedy.innerHTML = "";

    const data = new Date(dataS.value);

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

    kiedy.appendChild(h2);
}

function dodajZadanie() {
    const rodzaj = document.getElementById("rodzaj").value;
    const priorytet = document.getElementById("priorytet").value;
    const godzina = document.getElementById("godzina").value;
    const opis = document.getElementById("opis").value;
    const lista = document.getElementById("lista");

    const box = document.createElement("div");
    box.classList.add("zadanie");

    const img = document.createElement("img");

    switch (rodzaj) {
        case "praca":
            img.src = "praca.png";
            break;
        case "nauka":
            img.src = "nauka.png";
            break;
        case "dom":
            img.src = "dom.png";
            break;
        case "inne":
            img.src = "inne.png";
            break;
        default:
            return;
    }

    switch (priorytet) {
        case "high":
            box.classList.add("high");
            break;
        case "medium":
            box.classList.add("medium");
            break;
        case "low":
            box.classList.add("low");
            break;
        default:
            return;
    }

    const p = document.createElement("p");
    p.textContent = `${godzina} - ${opis}`;

    box.appendChild(img);
    box.appendChild(p);

    lista.appendChild(box);

    aktualizujLicznik();
}

function aktualizujLicznik() {
    const licznik = document.getElementById("licznik");
    const zadania = document.getElementsByClassName("zadanie");

    licznik.textContent = `Liczba zadań: ${zadania.length}`;
}

function zapiszPlan() {
    alert("w przygotowaniu");
}

function drukujPlan() {
    window.print();
}