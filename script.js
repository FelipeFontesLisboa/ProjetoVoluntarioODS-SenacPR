//? Navegação por Tabs
//criar uma relação entre um elemente e outro na pagina ao clicar por exemplo
//1 item para cada conteudo nesse caso a relação das imagen com o texto

//todo. izolando o codigo da navegação por tab com a func
function initTabNav() {
  const tabMenuAnimais = document.querySelectorAll(".js-tabmenu li"); //selecionar cada LI
  const tabContent = document.querySelectorAll(".js-tabcontent section"); //selecionar cada LI
  const activeClass = "ativo";
  //verificar se tem esses itens na tela
  if (tabMenuAnimais.length && tabContent.length) {
    tabContent[0].classList.add(activeClass); // para sempre inicial um texto ativado o primeiro

    //vou adicionar a clase conforme o index que for pasando como um array
    function ativeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass); // 2 apos troca  o index ele remove limpa o rasto ,removo na anterior
      });
      tabContent[index].classList.add(activeClass); // 1 func pasa por index e add clase ,  vai adicionar onde eu quero e removo na anterior
    }
    //atribuit evento a cada item com forhech relacionando item .  poderiamos comparar de outra forma rerificando clases se sao iguais
    //funcao para atribui cada index de cada img a cada sinopse
    tabMenuAnimais.forEach((itemMenu, index) => {
      //loop  cada itemMenu adicioanndo event click para cada index
      itemMenu.addEventListener("click", () => {
        ativeTab(index);
      });
    });
  }
}
initTabNav();
// -----------------------------------------------------------------------------
//?navegação acordion
//navegação acordion  entre faq title e paragrapho

/* izolar a funsao  o seu escopo*/
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const ativaClass = "ativo"; //para nao repetir de mais uma string em um codigo armazena ela

  /*verificar se todo esse conteudo existe em pagina com IF*/
  if (accordionList.length) {
    accordionList[0].classList.add(ativaClass);
    accordionList[0].nextElementSibling.classList.add(ativaClass);

    function activeAccordion() {
      /* console.log(event.currentTarget.nextElementSibling.classList.add('ativo'))
 esse exemplo tambem faz referencia ao item clicado aplicando a ele o evento assim como o this */
      this.classList.toggle(ativaClass); // proprio item tambme
      this.nextElementSibling.classList.toggle(ativaClass); // referencia ao proximo item next
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
/*------------------------------------------------------------------------*/

//? Animação Ao Scrolar a pagina
//agora pegamos tudo isso abaixo e izorar nessa func pra nao vazer o escopo
function initAnimationScrrol() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMedate = window.innerHeight * 0.6; //vamos armazenas 60% da dela um pouco mais que a petade para iniciar a animacao scrol / ou seja de qualquer tela

  //mais uma vez verificamos se essa sessao existe pra sim executar se nao nem faz nada
  if (sections.length) {
    function animationEffecScroll() {
      sections.forEach((section) => {
        //vamos percorer a section  com foreath
        const sectionTop = section.getBoundingClientRect().top; //vamos usar o metodo getBound que nos retorna todo o parmetro em relasao medidas e eixo e vamos pegar apenas o top que é oque queremos
        const isSectionVisible = sectionTop - windowMedate < 0; //verifica se é metade e negativo ou seja menos que zero

        //vamos faser uma verificasao se a ditancia do top  na scrolagem na pasou  negativando  para -0
        if (isSectionVisible)
          section.classList.add("ativo"); // true dese acresentando
        else section.classList.remove("ativo"); // sobe removendo
      });
    }
    animationEffecScroll(); // para ativa pelomenos uma vez quando iniciar o site

    window.addEventListener("scroll", animationEffecScroll);
  }
}
initAnimationScrrol(); // inicia
