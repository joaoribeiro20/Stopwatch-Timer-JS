let btnInicarCronometro = document.getElementById('BtnIniciarBtnIniciar')
let cronometroExibir = document.getElementById('cronometroExibir')
let divBotoesCentral = document.getElementById('divBotoesCentral')
let divBotoes1 = document.getElementById('divBotoes1')
let divBotoes2 = document.getElementById('divBotoes2')
let cronometroSessao = document.getElementById('cronometroSessao')

//criação e configuraçoes do botão PARAR, porem nao adicionei ele na tela ainda, pode perceber que nao tem o appendChild
let btnPararCronometro = document.createElement('button')
btnPararCronometro.setAttribute('class', 'btn')
btnPararCronometro.setAttribute('id', 'btnParar')
btnPararCronometro.innerText = 'Parar'
btnPararCronometro.addEventListener('click', stopC)
//criação e configuraçoes do botão REINICIAR, porem nao adicionei ele na tela ainda, pode perceber que nao tem o appendChild
let btnReiniciarCronometro = document.createElement('button')
btnReiniciarCronometro.setAttribute('class', 'btn')
btnReiniciarCronometro.innerText = 'Reiniciar'
btnReiniciarCronometro.addEventListener('click', reiniciarC)
//criação e configuraçoes do botão RETOMAR, porem nao adicionei ele na tela ainda, pode perceber que nao tem o appendChild
let btnRetomarCronometro = document.createElement('button')
btnRetomarCronometro.setAttribute('class', 'btn')
btnRetomarCronometro.setAttribute('id', 'btnRetomar')
btnRetomarCronometro.innerText = 'Retomar'
btnRetomarCronometro.addEventListener('click', voltarC)

let segundos = 0
let minutos = 0
let horas = 0
let minutosTXT = "00"
let horasTXT = "00"
let stop1 = 0
let iniciarC

// essa função faz voltar ao inicio com cronometro parado 
function reiniciarC() {
    clearTimeout(iniciarC)
    segundos = 0
    minutos = 0
    horas = 0
    minutosTXT = "00"
    horasTXT = "00"
    divBotoes2.removeChild(btnReiniciarCronometro)
    console.log(document.getElementById("btnParar"))
    console.log(document.getElementById("btnRetomar"))
    if(document.getElementById("btnParar") != null){
         divBotoes1.removeChild(btnPararCronometro)
    }else if(document.getElementById("btnRetomar") != null){
        divBotoes1.removeChild(btnRetomarCronometro)
    }
    divBotoes1.appendChild(btnInicarCronometro)
    cronometroExibir.innerText = `00 : 00 : 00`
}
//para o cronometro 
function stopC() {
    console.log("cronometro parou")
    clearTimeout(iniciarC)
    divBotoes1.removeChild(btnPararCronometro)
    divBotoes1.appendChild(btnRetomarCronometro)

}
//apos para o cronometro essa função faz ele voltar aonde parou 
function voltarC() {
    divBotoes1.removeChild(btnRetomarCronometro)
    divBotoes1.appendChild(btnPararCronometro)
    clock()

}
//iniciar o cronometro
function iniciarCronometro() {
    divBotoes1.removeChild(btnInicarCronometro)
    divBotoes1.appendChild(btnPararCronometro)
    divBotoes2.appendChild(btnReiniciarCronometro)
    clock()
}
function clock(){
   
    iniciarC = setInterval(() => {
        segundos = segundos + 1
        if (segundos >= 60) {
            segundos = 0
            minutos = minutos + 1
            if(minutos <=9 ){
                minutosTXT = `0${minutos}`
            }else{
                minutosTXT = `${minutos}`
            }
        }
        if (minutos >= 60) {
            minutos = 0
            horas = horas + 1
            if(horas <=9 ){
                horasTXT = `0${horas}`
            }else{
                horasTXT = `${horas}`
            }
        }
        if(segundos  <= 9){
            cronometroExibir.innerText = `${horasTXT} : ${minutosTXT} : 0${segundos}` 
        }else{
            cronometroExibir.innerText = `${horasTXT} : ${minutosTXT} : ${segundos}` 
        }
                  
    }
        , )
}
