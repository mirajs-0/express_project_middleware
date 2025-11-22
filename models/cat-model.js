// Mock database - just an array
let cats = [];
let nextId = 1;

const addCat = (catData) => {
  const newCat = {
    id: nextId++,
    ...catData,
  };
  cats.push(newCat);
  return newCat;
};

const getAllCats = () => cats;

const getCatById = (id) => cats.find((cat) => cat.id === Number(id));

const updateCat = (id, updates) => {
  const cat = getCatById(id);
  if (cat) {
    Object.assign(cat, updates);
  }
  return cat;
};

const deleteCat = (id) => {
  const index = cats.findIndex((cat) => cat.id === Number(id));
  if (index !== -1) {
    const deletedCat = cats[index];
    cats.splice(index, 1);
    return deletedCat;
  }
  return null;
};

export { addCat, getAllCats, getCatById, updateCat, deleteCat };
