const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const relogio = document.querySelector('.relogio')

let s = 0
let timer

document.addEventListener('click' , (evento)=>{
    const elemento = evento.target;

    if(elemento.classList.contains('zerar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        s = 0
    }
    else if(elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciarTimer()
    }
    else if(elemento.classList.contains('pausar')){
        clearInterval(timer)
        relogio.classList.add('pausado')
    }
})

function criaHoaDosSegundos(segundos){

    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR' , {
        hour12: false,
        timeZone: 'GMT'
    })
}

function iniciarTimer(){
    timer = setInterval(()=>{
        s ++
        relogio.innerHTML = criaHoaDosSegundos(s)
    },1000)
}