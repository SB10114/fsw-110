var button= document.createElement('button')
   button.textContent= 'Submit'
   document.body.appendChild(button)
   button.addEventListener('click', function(event){
   event.preventDefault()
    var input1 = document.form.item1.value;
    var input2 = document.form.item2.value;
    var input3 = document.form.item3.value;
    console.log(input1);
    console.log(input2);
    console.log(input3);

var source = ('Your Name: ' + input1 + '<br>Your Email: ' + input2 + '<br>Comments and Concerns: ' + input3 + '<br>');
console.log(source);
var submit= document.createElement('h4')
submit.innerHTML = (source);
document.getElementById('submit').append(submit)

var button2 = document.createElement('button')
button2.textContent = 'Delete'
submit.appendChild(button2)
button2.addEventListener('click', function(event){
    submit.textContent = ''
})
})
