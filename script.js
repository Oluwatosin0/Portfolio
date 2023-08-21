const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBranding = document.querySelector (".nav-branding")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBranding.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach (n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBranding.classList.remove("active");
}))

/*popup detail */
const popup = [
    "name",
    "description",
    "featured image",
    "technologies",
    "link to live version",
    "link to source"
]

function toggle(){
    const blur = document.querySelector(".blur");
    blur.classList.toggle("active");

    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
}
