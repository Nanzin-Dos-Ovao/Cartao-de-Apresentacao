  const botaoMensagem = document.querySelector('#botaoMensagem')
    const botaoOcultar = document.querySelector('#botaoOcultar')
    const nome = document.querySelector('#nome')
    const mensagem = document.querySelector('#mensagem')

    botaoMensagem.addEventListener("click", function() {
        mensagem.textContent = `Prazer em conhecer você, ${nome.textContent}`;
 });

 botaoOcultar.addEventListener("click", function() {
        mensagem.textContent = "";
 });