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
  //Call upon the Html document object via "document", get the element we would like to
  //manipulate via "getElementById"
    document.getElementById('textElement').addEventListener('transitionend', function(event) {
  
      //Change the html document once the opacity of the text has reached zero  
        if(event.propertyName == 'opacity' && getComputedStyle(event.target).opacity == 0) {
          //Load the new "About Me" page via it's html document
            window.location.href = "AboutMe.html"; // URL of the new page
        }
    });      
}


//Include more animations for this page!!

//Maybe an image? or a moon? or something cool
//Look at youtube tutorials for inspiration!