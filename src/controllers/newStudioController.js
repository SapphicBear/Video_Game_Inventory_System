const db = require("./../../db/queries");
const { body, validationResult } = require("express-validator");
const links = require("./links");

async function getNewStudio(req, res) {
    res.render("new-studio", { links: links, errors: "" });
}

module.exports = {
    getNewStudio,
};