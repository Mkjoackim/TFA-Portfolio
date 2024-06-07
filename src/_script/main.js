
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
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

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== FORM ===============*/ 

const form = document.querySelector("form")
const fullName = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("Email");
const message = document.getElementById("Message");


function sendEmail() {
const bodyMessage = 'Nom: ${fullName.value}<br> Email: ${email: $email.value}<br> Message: ${message.value}';

    Email.send({
        Host: "smtp.elasticemail.com",
        Username : "joackimmaka2001.16@gmail.com",
        Password : "61C1F2B1AB9508277BC2C7074CB513FB0730",
        To : 'joackimmaka2001.16@gmail.com',
        From : "joackimmaka2001.16@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
            message => {
                if (message === 'OK') {
                    Swal.fire({
                        title: "Envoyer",
                        text: "Votre message a été envoyer",
                        icon: "success"
                    });
                }
            }
        );
    }

   

    function checkInputs() {
        const items = document.querySelectorAll(".item");

        for (const item of items) {
            if (item.value == "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
            if (items[1].value != "") {
                checkEmail();
            }
            items[1].addEventListener("keyup", () => {
                checkEmail();
             });   
            item.addEventListener("keyup", () => {
                if (item.value != "") {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                }
                else {
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }
            })
        }
    } 
    
function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value !="") {
            errorTxtEmail.innerText = "Adresse email invalide";
        }
        else {
            errorTxtEmail.innerText = "Veuillez entrer une adresse email";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}   

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();

        if ( !fullName.classList.contains("error") && !subject.classList.contains("error") && !fullName.classList.contains("error") 
        && !email.classList.contains("error") && !message.classList.contains("error")) 
    {
        sendEmail(); 
    }
        
    });

    
            /*=============== Graphique ===============*/ 


    const barCanvas = document.getElementById
    ("barCanvas");

    const barChart = new CharacterData(barCanvas, {
        type: "bar",
        data: {
            labels: ["Design UX/UI", "Design graphique", "Front-end", "Back-End"],
            datasets: [{
                data: [92,86,80,50],
                backgroundcolor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)"
                ]
            }]  
        },
        options: {
            scales: {
                y: {
                    suggestedMax: 100,
                    ticks: {
                        font: {
                            size: 18
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 18
                        }
                    }
                }
            }
        }
    })