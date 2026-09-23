window.addEventListener('load', () => {
  // Fade in on page load
  document.body.classList.add('loaded');
});

// Intercept link clicks for fade-out transition
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  // Ensure it's a valid link navigating within the same site
  if (
    link &&
    link.href &&
    link.target !== '_blank' &&
    !link.getAttribute('href').startsWith('#') &&
    link.origin === window.location.origin
  ) {
    e.preventDefault(); // Stop instant navigation
    const targetUrl = link.href;

    // Trigger fade-out state
    document.body.classList.remove('loaded');

    // Wait for CSS transition duration (e.g., 500ms) before navigating
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500);
  }
});

// Reset body state if user navigates back using browser Back/Forward buttons
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    document.body.classList.add('loaded');
  }
});


// Source - https://stackoverflow.com/a/67286780
// Posted by connexo, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-23, License - CC BY-SA 4.0

// colors.module.js
//window.projectNamespace = window.projectNamespace || {};
//projectNamespace.colors = window.projectNamespace.colors || {};
//projectNamespace.colors.state = true;
//
//var r = document.querySelector('styles.css:root');
//var rs = getComputedStyle(r);
//
//  function myFunction_set() {
//      if (rs.getPropertyValue('--primary-bg-color') === "black") {
//        r.style.setProperty('--primary-bg-color', '#ffe100');
//        r.style.setProperty('--primary-color', 'black');
//        document.getElementById("email").src="socials/mail-b.png";
//        document.getElementById("insta").src="socials/insta-b.png";
//        document.getElementById("personal").src="socials/website-logo-b.png";
//        document.getElementById("logo").src="logo-b.png";
//        document.getElementById("light-dark").textContent="Dark Mode";
//        projectNamespace.colors.state = false;
//      } else {
//        r.style.setProperty('--primary-bg-color', 'black');
//        r.style.setProperty('--primary-color', '#ffe100');
//        document.getElementById("email").src="socials/mail.png";
//        document.getElementById("insta").src="socials/insta.png";
//        document.getElementById("personal").src="socials/website-logo.png";
//        document.getElementById("logo").src="logo.png";
//        document.getElementById("light-dark").textContent="Light Mode";
//        projectNamespace.colors.state = true;
//      }
//  }
