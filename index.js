"strict";
/**# Toggle Favourite Destinations

Create a list of your favourite destinations with a button to toggle the list

**Requirements:**
- use Bootstrap CDN
- use `Element.classList` methods

**Example:**

![screenshot](toggle.gif)

**Bonus:**

- Let the user select the favorite destination
- Show in the event object
- Style the list to your pleasing.

![screenshot](select.gif)*/

// Item selection
const button = document.querySelector("button");
const list = document.querySelector("ul");
const listItems = document.querySelectorAll("li");
const selected = document.querySelector(".selected");

// event listener

button.addEventListener("click", () => {
  list.classList.toggle("d-none");
  if (list.classList.contains("d-none")) {
    button.textContent = "Show Destinations";
    selected.style.visibility = "hidden";
    selected.style.opacity = "0";
  } else {
    button.textContent = "Hide Destinations";
  }
});

listItems.forEach((el) => {
  el.addEventListener("click", () => {
    selected.textContent = `You selected ${el.textContent}`;
    selected.style.visibility = "visible";
    selected.style.opacity = "1";
  });
});
