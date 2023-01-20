const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

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
    $('#' + dropdown).toggle();
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
      console.log('matched');
    } else {
        hideDropdowns();
    }
  });