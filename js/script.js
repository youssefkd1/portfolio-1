const links = document.querySelectorAll(".nav-list li a");
var target = document.querySelector(".contact");
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Scroll Indicator JS
window.onscroll = () => scrollProgress();

function scrollProgress() {
  const currentState =
    document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (currentState / pageHeight) * 100;

  const progressBar = document.querySelector(".progress");

  progressBar.style.visibility = "visible";
  progressBar.style.width = scrollPercentage + "%";
}

// show /hide Scroll To Top Button
function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrollToTopBtn.classList.add("showBtn");
      } else {
        scrollToTopBtn.classList.remove("showBtn");
      }
    });
  }
  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  scrollToTopBtn.addEventListener("click", scrollToTop);
  let observer = new IntersectionObserver(callback);
  observer.observe(target);


  function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = easing(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easing(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 *t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var home = document.querySelector('#hero');
var main = document.querySelector('#main-project');
var contact = document.querySelector('#contact');
var about = document.querySelector('#about');
var skills = document.querySelector('#skills');

var homeLink = document.querySelector('a[href="#hero"]');
var mainLink = document.querySelector('a[href="#main-project"]');
var contactLink = document.querySelector('a[href="#contact"]');
var aboutLink = document.querySelector('a[href="#about"]');
var skillsLink = document.querySelector('a[href="#skills"]');

homeLink.addEventListener('click', function() {
    smoothScroll('#hero', 1000);
});

mainLink.addEventListener('click', function() {
    smoothScroll('#main-project', 1000);
});

contactLink.addEventListener('click', function() {
    smoothScroll('#contact', 1000);
});

aboutLink.addEventListener('click', function() {
  smoothScroll('#about', 1000);
});

skillsLink.addEventListener('click', function() {
  smoothScroll('#skills', 1000);
});

// jquery animations
$(document).ready(function(){
  $('.navbar').animate({'top':'40px'} , 500 , function(){
      $('.hero-image').animate({'top':'-150px'} , 500 , function(){
          $('.title').animate({'left':'0'} , 500 , function(){
              $('.logo1').animate({'right':'0'} , 500 , function(){
                  $('.notify').animate({'right':'10px'} , 500 , function(){
                      $(this).delay(2000).fadeOut(500);
                  })
              })
          })
      })
  })
})