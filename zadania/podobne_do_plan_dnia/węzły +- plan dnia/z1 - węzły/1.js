function dodajElement(src, tekst) {

    // 1. pobranie kontenera
    const kontener = document.getElementById("kontener");

    // 2. utworzenie głównego bloku
    const box = document.createElement("div");
    box.classList.add("element");

    // 3. utworzenie obrazu
    const img = document.createElement("img");
    img.src = src;

    // 4. utworzenie paragrafu
    const p = document.createElement("p");
    p.textContent = tekst;

    // 5. złożenie elementów
    box.appendChild(img);
    box.appendChild(p);
    kontener.appendChild(box);

    // 6. przewinięcie do nowego elementu
    box.scrollIntoView({ behavior: "smooth" });
}
