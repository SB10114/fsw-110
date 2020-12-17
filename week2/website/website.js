var newN = document.createElement("nav")
document.body.append("About")
document.body.append("Home")
document.body.append("Contact")

var newH = document.createElement("Header")
newH.textContent = "I am a header!"
document.body.append(newH)

var newP = document.createElement("p")
newP.textContent = "JavaScript is fun!"
document.body.append(newP)

var newli = document.createElement("li")
newli.textContent = "head"
// newli.textContent = "shoulders"
// document.body.prepend("head")
// // document.body.append("shoulders")

// var newli1 = document.createElement("li1")
// newli1.textContentent ="shoulders"
// document.body.append(newli1)
 
var newF = document.createElement("F")
newF.textContent = "I am a footer"
document.body.append(newF)