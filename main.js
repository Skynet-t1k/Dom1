// Lavora con il DOM:
// crea una pagina HTML con 3 paragrafi e 3 bottoni. 
// Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale.
// ogni paragrafo dovra' avere un colore diverso. 
// il secondo dovra’ rendere il testo dei paragrafi in grassetto. 
// il terzo dovra’ far scomparire e ricomparire i paragrafi.

// TIPS:
// ricordati della proprieta’ display: none in CSS!
// i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random
// semplicemente randomizzando questi tre valori e mettendoli insieme. Scopri come.

//Selettori
let paragrafi = document.querySelectorAll("p");
let cambiaColore = document.querySelector("#cambiaColore");
let grassetto = document.querySelector("#grassetto");
let toggleParagrafi = document.querySelector("#toggleParagrafi");

//Listener
grassetto.addEventListener('click', ()=>{
    paragrafi.forEach((paragrafo) => paragrafo.classList.toggle('toggleGrassetto'))
});

toggleParagrafi.addEventListener('click', ()=>{
    paragrafi.forEach((paragrafo) => paragrafo.classList.toggle('toggleParagrafi'))
});

cambiaColore.addEventListener('click', ()=>{
    paragrafi.forEach((paragrafo) => {
    let randomR = Math.floor(Math.random() * 255) + 1;
    let randomG = Math.floor(Math.random() * 255) + 1;
    let randomB = Math.floor(Math.random() * 255) + 1;
    paragrafo.style.color = `rgb(${randomR}, ${randomG}, ${randomB})`
    });
});

