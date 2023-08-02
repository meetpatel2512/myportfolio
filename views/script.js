const togglebtn = document.querySelector('.toggle_btn');
const togglebtnIcon = document.querySelector('.toggle_btn i');
const dropdown_menu = document.querySelector('.drop_down');
const ham = document.querySelector('.ham');
const cross = document.querySelector('.cross');
cross.style.display = "none";
document.querySelector('.drop_down li').classList.remove('.drop_down');

togglebtn.onclick = function () {
    dropdown_menu.classList.toggle('open');
    const isopen = dropdown_menu.classList.contains('open');
    if (isopen) {
        cross.style.display = "block";
        ham.style.display = "none";
    }
    else {
        cross.style.display = "none";
        ham.style.display = "block";

    }
}

