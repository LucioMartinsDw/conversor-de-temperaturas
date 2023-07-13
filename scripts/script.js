  /* Todos os bloco de codigos estão perfeitamente funcionando */  
  const celsiusElem = document.querySelector("#celsius");
  const grau = document.querySelector("#grau");
  const convertBtn = document.querySelector("#converter-btn");
  const tempTipo = document.querySelector("#temp-tipo");
  
  
  // As variáveis celsiusElem, grau, convertBtn e tempTipo estão sendo
  // atribuídas aos elementos HTML correspondentes usando o método
  // document.querySelector(). Esses elementos são identificados
  // pelos seletores CSS "#celsius", "#grau", "#converter-btn"
  // e "#temp-tipo", respectivamente.
  
  window.addEventListener("load", () => {
    celsiusElem.innerHTML = "";
  });
  
  /*
    O ouvinte de evento "load" é adicionado
    à janela (window.addEventListener("load", () => {...})).
    Isso significa que o código dentro dessa função
    será executado quando a página for completamente carregada.
    Neste caso, o conteúdo do elemento HTML associado à variável
    celsiusElem é definido como uma string vazia, removendo 
    qualquer conteúdo pré-existente.  
    */
  
  convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
  });
  
  /*
    Outro ouvinte de evento "click"
    é adicionado ao elemento identificado 
    por convertBtn (convertBtn.addEventListener("click", (e) => {...})).
    Isso significa que o código dentro dessa função 
    será executado quando o botão for clicado.
    O evento e é passado como parâmetro para a função.
   */
  
  tempTipo.addEventListener("change", () => {
    convertToCelsius();
  });
  
  /* 
    Nesta versão atualizada, o evento change é adicionado 
    ao elemento tempTipo. Quando o usuário selecionar 
    uma opção diferente no menu suspenso,
    a função convertToCelsius() será chamada automaticamente para 
    realizar a conversão de temperatura e atualizar
    o elemento celsiusElem com o resultado. Além disso, o código dentro do ouvinte de evento load foi mantido para limpar o conteúdo inicial do elemento celsiusElem quando a página é carregada.
  */
  
  function convertToCelsius() {
    let inputValor = grau.value;
  
    /*
      A função convertToCelsius()
      é definida. Esta função é chamada quando o botão
      de conversão é clicado. Ela executa a conversão 
      da temperatura para Celsius, com base no 
      valor de entrada fornecido no elemento 
      identificado por grau, bem como no valor selecionado 
      no elemento identificado por tempTipo.
   */
  
    /* 
      O primeiro if converte Fahrenheit para 
      Celsius usando a fórmula (inputValor - 32) * 5 / 9.
    */
  
    if (tempTipo.value === "fahrenheit") {
      const FahrenheitToCelsius = ((inputValor - 32) * 5) / 9;
      celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    } else if (tempTipo.value === "kelvin") {
      const KelvinToCelsius = inputValor - 273.15;
      celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    }
  }
      /*
      O segundo if converte Kelvin para Celsius 
      usando a fórmula inputValor - 273.15.
      Esses blocos if são responsáveis por 
      realizar as conversões de temperatura específicas,
      dependendo da opção selecionada em tempTipo.
   */
