if (window.location.href.includes("merci.html")) {
    history.replaceState(null, "", "/");
}

function alert() {
    const alert = document.getElementById("alert");
    alert.innerHTML = "";
    const message = document.createElement("span");
    alert.appendChild(message);

    alert.classList.add("activate-alert");
    message.innerText = "Veuillez remplir tous les champs";

    setTimeout(() => {
        alert.classList.remove('activate-alert')
    }, 650);
}

const form = document.querySelector('form')
const submitBtn = document.getElementById('submit__btn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    const name = document.getElementById('name').value.trim();
    const firstname = document.getElementById('firstname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('comment').value.trim();

    if (name === '' || firstname === '' || email === '' || message === '') {
        alert()
        submitBtn.disabled = false
        return;
    }

    try {
        const response = await fetch("https://formspree.io/f/xlgwwayr", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                firstname: firstname,
                email: email,
                message: message
            })
        });

        if (response.ok) {
            form.reset();
            window.location.href = "https://nkc-4.github.io/SENA/merci";
        } else {
            alert("Erreur lors de l'envoi du message.");
        }
    } catch (error) {
        alert("Une erreur est survenue : " + error.message);
    }
});
