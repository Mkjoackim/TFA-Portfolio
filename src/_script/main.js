
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
navToggle.addEventListener('click',show);
navClose.addEventListener('click',close);

function show(){
    navMenu.style.display ='flex',
    navMenu.style.top = '0'
}
function close(){ 
    navMenu.style.top ='-100%'
    }
/*===== ACTIVE =====*/

const navLinkEls = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
    if (navLinkEl.href.includes(windowPathname)) {
        navLinkEl.classList.add('active');
    }
})
/*===== LOADER =====*/
gsap.from('.loader h1', 10, {
    x: 800
}, 'start')

gsap.from('.loader h2', 10, {
    x: -800
}, 'start')

gsap.from('.nav__menu ul li', 1.4,{
    y:-250,
    stagger: .4
})
gsap.from('.about__txt',   {
    scrollTrigger: {
        trigger: '.about__txt',
        start:'20px 30%',
        toggleActions: "restart none none none",
    },
    x: -1000,
    duration: 3
})
gsap.from('.grid-aps p',   {
    scrollTrigger: {
        trigger: '.grid-aps p',
        start:'20px 30%',
        toggleActions: "restart none none none",
    },
    x: -1500,
    duration: 1.5
})


/*===== ANIMATION gsap =====*/

gsap.from(".illu .gallery-item", {
    scrollTrigger: {
        trigger: ".illu .gallery-container",
        toggleActions: "restart none none resert",
        start : "top 30%"
    },
    y : 100,
    opacity: 0,
    scale: 0,
    ease: "elastic.out(0.1,0.1)",
    duration: 1,
    stagger : 0.1
})
gsap.from(".card5", {
    scrollTrigger: {
        trigger: ".card5",
        toggleActions: "restart none none resert",
        start : "top 90%"
    },
    y : 300,
    opacity: 0,
    scale: 0,
    duration: 1,
    stagger : 0.1
})
gsap.from(".txt_art .art__txt", {
    scrollTrigger: {
        trigger: ".txt_art .art__txt",
        toggleActions: "restart none none resert",
        start : "top 100%"
    },
    x : -300,
    opacity: 0,
    scale: 0,
    duration: 1,
    stagger : 0.1
})
/*===== ANIMATION Reveal =====*/

const sr = ScrollReveal({
    duration: 2000,
    delay: 400,
}) ;

sr.reveal('.hero-card-text', {
    origin: 'left',
    distance: '50px',
})
sr.reveal('.text .port_txt .art__txt', {
    origin: 'left',
    distance: '50px',
})
sr.reveal('.p_txt', {
    origin: 'right',
    distance: '50px',
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SVG ===============*/ 

let path = document.querySelector("path");
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;

// Set offset
path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
	// What % down is it?
	var scrollPercentage =
		(document.documentElement.scrollTop + document.body.scrollTop) /
		(document.documentElement.scrollHeight + document.body.clientHeight);

	// Length to offset the dashes
	var drawLength = pathLength * scrollPercentage;

	// Draw to reverse
	path.style.strokeDashoffset = pathLength - drawLength;

	// Parallax
	const target = document.querySelectorAll(".scroll");

	var index = 0,
		length = target.length;
	for (index; index < length; index++) {
		var pos = window.pageYOffset * target[index].dataset.rate;

		if (target[index].dataset.direction === "vertical") {
			target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
		} else {
			var posX = window.pageYOffset * target[index].dataset.ratex;
			var posY = window.pageYOffset * target[index].dataset.ratey;

			target[
				index
			].scroll.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
		}
	}
});
