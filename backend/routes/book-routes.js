// Router for all the CRUD functions

const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);

router.post("/",booksController.addBook);
module.exports = router;

router.get("/:id", booksController.getByID);

router.put("/:id",booksController.updateBook)

router.delete("/:id",booksController.deleteBook)




