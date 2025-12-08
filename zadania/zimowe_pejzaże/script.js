let header = document.querySelector("header");
let footer = document.querySelector("footer");

for (let i=1; i<=20; i++){
    let zdjH = document.createElement("img");
    let zdjF = document.createElement("img");
    zdjH.src = "platek.png";
    zdjF.src = "platek.png";

    header.appendChild(zdjH);
    footer.appendChild(zdjF);
}

let licznikZdjec = 1;
let przesunPion = 13;
let przesunPoziom = 10;
function wstawZdjecie(){
    let elemMain = document.querySelector("main");
    let zdjecie = "zima" + licznikZdjec + ".jpg";
    let elemZdjecie = document.querySelector("img");

    elemZdjecie.src = zdjecie;
    elemZdjecie.style.position = "absolute";

    if(licznikZdjec == 1){
        elemZdjecie.style.left = przesunPoziom + "%";
        elemZdjecie.style.top = przesunPion + "%";
        elemZdjecie.style.zIndex = licznikZdjec;
        elemMain.appendChild(elemZdjecie);
    }else if(licznikZdjec < 8){
        przesunPion += 3;
        przesunPoziom += 6;
        elemZdjecie.style.left = przesunPoziom + "%";
        elemZdjecie.style.top = przesunPion + "%";
        elemZdjecie.style.zIndex = licznikZdjec;
        elemMain.appendChild(elemZdjecie);
    }
}