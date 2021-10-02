const router = require('express').Router();
const { restart } = require('nodemon');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all categories
router.get('/', async (req, res) => {
  // sends a request to categoryData in category.js, waits for response
  try {
    const categoryData = await Category.findAll(
    // wait for response from Category model
      {
        // associated Products        
        include:[{model:Product}]
    });
    // gives an ok 200 status confirming this route worked
    res.status(200).json(categoryData);
  } catch (err) {
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

router.put('/:id', async (req, res) => {
  // creates instance with new category_name and a unique id
  try {
    const categoryData = await Category.update(
      {
        // category_name input
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
    });
  if (!categoryData){
    res.status(404).json({ message: 'No category with this id!' });
    return;
  }
  res.status(200).json(categoryData);
  } catch (err) {
  res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id:req.params.id
      }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;