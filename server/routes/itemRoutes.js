const router = require('express').Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.item_index);
router.get('/:id', itemController.item_show);
router.post('/', itemController.item_create);
router.put('/:id', itemController.item_update);
router.delete('/:id', itemController.item_delete);

module.exports = router;