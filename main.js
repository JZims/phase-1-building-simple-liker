// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
/*
- Set eventlistener to check class (if...else) for full or empty heart
 
- Set eventlistener for click on empty heart
  - 
  - respond to error using .catch() 
    - make function ro remove hidden class from error modal
    - Send server error message to the <p> of the error modal
    - use setTimeout(*, 3000) to keep modal visible
  - respond to success on click of empty heart
    - Change the heart to a full heart
    - add the .activated-heart class to heart
- Set Eventlistener on click of full heart
    - Change the heart back to empty
    - Remove .activated-heart class   
*/


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
