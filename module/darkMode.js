//---initDarkMode all session-----------------------------------------------------------------
export default function initDarkMode() {
    const bntAcessibilidade = document.querySelector(".acessibilidade");
    const body = document.body;
  
    function darkMode() {
      body.classList.toggle("dark-mode");
    }
  
    bntAcessibilidade.addEventListener("click", darkMode);
  }
//   initDarkMode()