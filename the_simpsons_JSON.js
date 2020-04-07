/* # JSON challenge

Write a JavaScript console app that reads and parses the simpsons_episodes.json file, and logs the following information:

```
IMDB Ratings for Simpsons Season 1 (released 1990):

Simpsons Roasting on an Open Fire - 8.2
Bart the Genius - 7.8
Homer 's Odyssey - 7.5
There 's No Disgrace Like Home - 7.8
Bart the General - 8.1
Moaning Lisa - 7.6
The Call of the Simpsons - 7.9
The Telltale Head - 7.7
Life on the Fast Lane - 7.4
Homer 's Night Out - 7.8
The Crepes of Wrath - 8.3
Krusty Gets Busted - 7.9
Some Enchanted Evening - 7.9

Average rating for episodes in season 1 was: 7.84 */

const simpsonsData = require("./simpsons_episodes.json");

function filterBySeason(seasonNumber) {
    let filteredData = simpsonsData.filter((episode) => {
        return episode.season == seasonNumber
    });

    console.log(`IMDB Ratings for Simpsons Season ${seasonNumber} (released ${filteredData[0].original_air_year}):\n`)

    let averageRating = 0;
    for(let episode of filteredData) {
        averageRating += episode.imdb_rating;
        console.log(`${episode.title} - ${episode.imdb_rating}`);
    }

    console.log("\nAverage rating for episodes in season", seasonNumber, "was:", ((averageRating / filteredData.length).toFixed(2)));

}

filterBySeason(5);

