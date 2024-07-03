//Navegação por teb
export default function initTabNav() {
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
//   initTabNav();