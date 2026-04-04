const { Router } = require("express");
const router = Router();
const controller = require("./../controllers/deleteController");

router.get("/", controller.getDelete);
router.post("/:id", controller.deleteItem);

module.exports = router;