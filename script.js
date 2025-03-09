let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector(".navbar");
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#appointmentForm");
    const popup = document.getElementById("popup");
    const popupOverlay = document.getElementById("popupOverlay");
    const closeBtn = document.querySelector(".close-popup");
    const confirmBtn = document.querySelector(".confirm-btn");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector('input[type="text"]').value.trim();
        const number = document.querySelector('input[type="number"]').value.trim();
        const email = document.querySelector('input[type="email"]').value.trim();
        const date = document.querySelector('input[type="date"]').value.trim();

        const namePattern = /^[a-zA-Z\s]+$/;
        const numberPattern = /^\d{11}$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!namePattern.test(name)) {
            alert("Please enter a valid name (letters and spaces only).");
            return;
        }
        if (!numberPattern.test(number)) {
            alert("Please enter a valid 11-digit phone number.");
            return;
        }
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (date === "") {
            alert("Please select a valid date.");
            return;
        }

        // Show the popup with overlay
        popup.classList.add("open-popup");
        popupOverlay.classList.add("active");
        form.reset();
    });

    // Close popup on button click
    closeBtn.addEventListener("click", function () {
        popup.classList.remove("open-popup");
        popupOverlay.classList.remove("active");
    });

    confirmBtn.addEventListener("click", function () {
        popup.classList.remove("open-popup");
        popupOverlay.classList.remove("active");
    });

    // Close popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === popupOverlay) {
            popup.classList.remove("open-popup");
            popupOverlay.classList.remove("active");
        }
    });
});
