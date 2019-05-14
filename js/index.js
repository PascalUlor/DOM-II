// Your code goes here

/**
 * Mouseover Anmation
 */
const imageArray = document.images;

[...imageArray].forEach(image => {
    const item = document.querySelector('.'+image.className);
    item.addEventListener('mouseover', (e) =>{
        e.preventDefault();
        document.querySelector('.'+image.className).parentNode.classList.add("img-zoom"); 
    })
});

/**
 * Click Event
 */
const allButtons = document.querySelectorAll('.btn');
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', (e) => {
        e.preventDefault();
      console.clear();
      alert("You Have Successfully Signed Up")
      console.log("You clicked:", this.innerHTML);
    });
  }

  /**
   * Load Event
   */
   window.addEventListener('load', e=> {
       e.preventDefault();
       alert("Welcome");
   })