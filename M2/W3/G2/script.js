document.addEventListener("DOMContentLoaded", function () {
    let saveButton = document.getElementById("saveButton");
    let removeButton = document.getElementById("removeButton");
    let timerDiv = document.getElementById("timer");

    saveButton.addEventListener("click", saveName);
    removeButton.addEventListener("click", removeName);

    function saveName() {
        let nameInput = document.getElementById("name").value;
        localStorage.setItem("username", nameInput);
        displaySavedName();
    }
    function removeName() {
        localStorage.removeItem("username");
        displaySavedName();
    }
    function displaySavedName() {
        let savedNameDiv = document.getElementById("savedName");
        let savedName = localStorage.getItem("username");

        if (savedName) {
            savedNameDiv.innerHTML = "Nome salvato: " + savedName;
        } else {
            savedNameDiv.innerHTML = "";
        }
    }
    function startTimer() {
        let startTime = sessionStorage.getItem("startTime");

        if (!startTime) {
            startTime = Date.now();
            sessionStorage.setItem("startTime", startTime);
        }
        let intervalId = setInterval(function () {
            let currentTime = Date.now();
            let elapsedTime = Math.floor((currentTime - startTime) / 1000); 
            timerDiv.innerHTML = "Tempo trascorso: " + elapsedTime + " secondi";
        }, 1000); 
    }
    
    startTimer();
    displaySavedName();
});