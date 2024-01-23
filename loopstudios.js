let modal = document.getElementById("modal")
// let openModal=document.getElementsByClassName("hamburger")
let closeButton = document.getElementsByClassName("closeButton")

function openModal() {
    if (modal == null) return
    modal.classList.add("active")
}

function closeModal() {
    // if(modal == true){
    modal.classList.remove("active")
    // }
}