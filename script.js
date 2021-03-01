const menuIcon=document.querySelector('#mobile_icon')
const menuLinks= document.querySelector('.navbar_menu')
const navbarLogo= document.querySelector('#navbar_logo')
const Body= document.querySelector('body')

//  display Mobile Menu
const MobileMenu=()=>{
    menuIcon.classList.toggle('is_active')
    menuLinks.classList.toggle('active')
    Body.classList.toggle('active')
    console.log('hellowolrd');
}

menuIcon.addEventListener('click',MobileMenu)

// animation

gsap.registerPlugin(ScrollTrigger);
gsap.from('.animate-hero',{
    duration:0.6,
    opacity:0,
    y:-150,
    stagger:0.3
})
gsap.from('.animate-services',{
    ScrollTrigger:'animate-services',
    duration:0.6,
    opacity:0,
    x:-150,
    stagger:0.12
})
gsap.from('.animate-img',{
    ScrollTrigger:'animate-services',
    duration:1.2,
    opacity:0,
    x:-250, 
})