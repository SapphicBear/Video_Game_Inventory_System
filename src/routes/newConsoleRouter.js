const { Router } = require("express");
const router = Router();
const controller = require("./../controllers/newConsoleController");

router.get("/", controller.getNewConsole);
router.post("/", controller.postNewConsole);
module.exports = router;