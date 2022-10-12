/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
} 
/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects__container", {
   loop: true,
   spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
       
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
       
      },
  
  });





/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    //check if rthe field has a value

    if(contactName.value === '' || contactEmail.value==='' || contactProject.value=== ''){
        //Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //Show message
        contactMessage.textContent = 'Write all the input fields'
    }else{
        //serviceID - templateID - #form - publicKey

        emailjs.sendForm('service_0gk5wgw','template_tdbfvtu','#contact-form','cyMf1BNNBI3YZcr68')
        .then(() => {
            //show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent'

            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            },5000)
        }, (error)=>{
            alert('OOPS! SOMETHING HAS FAILED...', error)
        })

        //To clear the input fields
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY >sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp  = () =>{
    const scrollUp = document.getElementById('scroll-up')

    //when the scroll is higher than 350 viewport height, add dthe shwo-scroll class to the a tag with the scrollUp
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
                               : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
})

sr.reveal('.home__data, .projects__container, .footer__container')
sr.reveal('.home__info div', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.skills__content', {origin: 'bottom'})
sr.reveal('.contact__content:nth-child(1)',{origin: 'left'})
sr.reveal('.contact__content:nth-child(2)',{origin: 'right'})
sr.reveal('.qualification_content, .services__card', {interval: 100})
