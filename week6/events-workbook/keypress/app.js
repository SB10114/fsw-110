/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

document.addEventListener("keydown", function(event) {
  
    console.log(event);
      
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
