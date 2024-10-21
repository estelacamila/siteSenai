const Button = document.querySelector("button")
const modal = document.querySelector("dialog")
const closeModal = document.querySelector("dialog span")


Button.onclick = function() {
    modal.showModal()
}

closeModal.onclick = function() {
    modal.close()
}


function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('open');
}

function closeMenu() {
    const menu = document.querySelector('#menu');
    menu.classList.remove('open'); 
}

function abrirModal() {
    document.querySelector('#modal').classList.add('active');
}

function fecharModal() {
    document.querySelector('#modal').classList.remove('active');
}