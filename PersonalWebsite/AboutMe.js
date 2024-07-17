/*
[Author]: John Bostater

[Start Date]: 7/16/24

[Description]:
    This file will contain all of the animation and event-handling syntax
    for the html document.

[Notes]:
    //Any programming notes should go here...

    //Add a button to navigate back to the welcome page html 
*/


//Action-Event Handling
//-------------------------------------------------------------

//Go Back Button
  function goBack(){
    //Select the button object/element
      var goBack = document.getElementById('goBackButton');

    //Action-Event handling for the button being clicked
      goBack.addEventListener('click', function() {
        //Return the user back to the welcome page
          window.location.href = 'MainPage.html';
      });
  }
//


//New/random debug
  function userEnteredText(){

alert('It worked!');

// Get references to the elements
const header = document.getElementById('header');
const textInput = document.getElementById('textInput');

// Add event listener to the textarea for live updates
textInput.addEventListener('input', function() {
    // Update the <h1> with the current value of the textarea
    header.textContent = textInput.value;
});
  
  }
//-------------------------------------------------------------


//Animations & Other
//-------------------------------------------------------------


//-------------------------------------------------------------