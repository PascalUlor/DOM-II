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