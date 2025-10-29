function f1(zwierze){
            let container = document.getElementById("cont");
            let zdjecie = document.createElement("img");
            
            zdjecie.src = zwierze;
            zdjecie.classList.add("duze_zdjecie");
            container.appendChild(zdjecie);
}