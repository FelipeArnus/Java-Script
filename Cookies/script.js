let listaDados = [];

function Campos(campo1){//registra campo1
    this.campo1 = campo1;//altera naturesa da função
}

//disparar botão com DOM
const btnEnviar = document.querySelector('#btnSubmit')

//evento click
btnEnviar.addEventListener('click',()=>{
    const inputCampo1 = document.querySelector("#campo1");
    //instanciando o objeto(construtor)
    let info = new Campos(inputCampo1.value)
    listaDados.push(info)//coloca na lista
    localStorage.setItem("dados",JSON.stringify(listaDados))
})