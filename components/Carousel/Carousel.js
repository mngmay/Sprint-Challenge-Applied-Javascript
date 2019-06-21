class Carousel {
    constructor(element){
        this.element = element;
        this.imgs = this.element.querySelectorAll("img");
        // console.log(this.imgs);

        this.rightBtn = this.element.querySelector(".right-button");
        // console.log(this.rightBtn);

        this.leftBtn = this.element.querySelector(".left-button");
        // console.log(this.leftBtn);

        this.index = 0;
        this.imgs[this.index].style.display = 'flex'; //reveals image based on index

        this.rightBtn.addEventListener('click', () => this.moveRight());
        this.leftBtn.addEventListener('click', () => this.moveLeft());
    }

    //methods

    moveRight() {
     //if button is right add index 

    }

    moveLeft() {
        //if button is left subtract index
       }
}

let carousel = document.querySelector(".carousel");
// console.log(carousel);

carousel = new Carousel(carousel);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
