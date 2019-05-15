// Your code goes here

/**
 * Mouseover Anmation
 */
const imageArray = [...document.querySelectorAll('img')];
for (let i = 0; i < imageArray.length; i++) {
    imageArray[i].addEventListener('mouseover', (e) => {
        imageList[i].parentNode.classList.add("img-zoom");
    })
}

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

const btnContainers = document.querySelectorAll('.destination');
for (let i = 0; i < btnContainers.length; i++) {
    btnContainers[i].addEventListener('click', (e) => {
        alert("Pick a destination")
        console.log('ABOUT TO SHORT-CIRCUIT BUBBLING');
        e.stopPropagation();
        console.log('PASCAL');
    });
}

/**
 * Load Event
 */
const navBar = document.querySelector('header')
   window.addEventListener('load', e=> {
       /**
        * background toggle color gotten from help channel
        * courtesy of Emily
        */
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    navBar.style.backgroundColor = `rgb(${red},${green},${blue})`;
    navBar.style.color = 'white';
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

/**
 * Nav Event
 */

 const navItems = document.querySelectorAll('a');
 for (let i = 0; i < navItems.length; i++) {
     navItems[i].addEventListener('click', e=> {
         e.preventDefault();
     })
 }