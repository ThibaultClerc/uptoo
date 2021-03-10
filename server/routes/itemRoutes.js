const router = require("express").Router();
const itemController = require("../controllers/itemController");

router.get("/", itemController.itemIndex);
router.get("/:id", itemController.itemShow);
router.post("/", itemController.itemCreate);
router.put("/:id", itemController.itemUpdate);
router.delete("/:id", itemController.itemDelete);

module.exports = router;
