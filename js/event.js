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
