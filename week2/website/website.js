//Navbar
var newN = document.createElement("nav")
document.body.prepend(" Contact")
document.body.prepend(" Home")
document.body.prepend("About")

//The header
var newH = document.createElement("h1")
newH.textContent = "I am a header!"
document.body.append(newH)

//Paragraph tag
var newP = document.createElement("p")
newP.textContent = "JavaScript is fun!"
document.body.append(newP)

//List items
var myList = document.createElement('li')
myList.textContent = 'Head'
document.body.append(myList)
var myList = document.createElement("li")
myList.textContent= 'Shoulders'
document.body.append(myList)
var myList = document.createElement("li")
myList.textContent= 'knees'
document.body.append(myList)
var myList = document.createElement("li")
myList.textContent= 'Toes'
document.body.append(myList)
 
//Footer
var newF = document.createElement("F")
newF.textContent = "I am a footer"
document.body.append(newF)
//website.getElementById(newF)[0].style.margintop = "35";