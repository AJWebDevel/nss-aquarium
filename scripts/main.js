const { getFish } = require('./database.js')

const allFish = getFish()
// Import the FishList function from the correct module
const { fishList } = require('./fishList.js')
const listHTMLFish = fishList()

for (const fish of allFish) {
    listHTMLFish
    console.log(fish)
}


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishPictures")


parentHTMLElement.innerHTML = FishList()