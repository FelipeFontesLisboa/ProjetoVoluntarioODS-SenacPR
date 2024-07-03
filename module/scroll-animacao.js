//Animação ao scroll  section ------------------------------------------------------

export default function initAnimationScrrol() {
    const sections = document.querySelectorAll(".js-scroll");
    const windowMedate = window.innerHeight * 0.6; 
    if (sections.length) {
      function animationEffecScroll() {
        sections.forEach((section) => {
          
          const sectionTop = section.getBoundingClientRect().top; 
          const isSectionVisible = sectionTop - windowMedate < 0; 
  
          if (isSectionVisible)
            section.classList.add("ativo"); 
          else section.classList.remove("ativo"); 
        });
      }
      animationEffecScroll(); 
  
      window.addEventListener("scroll", animationEffecScroll);
    }
  }
//   initAnimationScrrol(); 