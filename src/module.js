
//Navegação por teb
export  function initTabNav() {
    const tabMenuAnimais = document.querySelectorAll(".js-tabmenu li"); 
    const tabContent = document.querySelectorAll(".js-tabcontent section"); 
    const activeClass = "ativo";
    
    if (tabMenuAnimais.length && tabContent.length) {
      tabContent[0].classList.add(activeClass); 
      
      function ativeTab(index) {
        tabContent.forEach((section) => {
          section.classList.remove(activeClass); 
        });
        tabContent[index].classList.add(activeClass); 
  
      }
      
      tabMenuAnimais.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => {
          ativeTab(index);
        });
      });
    }
  }
  initTabNav();

// Acordion -----------------------------------------------------------------------
export  function initAccordion() {
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
  initAccordion();

  
  //Animação ao scroll  section ------------------------------------------------------

export  function initAnimationScrrol() {
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
  initAnimationScrrol(); 

  
  //scrol suave link internos -----------------------------------------------------
export  function initScrollSuave() {
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
  initScrollSuave();

  //---initModal-----------------------------------------------------------------

export  function initModal() {
    const bntColaboradores = document.querySelector('.buttonColaboradores')
    const bntCloseModal = document.querySelector('.closeModal')
    const modal = document.querySelector('.modal')
    
    function showModal() {
       modal.classList.add('ativa')
    }
    function closedModal(){
      modal.classList.remove('ativa')
    }
    modal.addEventListener('click', ()=>{
      closedModal()
    })
    bntCloseModal.addEventListener('click', closedModal)
    bntColaboradores.addEventListener('click', showModal)
    }
    
    initModal()
  
// --------------------------------------------------


//  initMenuLateral----------------------------------------
  //  export  function initMenuHmburguer() {
  //     const buttonMenuLateral = document.querySelector(".buttonMenu-lateral");
  //     const menuLateral = document.querySelector(".menu-lateral");
  //     const buttonRemoveMenu = document.querySelector(".buttonRemoveMenu");
  //     const primeiraSection = document.querySelector(".animais")
    
  //     function showMenuLateral() {
  //       menuLateral.classList.toggle("ativo");
  //       buttonRemoveMenu.classList.toggle("ativo");
  //     }

  //     function showIconMenuLateral() {
  //       const sectionBottom = primeiraSection.getBoundingClientRect().top;
  //       const isPastContainer = sectionBottom <= -0;

  //       if (isPastContainer) {
  //         buttonMenuLateral.classList.add("ativo");
  //       } else {
  //         buttonMenuLateral.classList.remove("ativo");
  //       }

  //     }
  //     window.addEventListener('scroll', showIconMenuLateral)
  //     buttonRemoveMenu.addEventListener("click", showMenuLateral);
  //     buttonMenuLateral.addEventListener("click", showMenuLateral);
  //   }
  //   initMenuHmburguer();
  // // -----------------------------------------






// Recursos de acessibilidas -------------------------------------------------------
// export function initAcessibility() { 

//   const body = document.body
//   const accesibilidade = document.querySelector('.accesibilidade');

//   function darkness() {
//     body.classList.toggle('ativo');
//   }
//   accesibilidade.addEventListener('click', darkness)
// }
//   initAcessibility()


// document.addEventListener('DOMContentLoaded', function() {
//   const body = document.body;
//   const button = document.getElementById('acessibility-btn');

//   function toggleDarkMode() {
//     body.classList.toggle('ativo');
//   }

//   button.addEventListener('click', toggleDarkMode);
// });