let stash = document.getElementById("stash-pic");
let catPic = document.getElementById("cat-pic");

function addStash(event) {
  // Your code here
  stash.style.top = `${event.pageY - 30}px`;
  stash.style.left = `${event.pageX - 90}px`;
  console.log(event.pageX, event.pageY);
}

// Add an event listener to the correct DOM node here - using your addStash function, and firing on click.
catPic.addEventListener("click", addStash);