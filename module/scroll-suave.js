  //scrol suave link internos -----------------------------------------------------

export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-meu a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelectorAll(href);
  
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    linksInternos.forEach((item) => {
     
      item.addEventListener("click", scrollToSection);
    });
  }
//   initScrollSuave();