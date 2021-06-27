// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

const button1 = document.getElementById('button')
button1.addEventListener('click', handleButtonClick1)

function handleButtonClick1(event){
    event.preventDefault()
    var text1 = document.getElementById('first-name').value
    var text2 = document.getElementById('last-name').value 
    var text3 = Number(document.getElementById('age').value)
    var text4 = document.submitme.radio.value
    var text5 = document.getElementsByClassName('groups')
    var text6 = ' ';
    var text7 = document.getElementById('date').value
    
    var i = 0;
    for (i; i < text5.length; i++){
        if (text5[i].checked) {
            text6 += (text5[i].value) + ', '
        }
}
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('date').value = '';

    alert('First name: ' + text1 + '\nLast Name: ' + text2 + '\nAge: ' + text3 + '\nToday\s Date: ' + text7 + '\nThis is a radio button: ' + text4 + '\nThis is a check list: ' + text6)
}
