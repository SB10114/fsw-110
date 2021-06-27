// make the box disapear when the user clicks it

document.getElementsByClassName('redBox')[0].addEventListener('click',() => {
    //handle load event
    //alert('Hello')
    document.getElementsByClassName('redBox')[0].style.backgroundColor = 'white';
});
