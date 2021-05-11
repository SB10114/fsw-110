var newh1 = document.createElement("h1")
newh1.textContent = "Welcome to my JS site"

var newP = document.createElement("p")
newP.textContent = "All of this was created with JavaScript"

// var newlist = document.createElement("list")
// newlist.textContent = "Dwight Shrute"

document.body.prepend(newh1)
document.body.appendChild(newP)
//document.body.prepend(newlist)

