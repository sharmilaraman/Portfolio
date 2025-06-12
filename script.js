// Scripts
document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadCV");

  downloadBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    const fileUrl = "assets/SHARMILA R - BE-ECE-FRONTEND DEVELOPER-2024(2).pdf"; // Adjust path as needed

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "SHARMILA R - BE-ECE-FRONTEND DEVELOPER-2024.pdf"; // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

window.addEventListener('DOMContentLoaded', event => {
     // Navbar shrink function
     var navbarShrink = function () {
         const navbarCollapsible = document.body.querySelector('#mainNav');
         if (!navbarCollapsible) {
             return;
         }
         if (window.scrollY === 0) {
             navbarCollapsible.classList.remove('navbar-shrink')
         } else {
             navbarCollapsible.classList.add('navbar-shrink')
         }
 
     };
 
     // Shrink the navbar 
     navbarShrink();
 
     // Shrink the navbar when page is scrolled
     document.addEventListener('scroll', navbarShrink);
 
     // Activate Bootstrap scrollspy on the main nav element
     const mainNav = document.body.querySelector('#mainNav');
     if (mainNav) {
         new bootstrap.ScrollSpy(document.body, {
             target: '#mainNav',
             rootMargin: '0px 0px -40%',
         });
     };
 
     // Collapse responsive navbar when toggler is visible
     const navbarToggler = document.body.querySelector('.navbar-toggler');
     const responsiveNavItems = [].slice.call(
         document.querySelectorAll('#navbarResponsive .nav-link')
     );
     responsiveNavItems.map(function (responsiveNavItem) {
         responsiveNavItem.addEventListener('click', () => {
             if (window.getComputedStyle(navbarToggler).display !== 'none') {
                 navbarToggler.click();
             }
         });
     });
 
 });
