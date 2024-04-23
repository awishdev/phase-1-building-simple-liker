// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let glyphs = document.getElementsByClassName("like-glyph");
for (let heart of glyphs){
  heart.addEventListener("click", glyphClicked);
}

function glyphClicked(clickEvent){

    mimicServerCall().catch(displayError)
    .then((response) => {
      if(response === "Pretend remote server notified of action!"){
        heartSwitch(clickEvent);
      }
    });


}

function displayError(rejected){
  let p = document.getElementById("modal-message");
  p.textContent = ``;
  let t = document.createTextNode(rejected);
  p.appendChild(t);
  document.getElementById("modal").classList.remove("hidden");

  setTimeout(() => {document.getElementById("modal").classList.add("hidden");}, 3000);
}

function heartSwitch(e){
  //console.log(e.target);
  if (e.target.textContent === EMPTY_HEART){
  e.target.textContent = FULL_HEART;
  e.target.classList.add("activated-heart");
  }
  else if(e.target.textContent === FULL_HEART){
    e.target.textContent = EMPTY_HEART;
    e.target.classList.remove("activated-heart");
  }

}

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
