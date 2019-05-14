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

/**
 * Keydown event
 */
window.addEventListener('keydown', (e) => {
    e.preventDefault();
    // alert(`You clicked ${e.code}`);
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
        // console.log(imageList[i]);
        imageList[i].classList.add("vert-move");
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
// console.log(para);

para.forEach(p => {
    p.addEventListener('copy', (e) => {
        e.preventDefault();
        p.setAttribute('style', 'color: red');  
    })
    console.log(p);
})

para.forEach(p => {
    p.addEventListener('cut', (e) => {
        e.preventDefault();
        p.setAttribute('style', 'display: none');  
    })
    console.log(p);
})

