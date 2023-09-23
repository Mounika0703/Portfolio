const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',() =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = 'var(--bg-black-50)';
    }else{
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

/*----------------about section tabs------------------*/
(() =>{
    const aboutSection = document.querySelector(".about-section");
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            //deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("active");
            //activate new 'tab-item'
            event.target.classList.add("active");
            //deactivate existing active tab-content
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            //activate new tab content
            aboutSection.querySelector(target).classList.add("active");
        }
    
    })
})();

window.addEventListener("load", () =>{
    //preloader
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display = "none";
    }, 600)
})