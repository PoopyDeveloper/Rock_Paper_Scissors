const count = document.getElementById('count');
const ai = document.getElementById('ai');
const me = document.getElementById('me');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissor');
const lai = document.querySelector('.lai');
const lme = document.querySelector('.lme');


async function inputHandler (event) {
    const choices = ['rock', 'paper', 'scissor'];
    const aiChoice = choices[Math.floor(Math.random() * choices.length)];
    const userChoice = event.target.id;
    let counter = 0;

    if(counter < 3){
        me.src = 'img/rock.png';
        ai.src = 'img/rock.png';
        me.classList.add('show');
        ai.classList.add('show');
    }

    for(let i = 1; i <= 3; i++) {
        count.innerText = i;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        counter++;
    }

    if(counter === 3) {
        me.classList.remove('show');
        ai.classList.remove('show');
        me.src = `img/${userChoice}.png`;
        ai.src = `img/${aiChoice}.png`;
        count.innerText = '';
    }
}
rock.addEventListener('click', inputHandler);
paper.addEventListener('click', inputHandler);
scissors.addEventListener('click', inputHandler);