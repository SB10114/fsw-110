var newh1 = document.createElement("h1")
newh1.textContent = "Welcome to my JS site"

var newP = document.createElement("p")
newP.textContent = "All of this was created with JavaScript"

var newli = document.createElement("li")
newli.textContent ="Dwight Shrute"

document.body.append(newh1)
document.body.append(newP)
document.body.prepend(newli)

