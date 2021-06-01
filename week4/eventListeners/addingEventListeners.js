window.addEventListener('load',() => {
    // handle load event
    //alert('Hello')
    document.getElementsByClassName('square')[0].style.backgroundColor = 'black';
});

document.getElementsByClassName('square')[0].addEventListener('mouseover',() => {
    // handle load event
    //alert('Hello')
    document.getElementsByClassName('square')[0].style.backgroundColor = 'green';
});

document.getElementsByClassName('square')[0].addEventListener('mousedown',() => {
    // handle load event
    //alert('Hello')
    document.getElementsByClassName('square')[0].style.backgroundColor = 'yellow';
});

document.getElementsByClassName('square')[0].addEventListener('mouseup',() => {
    // handle load event
    //alert('Hello')
    document.getElementsByClassName('square')[0].style.backgroundColor = 'blue';
});

document.getElementsByClassName('square')[0].addEventListener('dblclick',() => {
    // handle load event
    //alert('Hello')
    document.getElementsByClassName('square')[0].style.backgroundColor = 'red';
});

window.addEventListener('wheel',() => {
    // handle load event
    //alert('Hello')
    document.getElementsByClassName('square')[0].style.backgroundColor = 'purple';
});

//keypress
document.addEventListener("keypress", (event) => {
    if (event.key === 'b'){
   document.getElementsByClassName('square')[0].style.backgroundColor ='black'}
   else if (event.key === 'g'){
    document.getElementsByClassName('square')[0].style.backgroundColor ='green'}
    else if (event.key === 'y'){
        document.getElementsByClassName('square')[0].style.backgroundColor ='yellow'}
        else if (event.key === 't'){
            document.getElementsByClassName('square')[0].style.backgroundColor ='blue'}
            else if (event.key === 'r'){
                document.getElementsByClassName('square')[0].style.backgroundColor ='red'}
                else if (event.key === 'p'){
                    document.getElementsByClassName('square')[0].style.backgroundColor ='purple'}
});



var newH1 = document.createElement('h1')
newH1.textContent = 'Hello!'
document.body.append(newH1)

var newH1 = document.createElement('h1')
newH1.textContent = 'I am'
document.body.append(newH1)

var newH1 = document.createElement('h1')
newH1.textContent = 'Only here'
document.body.append(newH1)

var newH1 = document.createElement('h1')
newH1.textContent = 'To take'
document.body.append(newH1)

var newH1 = document.createElement('h1')
newH1.textContent = 'Up space'
document.body.append(newH1)

var newH1 = document.createElement('h1')
newH1.textContent = 'On this page!'
document.body.append(newH1)