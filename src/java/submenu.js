document.addEventListener("DOMContentLoaded", function () {
    const contactoItem = document.querySelector(".enlaces-nav li:last-child");

    contactoItem.addEventListener("mouseenter", function () {
        const submenu = this.querySelector(".submenu");
        submenu.style.opacity = "0";
        submenu.style.transform = "translateY(-10px)";
        submenu.style.display = "block";

        setTimeout(() => {
            submenu.style.opacity = "1";
            submenu.style.transform = "translateY(0)";
        }, 10);
    });

    contactoItem.addEventListener("mouseleave", function () {
        const submenu = this.querySelector(".submenu");
        submenu.style.opacity = "0";
        submenu.style.transform = "translateY(-10px)";

        setTimeout(() => {
            submenu.style.display = "none";
        }, 300);
    });
});