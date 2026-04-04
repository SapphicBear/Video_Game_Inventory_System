const db = require("./../../db/queries");
const links = require("./links");
let error = { error: "" };
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
            error: error["error"],
        });
        error["error"] = "";
}

async function deleteItem(req, res) {
    const itemType = Object.keys(req.body)[0];
    switch (itemType) {
        case "game":
            await db.deleteGame(req.body);
            break;
        case "studio":
            try {
                await db.deleteStudio(req.body);
            } catch (err) {
                error["error"] = "ERROR: A game is still connected to this studio! Please delete the game before trying to delete the studio!";
            }
            break;
        case "console":
            await db.deleteConsole(req.body);
            break;
        default:
            throw new Error("Error! Illegal type chosen.");
    }
    res.redirect("/delete");
}

module.exports = {
    getDelete,
    deleteItem
};