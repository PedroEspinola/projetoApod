let botao = document.querySelector("#button")
let data  = document.querySelector("#data")

botao.addEventListener("click", function(event){
    let dataEscolhida = data.value
    requisicao(dataEscolhida)

})

