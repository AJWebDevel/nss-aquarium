// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += ` <section class="fishPictures">
    
        <!--Each article below represents a fish with info and an image-->
        <article class="fishInfoArticle">
            <figure class="fishImage">
                <img src="${fish.fishPicture}" >
            </figure>
            <h1>${fish.fishName}</h1>
            <ul>
                <li>Species:${fish.species}</li>
                <li>Place of Origin:${fish.placeOfHarvest}</li>
                <li>Length:${fish.length} inches</li>
                <li>Diet:${fish.diet}</li>
            </ul>
        </article>
    </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

