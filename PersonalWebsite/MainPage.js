/*
[Author]: John Bostater

[Start Date]: 7/16/24

[Description]:
    This file will contain all of the animation and event-handling syntax for the html document.

[Notes]:
    //Any programming notes should go here...

    //Add a button to navigate back to the welcome page html 
*/


//Load the new Html page once the opacity of the Welcome text has reached 0
function newPage(){
  //I am going to write/copy all of this and feel proud lmao
    const textElement = document.getElementById('textElement');

  
  //Listen for the CSS transition to end, then transition the page
    textElement.addEventListener('transitionend', () => {
      //Check if the opacity is zero
        if(window.getComputedStyle(textElement).opacity === '0'){
          //Transition to the new page
            window.location.href = 'AboutMe.html';
        }
    });      
}

//Include more animations for this page!!

//Maybe an image? or a moon? or something cool
//Look at youtube tutorials for inspiration!