// Your code goes here

/**
 * Mouseover Anmation
 */
const imageArray = document.images;

[...imageArray].forEach(image => {
    const item = document.querySelector('.' + image.className);
    item.addEventListener('mouseover', (e) => {
    document.querySelector('.'+image.className).parentNode.classList.add("img-zoom");
    })
});

/**
 * Click Event
 */
const allButtons = document.querySelectorAll('.btn');
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', (e) => {
        alert("You Have Successfully Signed Up")
        console.log("You clicked:", this.innerHTML);
    });
}

/**
 * Load Event
 */
   window.addEventListener('load', e=> {
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
const imageList = [...document.querySelectorAll('img')];
for (let i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener('drag', e => {
        imageList[i].setAttribute('style', 'display: none');
    })
}

/**
 * Resize
 */

window.addEventListener('resize', (e) => {
    if (window.innerWidth < 800) {
        const bg = document.querySelector('.home'); bg.style.background = 'red';
    }
})

/**
 * Copy and Cut event
 */

const para = [...document.querySelectorAll('p')];

para.forEach(p => {
    p.addEventListener('copy', (e) => {
        p.setAttribute('style', 'color: red');  
    })
})

para.forEach(p => {
    p.addEventListener('cut', (e) => {
        p.setAttribute('style', 'display: none');  
    })

})

/**
 * scroll event
 */

 window.addEventListener('scroll', (e) => {
    for (let i = 0; i < imageList.length; i++) {
        if (i === 0) {
            imageList[i].classList.add("vert-move");
        }  
    }
 })

/**
 * Double click event
 */

para.forEach(p => {
    p.addEventListener('dblclick', (e) => {
        p.setAttribute('style', 'color: blue'); 
    })
})