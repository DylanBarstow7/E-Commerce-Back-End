const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('../../Develop/routes/api/product-routes');
const tagRoutes = require('../../Develop/routes/api/tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
