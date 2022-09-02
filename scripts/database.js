
//this will be a database of all the fish displayed on the website

const database = {
    fish: [
        {
            id: 1,
            fishName: "Ponyo",
            species: "Goldfish",
            placeOfHarvest: "East Sea",
            length: 3,
            fishPicture: "https://i0.wp.com/btr.michaelkwan.com/wp-content/uploads/2009/03/ponyo.jpg?resize=525%2C233",
            diet: "Blood",
        }
{
            id: 2,
            fishName: "Clamantha",
            species: "Clam",
            placeOfHarvest: "Solaris",
            length: 2,
            fishPicture: "https://pbs.twimg.com/media/DUdZg5EU8AELzwg.jpg",
            diet: "Human Souls",
        }
{
            id: 3,
            fishName: "Sharky",
            species: "Shrimp",
            placeOfHarvest: "Crystal Sea",
            length: 2,
            fishPicture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F10%2F19%2FJaguar-Shark.jpg",
            diet: "Quantum Gemeralds"
        }
{
            id: 4,
            fishName: "Pudge",
            species: "PeanutButter Fish",
            placeOfHarvest: "Hawaii",
            length: 4,
            fishPicture: "https://64.media.tumblr.com/62a5c495effc27455aba7a316a31cc24/d994bb6cebec18b9-95/s540x810/d2ae04a896a325fd4500ca842658dc4e0aedee21.pnj",
            diet: "Peanutbutter Sandwiches",
        }
{
            id: 5,
            fishName: "Timothy",
            species: "Jaguar Shark",
            placeOfHarvest: "Galapagos Islands",
            length: 12,
            fishPicture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F10%2F19%2FJaguar-Shark.jpg",
            diet: "Best Friends",
        }
    ]
}

const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}

module.exports = { getFish }