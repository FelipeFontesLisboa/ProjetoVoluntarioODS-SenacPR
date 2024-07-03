//init modal
export default function initModal() {
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
    
    // initModal()