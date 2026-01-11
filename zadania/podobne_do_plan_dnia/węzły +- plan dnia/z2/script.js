function dodaj() {
    const rodzaj = document.getElementById("rodzaj").value;
    const godzina = document.getElementById("godzina").value;
    const opis = document.getElementById("opis").value;

    // 4. Zmienna, w której zapiszemy ścieżkę do obrazka
    let src = "";

    // 5. Na podstawie wybranego rodzaju ustawiamy odpowiedni obrazek
    switch (rodzaj) {
        case "nauka":
            src = "nauka.png";
            break;
        case "praca":
            src = "praca.png";
            break;
        case "sport":
            src = "sport.png";
            break;
        case "relaks":
            src = "relaks.png";
            break;
        default:
            // jeśli użytkownik nie wybrał aktywności – przerwij działanie funkcji
            return;
    }

    // 6. Składamy tekst, który pojawi się obok obrazka
    //    format: godzina – opis
    const tekst = godzina + " – " + opis;

    // 7. Wywołujemy funkcję, która tworzy element DOM
    //    i dodaje go do kontenera
    dodajElement(src, tekst);
}

function wyczysc() {
    document.getElementById("rodzaj").selectedIndex = 0;
    document.getElementById("godzina").value = "";
    document.getElementById("opis").value = "";
}

function dodajElement(src, tekst) {

    // 1. Pobranie kontenera, do którego będą dodawane elementy
    const kontener = document.getElementById("kontener");

    // 2. Utworzenie głównego bloku (div)
    const box = document.createElement("div");

    // 3. Dodanie klasy CSS "element"
    box.classList.add("element");

    // 4. Utworzenie obrazka
    const img = document.createElement("img");

    // 5. Ustawienie źródła obrazka
    img.src = src;

    // 6. Utworzenie paragrafu
    const p = document.createElement("p");

    // 7. Wstawienie tekstu do paragrafu
    p.textContent = tekst;

    // 8. Dołączenie obrazka i paragrafu do boxa
    box.appendChild(img);
    box.appendChild(p);

    // 9. Dodanie boxa do kontenera
    kontener.appendChild(box);

    // 10. Automatyczne przewinięcie strony do nowego elementu
    box.scrollIntoView({ behavior: "smooth" });
}