var action = 1;
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#nav-toggle").addEventListener("click", function () {
        this.classList.toggle("active");
    });
});

function openNav() {
    if (action == 1) {
        document.getElementById("nav").style.height = "100%";
        action = 0;
    } else {
        document.getElementById("nav").style.height = "0%";
        action = 1;
    }
}