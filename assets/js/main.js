/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home__img',{delay: 400});
sr.reveal('.home__social-icon',{ interval: 200});
// sr.reveal('.home__img',{delay: 400});

/*SCROLL ABOUT*/
sr.reveal('.about__img',{delay: 200});
sr.reveal('.about__subtitle',{delay: 400});
sr.reveal('.about__text',{delay: 400});

/*SCROLL SKILLS*/
sr.reveal('.skills-text',{interval: 200});
sr.reveal('.skills__data',{interval: 200});


/*SCROLL EXPERIENCE AND EDUCATION*/
sr.reveal('.timeline-box',{interval: 200});

/*SCROLL WORK*/
sr.reveal('.blog-post__img',{interval: 200});
sr.reveal('.blog-post',{interval: 200});

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200});

/*SCROLL FOOTER*/
sr.reveal('.footer__title',{ delay: 200});
sr.reveal('.footer__phone',{ delay: 200});
sr.reveal('.footer__social',{ interval: 200});