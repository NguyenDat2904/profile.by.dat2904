const headerSticky = document.querySelector("header");
window.addEventListener("scroll", function(){
    headerSticky.classList.toggle("sticky", this.window.scrollY > 0);
})