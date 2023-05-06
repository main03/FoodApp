const Book = require("../Models/Books");

exports.CreateNewBook = async (req, resp) => {
  const  FlavourName = req.body. FlavourName;
  const  Price = req.body.Price;
  const  Size = req.body.Size;

  let Bookinstance = new Book({
     FlavourName:  FlavourName,
     Price :Price,
     Size :Size,
  });
  if (req.file) {
    Bookinstance. PizzaImage = req.file.path;
  }
  Bookinstance.save()
    .then((result) => {
      resp.status(200)
      .json({ message: 'Product Added Successfully' });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetallBookList = async (req, res, next) => {
  Book.find()

    .then((result) => {
      res.status(200).json({
        foodappdata: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.SingleProduct= async (req, res, next) => {
  
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }

};

exports.getProducts = async (req, res, next) => {
  
  let documents;
  try {
    documents = await Book.find({
      _id: { $in: req.body.ids },
    }).select("-updatedAt -__v");
    console.log(documents); // Add this line to log the returned data to the console
  } catch (err) {
    return res.status(404).json({ message: "Book not found" });
  }

  return res.json(documents);
};
