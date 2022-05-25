/*====================================
    # Hide, Show Navbar
=====================================*/
let btnMenu = document.getElementById('menu-bar');
let navBar = document.querySelector('.navbar');

btnMenu.onclick = () => {
    btnMenu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}


/*====================================
    # Nav-link Action, Remove Navbar
=====================================*/
const navLinks = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navBar = document.querySelector('.navbar'); 
    const btnMenu = document.getElementById('menu-bar'); 

    navBar.classList.remove('active');
    btnMenu.classList.remove('fa-times');
}
navLinks.forEach(e => e.addEventListener('click', linkAction));


/*====================================
    # Scroll Remove Navbar
=====================================*/
window.onscroll = () => {
    if(this.scrollY > 80) {
        navBar.classList.remove('active');
        btnMenu.classList.remove('fa-times');
    }
}

/*====================================
    # Scroll Change Background
=====================================*/
function scrollHeader(){
    const header = document.querySelector('.header');
    if(this.scrollY >= 80){
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    } 
}
window.addEventListener('scroll', scrollHeader)

/*====================================
    # Home Swiper slide
=====================================*/
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


/*====================================
    # REVIEW Swiper slide
=====================================*/
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    // autoplay: {
    //     delay: 7500,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
    },
});


/*====================================
    # BLOGS Swiper slide
=====================================*/
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});



/*====================================
    # SCROLL TOP
=====================================*/
function scrollUp(){
    const scrollUp = document.getElementById('scrollTop');
    if(this.scrollY >= 400){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);