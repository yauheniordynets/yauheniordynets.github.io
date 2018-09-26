
function myFunction() {
    var x = document.getElementsByClassName("header_menu");
    if (x['0'].style.display === "flex") {
        x['0'].style.display = "none";
    } else {
        x['0'].style.display = "flex";
    }
}

function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block"
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


