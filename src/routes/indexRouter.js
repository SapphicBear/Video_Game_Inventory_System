const { Router } = require("express");
const router = Router();
const controller = require("./../controllers/indexController");

router.get("/", controller.indexGet);
router.get("/:console_id", controller.filterByConsole);

module.exports = router;