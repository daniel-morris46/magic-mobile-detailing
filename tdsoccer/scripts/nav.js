const hamburgerScreenWidth = 1300;

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
    if (window.innerWidth > hamburgerScreenWidth) {
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


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
window.onscroll = () => {
  screenChange();
};

window.onresize = () => {
    screenChange();
};

screenChange();

function screenChange () {
    let pageHasScrolledDown15 = window.pageYOffset >= 15;
    let pageHasScrolledDown100 = window.pageYOffset >= 100;
    let onHomePage = window.location.pathname == "/tdsoccer/home.html" || window.location.pathname == "/tdsoccer/home";
    let isMobileView = window.innerWidth < hamburgerScreenWidth;
    let isRounded = !pageHasScrolledDown15;
    let isCircle = isMobileView && !pageHasScrolledDown100;
    
    var pageHeader = document.getElementById("page-header");
    if (isRounded) {
        navbar.classList.add("rounded");
        navbar.classList.remove("rectangle");
        navbar.classList.remove("circle");
    }
    if (isCircle) {
        navbar.classList.remove("rounded");
        navbar.classList.remove("rectangle");
        navbar.classList.add("circle");
    }

    if (isMobileView) {
        pageHeader && pageHeader.classList.add("mobile-page-header");

        $(".left-items").each(function() {
            $(this).hide();
        });
        $(".logo-nav-item").each(function() {
            $(this).hide();
        });
        
        $(".right-items").each(function() {
            $(this).hide();
        });
        $(".mobile-items").each(function() {
            $(this).show();
        });
    } else {
        pageHeader && pageHeader.classList.remove("mobile-page-header");

        $(".left-items").each(function() {
            $(this).show();
        });
        $(".logo-nav-item").each(function() {
            $(this).show();
        });
        
        $(".right-items").each(function() {
            $(this).show();
        });
        $(".mobile-items").each(function() {
            $(this).hide();
        });
    }

    if (isCircle) {
        $("#nav-logo").hide();
    } else {
        $("#nav-logo").show();
    }

    if (onHomePage && isMobileView) {
        $("#magic-logo").show();
    } else {
        $("#magic-logo").hide();
    }

    // if (onHomePage) {
    //     if (isMobileView) {
    //         $("#primary-header-title").removeClass("large-primary-header-title");
    //         $("#primary-header-title").addClass("small-primary-header-title");

    //         $("#page-header").addClass("mobile-home-page-header");

    //         $("#primary-header-title").text("TDsoccer");
    //         $("#secondary-header-title").text("Futsal Academy");
    //     } else {
    //         $("#primary-header-title").removeClass("small-primary-header-title");
    //         $("#primary-header-title").addClass("large-primary-header-title");

    //         $("#page-header").removeClass("mobile-home-page-header");

    //         $("#primary-header-title").text("TDsoccer");
    //         $("#secondary-header-title").text("Futsal Academy");
    //     }
    // } else {
    //     $("#primary-header-title").removeClass("small-primary-header-title");
    //     $("#primary-header-title").addClass("large-primary-header-title");
    // }
};