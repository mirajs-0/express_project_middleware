import { addCat, getAllCats, getCatById } from "../models/cat-model.js";

const postCat = (req, res) => {
  console.log("Form data (req.body):", req.body);
  console.log("File data (req.file):", req.file);

  const catData = {
    title: req.body.title,
    user_id: req.body.user_id,
    filename: req.file ? req.file.filename : null,
  };

  const newCat = addCat(catData);

  res.status(201).json({
    message: "Cat added successfully",
    cat: newCat,
  });
};

const getCats = (req, res) => {
  const cats = getAllCats();
  res.json(cats);
};

const getCat = (req, res) => {
  const cat = getCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.status(404).json({ message: "Cat not found" });
  }
};

export { postCat, getCats, getCat };
