let date = document.querySelector(".date")
let insertDate = new Date().getFullYear()
date.innerHTML = insertDate

// for the toggle
const navContainer = document.querySelector(".nav-container")
const links = document.querySelector(".links")
const toggle = document.querySelector(".nav-toggle")
toggle.addEventListener("click", function() {
    const containerHeight = navContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if (containerHeight === 0) {
        navContainer.style.height = `${linksHeight}px`
    } else {
        navContainer.style.height = 0
    }
})
//fixed navbar
const nav = document.querySelector(".nav-bar")
const topLink = document.querySelector(".top-link")
window.addEventListener("scroll", function name() {
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }
    if (scrollHeight > 1000) {
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-link")
    }

})
const scrollLink = document.querySelectorAll(".scroll-link")
scrollLink.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        let position = element.offsetTop
        window.scrollTo({
            left: 0,
            top:position
        })
        navContainer.style.height = 0
    })
})