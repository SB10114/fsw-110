const button1 = document.getElementById('button1')
button1.addEventListener('click', handleButtonClick1)

function handleButtonClick1(event) {
    var text1 = document.getElementById('input1').value
    var text2 = document.getElementById('input2').value 
    var text3 = document.getElementById('input3').value
    var result = document.getElementsByClassName('outcome')[0]
    result.textContent = Number(text1) + Number(text2) + Number(text3)
    alert(text1 + text2 + text3)
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
}