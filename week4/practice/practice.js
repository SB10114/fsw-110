//Keyboard key code example
document.addEventListener("keydown", function(event) {
        console.log(event.which);
    
        document.body.innerHTML = `
        &nbsp;&nbsp;&nbsp;
        <b>which: ${event.which}</b>
        <br>&nbsp;
        <b>keyCode:</b> ${event.keyCode}
        <br>&nbsp;&nbsp;&nbsp;
        <b>shiftKey:</b> ${event.shiftKey}
        </br>&nbsp;&nbsp;&nbsp;&nbsp;
        <b>altKey:</b> ${event.altKey}
        <br>&nbsp;&nbsp;&nbsp;
        <b>ctrlKey:</b> ${event.ctrlKey}
        <br>&nbsp;&nbsp;
        <b>metaKey:</b> ${event.metaKey}
        <br>&nbsp;&nbsp;
        <b>key:</b> ${event.key}
      `;
      
    });

//how to create a button (here's the html: <button id="button">Click me</button>)
const button = document.getElementById('button')
eventTargetElement.addEventListener()
button.addEventListener('click', handleButtonClick)

function handleButtonClick(event) {
    //code to be executed upon the event firing
    console.log(event)
}