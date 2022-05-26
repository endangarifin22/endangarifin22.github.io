/* ========================================================
Sticky Navbar Menu
=========================================================== */

window.onscroll = function() {
	var navbarMenu = document.querySelector(".header-top");
	var sticky = navbarMenu.offsetTop;

	if (window.pageYOffset > sticky) {
		navbarMenu.classList.add("sticky");
	} else {
		navbarMenu.classList.remove("sticky");
	}
}

//Navbar Toggler
let navbarTogglerMain = document.querySelector('.navbar-toggler');
      navbarTogglerMain.addEventListener('click', function() {
          navbarTogglerMain.classList.toggle("active");

      });
      
      
    
 $('#selectlang').on('click', function(){
  const idLang = $('#language').val();

var language = idLang;
let aboutMeContent = aboutEn();
let heroContent = heroEn();
let skillContent = skillEn();
let galeryContent = galeryEn();
let contactContent = contactEn();
switch(language) {
  case 'en':
    aboutMeContent = aboutEn();
    break;
  case 'ina':
    aboutMeContent = aboutIna();
    heroContent = heroIna();
    skillContent = skillIna();
    galeryContent = galeryIna();
    contactContent = contactIna();
    break;
  default:
    aboutMeContent = aboutMe();
}
//Hero
 $('#hero-title').html(heroContent['title']);
 $('#hero-name').html(heroContent['nane']);
 $('#hero-description').html(heroContent['description']);
 $('#hero-button').html(heroContent['button']);
 
 //About Me
 $('#about-me-title').html(aboutMeContent['title']);
 $('#about-me-content').html(aboutMeContent['content']);
 $('#about-me-name').html(aboutMeContent['name']);
 $('#about-me-age').html(aboutMeContent['age']);
 $('#about-me-address').html(aboutMeContent['address']);
 $('#about-me-current-address').html(aboutMeContent['address-current']);
 $('#about-me-profession').html(aboutMeContent['profession']);
 $('#about-me-profession-content').html(aboutMeContent['profession-content']);
 $('#about-me-skill').html(aboutMeContent['skill']);
 $('#about-me-skill-content').html(aboutMeContent['skill-content']);
 $('#about-me-experience').html(aboutMeContent['experience']);
 $('#about-me-experience-content').html(aboutMeContent['experience-content']);
 $('#about-me-dream').html(aboutMeContent['dream']);
 $('#about-me-dream-content').html(aboutMeContent['dream-content']);
 
 //skills
 $('#skill-title').html(skillContent['title']);
 $('#skill-name-1').html(skillContent['name-1']);
 $('#skill-description-1').html(skillContent['description-1']);
 $('#skill-name-2').html(skillContent['name-2']);
 $('#skill-description-2').html(skillContent['description-2']);
 $('#skill-name-3').html(skillContent['name-3']);
 $('#skill-description-3').html(skillContent['description-3']);

 //Galery
 $('#galery-title').html(galeryContent['title']);
 
 //Contact
 $('#contact-title').html(contactContent['title']);
 $('#contact-name').html(contactContent['name']);
 $('#contact-email').html(contactContent['email']);
 $('#contact-message').html(contactContent['message']);
 $('#contact-button').html(contactContent['button']);
 $('#contact-sosmed').html(contactContent['sosmed']);
 
 });

/* ---- particles.js config ---- */

particlesJS("particle-container", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "random"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});