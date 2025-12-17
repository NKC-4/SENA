function togglebar () {
    
const fabar = document.getElementById('fa-bars')
const navbar = document.getElementById('navbar')

fabar.addEventListener('click', (e) => {
    navbar.classList('active')
console.log(fabar)
console.log(navbar)
e.preventDefault()
})

}

togglebar()