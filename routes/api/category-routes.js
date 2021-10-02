const router = require('express').Router();
const { restart } = require('nodemon');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all categories
router.get('/', async (req, res) => {
  // sends a request to categoryData in category.js, waits for response
  try {
    const categoryData 
    // wait for response from Category model
    = await Category.findAll(
      {
        // associated Products        
        include:[{model:Product}]
    });
    // gives an ok 200 status confirming this route worked
    res.status(200).json(categoryData);
  } catch {(err){
    // fires an internal server error if fail
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    // requires parameter id when passing primary key field
    const categoryData = await Category.findByPk(req.params.id, {
      include:[{model:Product}]
    });
    // if no category data?
    if (!categoryData) {
      // not found - return this message
      res.status(404).json({ message: 'No categories found with this id.' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    // gives ok status when post route completed
    res.status(200).json(categoryData);
  } catch (err) {
  // gives back request error if post route fails
  res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.findAll(
      {
  } catch {
  }
});
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.findAll(
      {
  } catch {
  }
});
});

module.exports = router;
