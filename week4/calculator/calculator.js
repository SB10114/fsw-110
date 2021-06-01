const newH1 = document.getElementById('h1')
newH1.textContent ='This is a simple calculator'
newH1.style.fontFamily = 'cursive';

const button1 = document.getElementById('button1')
button1.addEventListener('click', handleButtonClick1)

function handleButtonClick1(event) {
    var num1 = Number(document.getElementById('add1').value )
    var num2 = Number(document.getElementById('add2').value )
    var result = document.getElementsByClassName('outcome')[0]
    result.textContent = num1 + num2
    console.log(num1 ,num2 , result)

}

const button2 = document.getElementById('button2')
button2.addEventListener('click', handleButtonClick2)

function handleButtonClick2(event) {
    var num1 = Number(document.getElementById('subt1').value )
    var num2 = Number(document.getElementById('subt2').value )
    var result = document.getElementsByClassName('outcome')[1]
    result.textContent = num1 - num2
}

const button3 = document.getElementById('button3')
button3.addEventListener('click', handleButtonClick3)

function handleButtonClick3(event) {
    var num1 = Number(document.getElementById('mult1').value )
    var num2 = Number(document.getElementById('mult2').value )
    var result = document.getElementsByClassName('outcome')[2]
    result.textContent = num1 * num2
}