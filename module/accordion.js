//  Acordion -----------------------------------------------------------------------
export default function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");
    const ativaClass = "ativo"; 
    
    if (accordionList.length) {
      accordionList[0].classList.add(ativaClass);
      accordionList[0].nextElementSibling.classList.add(ativaClass);
  
      function activeAccordion() {
        this.classList.toggle(ativaClass); 
        this.nextElementSibling.classList.toggle(ativaClass); 
      }
      accordionList.forEach((item) => {
        item.addEventListener("click", activeAccordion);
     
      });
    }
  }
//   initAccordion();
