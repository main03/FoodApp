var express=require('express');
var router=express.Router();
const upload=require("../Middleware/ImageUpload")
const BookController = require("../Controllers/Book");



router.route('/listofproducts').get(BookController.GetallBookList)
router.route('/:id').get(BookController.SingleProduct)
router.route('/').post(upload.single("PizzaImage"),BookController.CreateNewBook)
router.route('/cart-items').post(BookController.getProducts)

module.exports = router;