const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    // sends a request to categoryData in category-seeds.js, waits for response
    const categoryData = await Category.findAll(
      {
        // be sure to include its associated Products
  } catch {
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(
      {
        // be sure to include its associated Products
  } catch {
  }
});
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.findAll(
      {
        // be sure to include its associated Products
  } catch {
  }
});
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.findAll(
      {
        // be sure to include its associated Products
  } catch {
  }
});
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.findAll(
      {
        // be sure to include its associated Products
  } catch {
  }
});
});

module.exports = router;
