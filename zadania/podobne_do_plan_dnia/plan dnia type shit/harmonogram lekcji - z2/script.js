function ustawDate() {
    const dataInput = document.getElementById("data");
    const kiedy = document.getElementById("kiedy");

    kiedy.innerHTML = "";

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

    kiedy.appendChild(h2);
}
function dodajZajecia() {
    const rodzaj = document.getElementById("rodzaj").value;
    const godzina = document.getElementById("godzina").value;
    const przedmiot = document.getElementById("przedmiot").value;
    const plan = document.getElementById("plan");

    const box = document.createElement("div");
    box.classList.add("zajecia");

    const img = document.createElement("img");

    switch (rodzaj) {
        case "mat":
            img.src = "mat.png";
            break;
        case "inf":
            img.src = "inf.png";
            break;
        case "wf":
            img.src = "wf.png";
            break;
        case "jez":
            img.src = "jez.png";
            break;
        case "inne":
            img.src = "inne.png";
            break;
        default:
            return;
    }

    const p = document.createElement("p");
    p.textContent = `${godzina} - ${przedmiot}`;

    box.appendChild(img);
    box.appendChild(p);

    plan.appendChild(box);
}

function zapiszHarmonogram() {
    alert("w przygotowaniu");
}

function drukujHarmonogram() {
    window.print();
}