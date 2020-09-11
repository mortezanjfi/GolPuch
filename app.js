var ms = document.getElementById('ms'),
    start = document.getElementById('start'),
    scoreBoard = document.getElementById('score'),
    showName = document.querySelector('span'),
    buttons = document.getElementById('div').querySelectorAll('img');

var nickName,
    x,
    disable = true,
    score = getCookie('score') || 0;

if (!localStorage.getItem('nickName')){
    name = prompt('Enter your name', 'morteza najafi')
    localStorage.setItem('nickName', name)
}

showName.innerText = name;

start.addEventListener('click', event => {
    disable = false;
    console.log(disable)
    play()
    console.log('played')
})

function play() {
    x = randomNumber();
    
    buttons.forEach(item => {
        item.removeAttribute('myId');
        item.removeEventListener('click', onclick);
        item.src = './0.png'
        ms.innerText = 'choose a hand'
    })
    
    buttons.forEach((item, index) =>{
        item.setAttribute('myId', index);
        item.addEventListener('click', onclick);
        
    })  
}

function onclick(event){
    if((event.target.getAttribute('myId') == x) && (disable == false)){
        ms.innerText = 'Gol!'
        event.target.src = './1.png'
        score++;
        document.cookie = "score=" + score + ";";
        scoreBoard.innerText = score;
        disable = true;
    } else {
        ms.innerText = 'puch!'
    }
}
function randomNumber(){
    return Math.floor(Math.random()*buttons.length);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}