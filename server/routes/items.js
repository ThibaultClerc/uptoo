const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
  Item.find()
  .then(items => res.json(items))
  .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Item.findById(req.params.id)
  .then(item => res.json(item))
  .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/').post((req, res) => {
  const item = req.body;
  const newItem = new Item({
    title: item.title,
    description: item.description,
    data: item.data
  });
  newItem.save()
    .then(() => res.status(200).json(newItem))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

router.route('/:id').put((req, res) => {
  const updatedItem = req.body;
  Item.findOneAndUpdate({_id: req.params.id}, updatedItem, {new: true}, (err, data) => {
    if (err) {
      res.status(400).json(`Error: ${err}`);
    } else {
      res.status(200).json(data);
    };
  });
});

router.route('/:id').delete((req, res) => {
  Item.findOneAndDelete({_id: req.params.id}, (err, data) => {
    if (err) {
      res.status(400).json(`Error: ${err}`);
    } else {
      res.status(200).json(`Item with id ${data.id} deleted !`);
    };
  });
});

module.exports = router;