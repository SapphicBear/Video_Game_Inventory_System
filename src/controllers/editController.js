const db = require("./../../db/queries");
const links = require("./links");

async function getEdit(req, res) {
    const game = await db.getSelectedGame(req.params);
    res.render("edit", { links: links, game: game });
}

async function updateEdit(req, res) {
    
    res.redirect("/");
}

module.exports = {
    getEdit
};