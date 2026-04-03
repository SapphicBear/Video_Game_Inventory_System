const db = require("./../../db/queries");
const links = require("./links");

async function getDelete(req, res) {
    const games = await db.getAllGames();
    const consoles = await db.getAllConsoles();
    const studios = await db.getAllStudios();
    res.render("delete", 
        { 
            links: links, 
            games: games, 
            consoles: consoles, 
            studios: studios,
        });
}

module.exports = {
    getDelete,
};