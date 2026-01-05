function termin() {
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

    const dzien = dniTygodnia[data.getDay()];

    const h2 = document.createElement("h2");
    h2.textContent = dzien;

    kiedy.appendChild(h2);
}

function wprowadz() {
    const rodzaj = document.getElementById("rodzaj").value;
    const czas = document.getElementById("czas").value;
    const opis = document.getElementById("opis").value;
    const co = document.getElementById("co");

    const box = document.createElement("div");
    box.classList.add("box");

    const img = document.createElement("img");

    switch (rodzaj) {
        case "1":
            img.src = "praca.png";
            break;
        case "2":
            img.src = "przyjazn.png";
            break;
        case "3":
            img.src = "porzadki.png";
            break;
        case "4":
            img.src = "trening.png";
            break;
        case "5":
            img.src = "bal.png";
            break;
        default:
            return; 
    }

    const p = document.createElement("p");
    p.textContent = `${czas} – ${opis}`;

    box.appendChild(img);
    box.appendChild(p);

    co.appendChild(box);
}


function zapisz() {
    alert("W przygotowaniu");
}
function drukuj(){
    window.print();
}
