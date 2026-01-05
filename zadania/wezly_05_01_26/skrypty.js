function pokaz(src) {
    const kontener = document.getElementById("kontener");
    const img = document.createElement("img");

    img.src = src;
    img.classList.add("duze-zdjecie");

    kontener.appendChild(img);
    img.scrollIntoView({ behavior: "smooth" });
}
