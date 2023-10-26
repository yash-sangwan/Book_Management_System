//CRUD functionality  
const Book =require("../model/Book");


// functionality for getting all the books 

const getAllBooks = async(req,res,next) => {

     //this rroute will provide all of the books
     let books;
     try {
         books = await Book.find();
     } catch (err) {
         console.log(err);
     }
 
     if(!books){
         return res.status(404).json({message: "No products found"})
     }
     return res.status(200).json({books});

    }

// fucntionality for searching book by ID

const getByID = async (req,res,next) => {
    const id=req.params.id;
    let book;
    try {
        book= await Book.findById(id);
    } catch (err) {
        console.log(err);
        
    }

    if(!book) {
        return res.status(404).json({message:"No Book Found"});

    }
    return res.status(200).json({book});
}


//functionality for adding books 

const addBook = async(req,res,next) => {
    
    
    
    
    let book;
    try {
        book = new Book ({
        name:req.body.name,
        author:req.body.author,
        description:req.body.description,
        price:req.body.price,
        available:req.body.available,
        image:req.body.image,

       });
       await book.save();


    } catch (err) {
        console.log(err);
    }

    if (!book){
        return res.status(500).json({message:"Unable To Add"})

    }
    return res.status(201).json({book})

}


//functionality to update books
const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, available,image } = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name, author, description, price, available,image
        });
        book = await book.save();
    } catch (err) {
        console.log(err)
    }
    if(!book) {
        return res.status(404).json({message:"Unable to Update By This ID"});
        
    }
    return res.status(200).json({book});
}

//functionality to delete books
const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (err) {
        console.log(err)
    }
    if(!book) {
        return res.status(404).json({message:"Unable to Delete By This ID"});
        
    }
    return res.status(200).json({message:"Product Successfully Deleted"});
}




exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getByID = getByID;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;



