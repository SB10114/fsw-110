var newH2 = document.createElement('h2')
newH2.textContent = 'A minor heading 1'
document.body.append(newH2)
var newH2 = document.createElement('h2')
newH2.textContent = 'A minor heading 2'
document.body.append(newH2)
var newH2 = document.createElement('h2')
newH2.textContent = 'A minor heading 3'
document.body.append(newH2)
var newH2 = document.createElement('h2')
newH2.textContent = 'A minor heading 4'
document.body.append(newH2)
var newH2 = document.createElement('h2')
newH2.textContent = 'A minor heading 5'
document.body.append(newH2)

let div = document.querySelector('#content');
div.classList.add('border')
console.log(div.className)

var newH = document.querySelectorAll('h2');
for (var i= 0; i < newH.length; i++) {
    newH[i].style.fontSize = '20px';
    newH[i].style.fontWeight = 'lighter';
    newH[i].style.fontFamily = 'sansSerif';
    newH[i].style.color = 'cornflowerblue';
}