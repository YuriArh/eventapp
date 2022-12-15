const Router = require("express");
const eventController = require("../controllers/eventController");

const router = new Router();

router.post("/", eventController.create);
router.get("/", eventController.getAll);
router.get("/:id", eventController.getOne);
router.delete("/");

module.exports = router;
