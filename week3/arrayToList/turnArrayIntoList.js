var newH1 = document.createElement('h1')
newH1.textContent = 'Hello World!'
document.body.append(newH1)
var newH1 = document.createElement('h1')
newH1.textContent = 'Hello World!'
document.body.append(newH1)
var newH1 = document.createElement('h1')
newH1.textContent = 'Hello World!'
document.body.append(newH1)
var newH1 = document.createElement('h1')
newH1.textContent = 'Hello World!'
document.body.append(newH1)
var newH1 = document.createElement('h1')
newH1.textContent = 'Hello World!'
document.body.append(newH1)
var newH1 = document.createElement('h1')
newH1.textContent = 'Hello World!'
document.body.append(newH1)
var newH1 = document.createElement('h1')
newH1.textContent = 'Hello World!'
document.body.append(newH1)
var newH1 = document.createElement('h1')
newH1.textContent = 'Hello World!'
document.body.append(newH1)
var newH1 = document.createElement('h1')
newH1.textContent = 'Hello World!'
document.body.append(newH1)
var newH1 = document.createElement('h1')
newH1.textContent = 'Hello World!'
document.body.append(newH1)

var newH = document.querySelectorAll('h1');
for (var i= 0; i < newH.length; i++) {
    newH[i].style.color = 'white';
    newH[i].style.border = 'double';
    newH[i].style.borderColor = 'black';
    newH[i].style.backgroundColor = 'palegreen'
}


var names = ['Steve', 'Larry', 'Joe', 'Shirley', 'Steph', 'Nate', 'Rick', 'Emily'];
var lable = document.getElementById("namesArray")

for (var i = 0; i < names.length; i++) {
    lable.innerHTML += '<li>' + names[i] + '</li>'
}
