// Your code goes here

/**
 * Mouseover Anmation
 */
const imageArray = document.images;

[...imageArray].forEach(image => {
    const item = document.querySelector('.' + image.className);
    item.addEventListener('mouseover', (e) => {
        e.preventDefault();
        document.querySelector('.' + image.className).parentNode.classList.add("img-zoom");
    })
});

/**
 * Click Event
 */
const allButtons = document.querySelectorAll('.btn');
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', (e) => {
        e.preventDefault();
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

/**
 * Keydown event
 */
window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyP') {
        location.href = '#P';
    }
    if (e.code === 'KeyT') {
        location.href = '#T';
    }
})

/**
 * Drag Event
 */
let imageList = [...document.querySelectorAll('img')];
for (let i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener('drag', e => {
        e.preventDefault();
        imageList[i].setAttribute('style', 'display: none');
    })
}

/**
 * Resize
 */

window.addEventListener('resize', (e) => {
    e.preventDefault();
    if (window.innerWidth < 800) {
        const bg = document.querySelector('.home'); bg.style.background = 'red';
    }
})

/**
 * Copy and Cut event
 */

let para = [...document.querySelectorAll('p')];

para.forEach(p => {
    p.addEventListener('copy', (e) => {
        e.preventDefault();
        p.setAttribute('style', 'color: red');  
    })
})

para.forEach(p => {
    p.addEventListener('cut', (e) => {
        e.preventDefault();
        p.setAttribute('style', 'display: none');  
    })

})

/**
 * scroll event
 */

 window.addEventListener('scroll', (e) => {
    e.preventDefault();
    for (let i = 0; i < imageList.length; i++) {
        imageList[i].classList.add("vert-move");
    }
 })

/**
 * Double click event
 */

para.forEach(p => {
    p.addEventListener('dblclick', (e) => {
        e.preventDefault();
        p.setAttribute('style', 'color: blue'); 
    })
})