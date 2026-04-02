const db = require("./../../db/queries");
const { body, validationResult } = require("express-validator");
const links = require("./links");


async function getEdit(req, res) {
    const game = await db.getSelectedGame(req.params);
    res.render("edit", { links: links, game: game });
}

exports.updateEdit = [
    body("name")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Name of game must be specified."),
    body("studio")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Studio name must be specified."),
    body("genre"), // zzzz
    body("release_year"),
    body("consoles"),
    body("in_stock"),
    body("price"),

];
async function updateEdit(req, res) {
    console.log("body", req.body);
    res.redirect("/");
}

module.exports = {
    getEdit,
    updateEdit
};