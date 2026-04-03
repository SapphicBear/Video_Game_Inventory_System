const db = require("./../../db/queries");
const { body, validationResult } = require("express-validator");
const links = require("./links");

async function getNewConsole(req, res) {
    res.render("new-console", { links: links, errors: "" });
}

module.exports = {
    getNewConsole,
};