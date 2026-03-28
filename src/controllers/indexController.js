const db = require("./../../db/queries");
const links = require("./links");

async function indexGet(req, res) {
    const games = await db.getAllGames();
    const genres = await db.getAllGenres();
    const consoles = await db.getAllConsoles();
    res.render("index", { games: games, links: links, genres: genres, consoles: consoles });
}

module.exports = {
    indexGet,
};