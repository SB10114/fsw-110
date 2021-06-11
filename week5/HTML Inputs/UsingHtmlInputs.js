const button1 = document.getElementById('button1')
button1.addEventListener('click', handleButtonClick1)


function handleButtonClick1(event){
    var text1 = document.getElementById('fname').value
    var text2 = document.getElementById('lname').value 
    var text3 = Number(document.getElementById('age').value)
    var text4 = document.form.eaten.value
    var text5 = document.form.nutrition.value
    var text6 = document.getElementsByClassName('foodGroups')
    var text7 = ' ';
    
    var i = 0;
    for (i; i < text6.length; i++){
        if (text6[i].checked) {
            text7 += (text6[i].value) + ', '
        }
}

    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('age').value = '';
   
    
    alert('First Name: '+ text1 + '\nLast Name: ' + text2 + '\nAge: ' + text3 + '\nHave you eaten today? ' + text4 + '\nWas it nutritious? ' + text5 + '\nWhich parts of the food pyramid did your meal(s) cover?' + text7)
}
