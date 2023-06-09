
const slide = document.querySelector(".slide"); // header slide
iterationcount = 0 // counts iterations of the header's animation

// Header animation 
slide.addEventListener("animationiteration", () => {
    iterationcount++;
    //console.log(`Iterations: ${iterationcount}`) 
    if (iterationcount % 2){
        slide.src = "assets/jamirouailogo2.png"; // for every iteration of the animation, the logo will change.
    }
    else {
        slide.src = "assets/bandpic.png";
    }
})


// window scrolling
var sections = document.getElementsByTagName('section'); // get each tag in the document that is a section
Array.from(sections).forEach(element => { // Basically, this forms an array of elements with the "sections" and arrays each element to apply the animation. 
    element.style.opacity = "0"; // all the elements are currently transparent
    window.addEventListener("scroll", () => { 
        let scroll = this.scrollY;          /*when the client's scroll position is the equivilent or greater than the position of the section(s), 
                                            all the elements will fade in as the player scrolls through each element. */
        if (scroll >= element.clientHeight){
            element.classList.add("anim");
            element.style.opacity = 1;
        }
    })
});



