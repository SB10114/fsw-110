var info = document.getElementsByClassName("red-box");
document.addEventListener('mouseover', handleMousemove);

function handleMousemove(event){
    console.log(`mouse position: ${event.x}:${event.y}`);
  };
  
