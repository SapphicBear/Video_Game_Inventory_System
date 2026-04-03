const { Router } = require("express");
const router = Router();
const controller = require("./../controllers/newStudioController");

router.get("/", controller.getNewStudio);

module.exports = router;