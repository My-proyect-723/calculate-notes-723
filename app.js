const username = document.getElementById('name')
const data1 = document.getElementById('nota1')
const data2 = document.getElementById('nota2')
const data3 = document.getElementById('nota3')
const calculate = document.getElementById('btn-calculate')
const predict = document.getElementById('predictNote')
const answer = document.getElementById('resulta')

calculate.addEventListener('click', calculateNote)

function calculateNote (event){

    event.preventDefault();

    let user = username.value
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let note3 = Number(data3.value)
    let result = ((note1*0.3)+(note2*0.3)+(note3*0.4)).toFixed(2)

    if (result < 3.5){
        answer.textContent = `Sr(a) ${user}, su nota es de ${result}, perdio la materia`
        answer.style.color = 'red'
    }
    else if(result >= 3.5 && result <= 4.5){
        answer.textContent = `Sr(a) ${user}, su nota es de ${result}, aprobo la materia`
        answer.style.color = 'orange'
    }
    else if(result > 4.5){
        answer.textContent = `Sr(a) ${user}, su nota es de ${result}, Felicidades paso la materia`
        answer.style.color = 'green'
    }

}

predict.addEventListener('click', predictNote)

function predictNote(event){

    event.preventDefault();

    let user = username.value
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let min = 3.5
    let minnote3 = ((min-(note1*0.3)-(note2*0.3))/0.4).toFixed(2)


    answer.textContent= `Sr(a) ${user}, la nota minima que necesita para pasar es ${minnote3}`

    /**
     * si para presdecir eso que dtos tenemos
     * 
     * DATOS
     * 1. Lo que pongan en nota 1 y 2
     * 2. la operacion base para calcular es (note1*0.3)+(note2*0.3)+(note3*0.4)
     * 3. la minima para aprobar es de 3.5
     * 
     * Despejar 
     * 
     * (note1*0.3)+(note2*0.3)+(note3*0.4) = 3.5
     * (note3*0.4)= 3.5 - (note1*0.3)-(note2*0.3)
     * note3=(3.5 - (note1*0.3) - (note2*0.3))/0.4
     */
}