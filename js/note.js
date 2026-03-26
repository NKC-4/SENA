
function alert() {
    const levelsaved = document.getElementById("succes__infos");
    levelsaved.innerHTML = "";
    const message = document.createElement("span");
    levelsaved.appendChild(message);

    levelsaved.classList.add('alert');
    message.innerText = "Veuillez remplir le champ.";

    setTimeout(() => {
        levelsaved.classList.remove('alert')
    }, 850);
}

function succes() {
    const levelsaved = document.getElementById("succes__infos");
    levelsaved.innerHTML = "";
    const message = document.createElement("span");
    levelsaved.appendChild(message);

    levelsaved.classList.add('block__activate');
    message.innerText = "Niveau sauvegardé";

    setTimeout(() => {
        levelsaved.classList.remove('block__activate')
    }, 850);
}


let buttonsave = document.getElementById('save__btn')

buttonsave.addEventListener('click', (e) => {
    e.preventDefault()

    let note = document.getElementById('note').value.trim();
    let savedsucces = document.getElementById('level__saved')
    savedsucces.innerHTML = ""

    if (note === "") {
        alert()

    } else {
        succes()
        localStorage.setItem("note", note)
        let notesave = localStorage.getItem("note")
        document.getElementById('note').value = ""
    }
})

window.addEventListener('DOMContentLoaded', () => {

    let savedsucces = document.getElementById('level__saved')
    savedsucces.innerHTML = ""
    let notesave = localStorage.getItem("note");

    if (notesave) {
        savedsucces.classList.add('block__activate')
        document.getElementById('level__saved').innerHTML =
            `Vous étiez arrêté sur : ${notesave}`;
    }

    setTimeout(() => {
        savedsucces.classList.remove('block__activate')
    }, 4550);
});