const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function showDropdown(dropdown) {
    hideDropdowns();
    if (window.innerWidth > 750) {
        $('#' + dropdown).toggle();
    } else {
        $('.' + dropdown + '-hidden').toggle();
    }
}

function hideDropdowns() {
    $(".dropdown-content").each(function() {
        $(this).hide();
    });
}

$(window).click(function(e) {
    if (e.target.matches('.nav-link') || (
        e.target.parentElement && 
        e.target.parentElement.matches('.dropdown-content')
    )) {
        
    } else {
        hideDropdowns();
    }
  });

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar")[0];

// Get the offset position of the navbar
var sticky = 15;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}