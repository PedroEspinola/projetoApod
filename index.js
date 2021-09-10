let botao = document.querySelector("#enviar")
let data  = document.querySelector("#data")

botao.addEventListener("click", function(){
    let dataEscolhida = data.value
    requisicao(dataEscolhida)
})

function requisicao(dataEscolhida){
    let titulo = document.querySelector("#titulo")
    let data = document.querySelector("#dataEscolhida")
    let fotoDoDia = document.querySelector("#imagemDoDia")
    let descricao = document.querySelector("#descricao")

    let request = new XMLHttpRequest

    request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=gb8N4ADtCncjCg2CPLeJY1nqhQZ0Tch7jbP4T1Yy&date=${dataEscolhida}`)
    request.send()

    request.addEventListener("load", (event)=>{
    if (request.status==200){
        let dados = JSON.parse(request.response)
        titulo.innerText = dados.title
        data.innerText=dados.date
        descricao.innerText = dados.explanation
        fotoDoDia.src = dados.hdurl

    }
})
}














// $('.button').on('click', async function (event) {
//     event.preventDefault();
//     $('#main-texto').css("display", "none");
//     let inputDate = $('#dia').val();
//     const url = `https://api.nasa.gov/planetary/apod?api_key=gb8N4ADtCncjCg2CPLeJY1nqhQZ0Tch7jbP4T1Yy&date=${inputDate}`
//     let apiResponse = await fetch(url).then(response => response.json());
//     $('body').css("background-image", `url(${apiResponse.url})`);
//     $('body').css("background-repeat", "no-repeat");
//     $('body').css("background-size", "cover");
//     $('#texto-nasa').css('display', 'block');
//     $('#nasa-titulo').html(`${apiResponse.title}`);
//     $('#nasa-texto').html(`(${apiResponse.explanation})`);
// });
