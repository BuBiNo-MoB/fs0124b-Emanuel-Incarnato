const tabellaNumeri = document.querySelector(".tabellone");

for (let i = 1 ; i <= 90; i++){

    const celle = document.createElement("div");

    celle.textContent = i;

    celle.classList.add("celle")

    tabellaNumeri.appendChild(celle)
}



const btn = document.querySelector("#bottone");

btn.addEventListener('click', estrazioneLotto);

function estrazioneLotto(){

    let numero = Math.floor(Math.random() * 90) + 1;

    document.getElementById("nEstratto").innerHTML = "Numero estratto: " + numero;

    const cella = document.querySelector(".celle:nth-child(" + numero + ")");

    cella.style.backgroundColor = "yellow";

    cella.style.borderColor = "green";

}

