const db = require("./../../db/queries");
const links = require("./links");

async function indexGet(req, res) {
    const games = await db.getAllGames();
    const genres = await db.getAllGenres();
    const consoles = await db.getAllConsoles();
    const studios = await db.getAllStudios();
    res.render("index", { games: games, links: links, genres: genres, consoles: consoles, studios: studios });
}
async function getFilterConsole(req, res) {
    const games = await db.filterByConsole(req.query);
    const genres = await db.getAllGenres();
    const consoles = await db.getAllConsoles();
    const studios = await db.getAllStudios();
    res.render("index", { games: games, links: links, genres: genres, consoles: consoles, studios: studios });
}

async function getFilterGenre(req, res) {
    const games = await db.filterByGenre(req.query);
    const genres = await db.getAllGenres();
    const consoles = await db.getAllConsoles();
    const studios = await db.getAllStudios();
    res.render("index", { games: games, links: links, genres: genres, consoles: consoles, studios: studios });
}
async function getFilterStudios(req, res) {
    console.log(req.query)
    const games = await db.filterByStudio(req.query);
    const genres = await db.getAllGenres();
    const consoles = await db.getAllConsoles();
    const studios = await db.getAllStudios();
    res.render("index", { games: games, links: links, genres: genres, consoles: consoles, studios: studios });
}

module.exports = {
    indexGet,
    getFilterConsole,
    getFilterGenre,
    getFilterStudios
};