let valor1 = document.getElementById('TimerValor1')
let valor2 = document.getElementById('TimerValor2')
let valor3 = document.getElementById('TimerValor3')
let divTimerPrincipal = document.getElementById('timerSessao1')
let divExibidorInput = document.getElementById('divExibidorTimerInput')
let divExibiriReal = document.getElementById('divExibidorReal')
let timerExibirReal = document.getElementById('timerExibirReal')
let btnTimerIniciar = document.getElementById('btnTimerIniciar')
let divBotoesTimer1 = document.getElementById('divBotoesTimer1')
let divBotoesTimer2 = document.getElementById('divBotoesTimer2')
let divInput = document.getElementById('divInput')

let btnTimerPausar = document.createElement('button')
btnTimerPausar.setAttribute('class', 'btn')
btnTimerPausar.setAttribute('id', 'btnPausar')
btnTimerPausar.innerText = 'Pausar'
btnTimerPausar.addEventListener('click', pausarTimer)
/*  */
let btnTimerRetorna = document.createElement('button')
btnTimerRetorna.setAttribute('class', 'btn')
btnTimerRetorna.setAttribute('id', 'btnRetorna')
btnTimerRetorna.innerText = 'Retorna'
btnTimerRetorna.addEventListener('click', retornaTimer)
/*  */
let btnTimerExcluir = document.createElement('button')
btnTimerExcluir.setAttribute('class', 'btn')
btnTimerExcluir.setAttribute('id', 'btnExcluir')
btnTimerExcluir.innerText = 'Exclui'
btnTimerExcluir.addEventListener('click', excluirTimer)

divExibiriReal.removeChild(timerExibirReal)

let horasTimer 
let minutosTimer 
let segundosTimer
let tempo
let TimerStyle
let msg = true

function iniciarTimer(){

    
if(valor1.value != '' && valor1.value >= 0){
    horasTimer = valor1.value
}else{
    horasTimer=0
}
if(valor2.value != '' && valor2.value >= 0){
    minutosTimer = valor2.value
}else{
    minutosTimer=0
}
if(valor3.value != '' && valor3.value > 0){
    segundosTimer = valor3.value
    msg = true
}else if(valor2.value != '' && valor2.value >= 0){
    msg = true
    segundosTimer = 0
}else{
    segundosTimer = 0
    msg = false
}
if(msg == false){
    window.alert('Digite algum valor para iniciar o timer')
}
    
console.log(valor1.value)
console.log(valor2.value)
console.log(valor3.value)
console.log(msg)
if(minutosTimer > 9)
           {
            timerExibirReal.innerText = `0${horasTimer} : ${minutosTimer} : ${segundosTimer}`
           }else{
            timerExibirReal.innerText = `0${horasTimer} : 0${minutosTimer} : ${segundosTimer}`
           }

if(msg != false){
   
divExibidorInput.removeChild(divInput)
divExibiriReal.appendChild(timerExibirReal)

divBotoesTimer1.removeChild(btnTimerIniciar)
divBotoesTimer1.appendChild(btnTimerPausar)
divBotoesTimer2.appendChild(btnTimerExcluir)
exibir = true
timerClock()
    
}

 
}
function pausarTimer(){
    clearTimeout(tempo)
    divBotoesTimer1.removeChild(btnTimerPausar)
    divBotoesTimer1.appendChild(btnTimerRetorna)
}
function retornaTimer(){
    divBotoesTimer1.removeChild(btnTimerRetorna)
    divBotoesTimer1.appendChild(btnTimerPausar)
    
    timerClock()
}
function excluirTimer(){
    //para a função setInterval que existe dentro da função timerClock
    clearTimeout(tempo) 
    //excluir a area de exibição do timer em tempo real 
    //adiciona a area aonde podemos adicionar novos valores 
    divExibiriReal.removeChild(timerExibirReal)

    divExibidorInput.appendChild(divInput)
    //exclui o botão excluir
    divBotoesTimer2.removeChild(btnTimerExcluir)
   /*  verifica se o conteudo do botão pausa existe na paginaa
    se existir retorna um valor diferente de null, porem caso nao exista volta null
    se exitir ele excluir caso nao exista nada ele entao exclui o botão returna porque 
    so pode existir uma por vez na pagia */
    console.log(document.getElementById('btnPausar'))
    if(document.getElementById('btnPausar') != null){
        divBotoesTimer1.removeChild(btnTimerPausar)
    }else{
        divBotoesTimer1.removeChild(btnTimerRetorna)
    }
    //zera todos valores das variaveis 
     horasTimer = 0
     minutosTimer = 0
     segundosTimer = 0
     divTimerPrincipal.setAttribute('class', 'timerSessao1')
     divBotoesTimer1.appendChild(btnTimerIniciar)
}
function timerClock(){ 
    tempo = setInterval(() => {
        if(segundosTimer > 0){
        segundosTimer = segundosTimer-1
        }
        if(segundosTimer == 0 && minutosTimer > 0){
            segundosTimer = 59
            minutosTimer = minutosTimer - 1
        }
        if(minutosTimer == 0 && horasTimer > 0){
            minutosTimer = 60
            horasTimer = horasTimer - 1
        }
        
        if(horasTimer == 0 && minutosTimer == 0 && segundosTimer == 0){
        clearTimeout(tempo)
        divExibiriReal.removeChild(timerExibirReal)

       divExibidorInput.appendChild(divInput)
        horasTimer = 0
        minutosTimer = 0
        segundosTimer = 0

        divBotoesTimer2.removeChild(btnTimerExcluir)
        /*  verifica se o conteudo do botão pausa existe na paginaa
         se existir retorna um valor diferente de null, porem caso nao exista volta null
         se exitir ele excluir caso nao exista nada ele entao exclui o botão returna porque 
         so pode existir uma por vez na pagia */
         console.log(document.getElementById('btnPausar'))
         if(document.getElementById('btnPausar') != null){
             divBotoesTimer1.removeChild(btnTimerPausar)
         }else{
             divBotoesTimer1.removeChild(btnTimerRetorna)
         }
        divBotoesTimer1.appendChild(btnTimerIniciar)

       
        }
        if(exibir){
           if(minutosTimer > 9)
           {
            timerExibirReal.innerText = `0${horasTimer} : ${minutosTimer} : ${segundosTimer}`
           }else{
            timerExibirReal.innerText = `0${horasTimer} : 0${minutosTimer} : ${segundosTimer}`
           }
            
        }
        if(horasTimer == 0 && minutosTimer == 0 && segundosTimer <= 20){
            testeBorda()
        
        }
        
        }
        , 1000)
}
function testeBorda(){
    let teste = segundosTimer%2
    console.log(teste)

    if(teste == 1){
        divTimerPrincipal.setAttribute('class', 'timerSessao1Final')
    }
     if(teste == 0 ){
        divTimerPrincipal.setAttribute('class', 'timerSessao1')
    }
  
}
