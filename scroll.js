
let scrollcontainer = document.querySelector(".instagramimages");
let backbtn = document.getElementById("backBtn");
let nextbtn = document.getElementById("nextBtn");

nextbtn.addEventListener("click", () => {
    scrollcontainer.scrollLeft += 200;
    scrollcontainer.style.scrollBehaviour = "smooth";

})
backbtn.addEventListener("click", () => {
    scrollcontainer.scrollLeft -= 200;
    scrollcontainer.style.scrollBehaviour = "smooth";

})
