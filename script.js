document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("show-text");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("show-text");
        });
    });
});

/*============= Parte do Jogo ==============*/
document.addEventListener("DOMContentLoaded", () => {
    const plantas = [
        "imagens/semente.png",
        "imagens/muda.png",
        "imagens/arvore.png",
        "imagens/arvore-florida.jpg"
    ];

    let indice = 0;
    const imgPlanta = document.getElementById("planta-jogo");
    const btnRegar = document.getElementById("regar-btn");

    btnRegar.addEventListener("click", () => {
        if(indice < plantas.length - 1){
            indice++;
            imgPlanta.src = plantas[indice];
        } else {
            alert("Sua planta está totalmente crescida e florida!");
        }
    });
});

// ========================= EASTER EGG =========================
document.addEventListener("DOMContentLoaded", () => {
    const easter = document.getElementById("easter-egg");
    let seq = "";
    const segredo = "planta";

    if (easter) { 
        document.addEventListener("keydown", (e) => {
            seq += e.key.toLowerCase();

            if (seq.includes(segredo)) {
                easter.style.display = "block";
            }

            if (seq.length > segredo.length) {
                seq = seq.slice(-segredo.length);
            }
        });
    }
});
