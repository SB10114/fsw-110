var head = document.createElement('h1')
head.textContent = 'Contact us'
document.body.prepend(head)
head.addEventListener('click', function(){
    head.remove()
})
var clone = document.createElement('ol')
document.body.appendChild(clone)

 for (i=0; i< 10; i++){
   var li = document.createElement('li')
   li.textContent = 'This list' + i
   clone.appendChild(li)

   var button= document.createElement('button')
   button.textContent= 'X'
   li.appendChild(button)
   li.id = 'item' + i 
   console.log(li.id)
   button.addEventListener('click', function() {
    document.getElementById(li.id).remove()
   })
 }