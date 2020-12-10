// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelectorAll("li.like").forEach(likeListener)

function likeListener(element) {
  element.addEventListener("click", function(event) {
    mimicServerCall()
      .then(function(response) {
        let glyph = element.querySelector("span.like-glyph")

        if (element.classList != "like activated-heart") {
          element.classList.add("activated-heart");
          glyph.innerHTML = FULL_HEART;
        } else if (glyph.innerHTML == FULL_HEART) {
          element.classList.remove("activated-heart");
          glyph.innerHTML = EMPTY_HEART;
        }
      })
      .catch(function(error) {
        modal = document.querySelector("div#modal.hidden")
        modal.classList.remove("hidden");
        modal.innerHTML = `An Error has occucred: ${error.message}`
        setTimeout(function() {modal.classList.add("hidden")}, 5000);
      })
  })
}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
