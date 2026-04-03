const { Router } = require("express");
const router = Router();
const controller = require("./../controllers/newConsoleController");

router.get("/", controller.getNewConsole);

module.exports = router;