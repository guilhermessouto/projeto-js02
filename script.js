let score = 0

function answer(){
    document.getElementById('main').classList.add('correct')

    const answer1 = document.getElementById('answer1')
    const answer4 = document.getElementById('answer4')

    if(answer1.checked){
        score = score + 10
    }

    if(answer4.checked){
       score = score + 10
    }

    document.querySelector('button').style = 'display: none'

    document.getElementById('resposta').style = 'display: inline-block'
    resposta.innerHTML = `Você pontuou ${score} pontos.`
}