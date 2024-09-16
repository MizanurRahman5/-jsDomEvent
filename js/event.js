// console.log('This is a Dom')
// option 2
function makYellow (){
    document.body.style.backgroundColor = 'yellow'
}

// option 3 

const makBlue = document.getElementById('makeBlue');
makBlue.onclick = makeBlue;


function makeBlue (){
    document.body.style.backgroundColor = 'blue'
}

// option 3 another option

const makePurple = document.getElementById('makePurple')
makePurple.onclick = function makePurple (){
    document.body.style.backgroundColor = 'purple';
}


const makeGreen = document.getElementById('make-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})


document.getElementById('evnt-listenar').addEventListener('click', function(){
    // console.log('clicked')
    const header = document.getElementById('header');
    header.innerText= 'This is worked';
})


document.getElementById('Update-btn').addEventListener('click', function(){
    // console.log('clicked')
    const inputField = document.getElementById('input-text');
    const inputText = inputField.value

    // console.log(inputText.value)
    const p = document.getElementById('chang-Text');
    p.innerText = inputText;
    inputField.value = ' ';



})