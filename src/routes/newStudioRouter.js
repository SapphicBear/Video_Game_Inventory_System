const { Router } = require("express");
const router = Router();
const controller = require("./../controllers/newStudioController");

router.get("/", controller.getNewStudio);
router.post("/", controller.postNewStudio);

module.exports = router;