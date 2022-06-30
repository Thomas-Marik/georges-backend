let items = [
  {
    id: "1",
    brandName: "Gold-Medal",
    description: "50lb bag on enriched flour",
    price: 12.99,
    par: 10,
    onHand: 2,
    location: "prep",
    updated: false,
  },
];

export const getAllItems = (req, res) => {
  res.send(items);
};
export const getItemById = (req, res) => {
  const { id } = req.params;
  const foundItem = items.find((item) => item.id === id);
  res.send(foundItem);
};
export const getItemsByLocation = (req, res) => {
  const { location } = req.params;
  let foundItems = [];
  for (const x of items) {
    if (x.location === location) foundItems.push(x);
  }
  res.send(foundItems);
};
export const getItemsUnderPar = (req, res) => {
  let foundItems = [];
  for (const x of items) {
    if (x.onHand < x.par) foundItems.push(x);
  }
  res.send(foundItems);
};

export const createItem = (req, res) => {
  const item = req.body;
  let isFound = false;
  for (const x of items) {
    if (x.id === item.id) isFound = true;
  }
  if (isFound) {
    res.send("Item was already in database");
  } else {
    items.push(item);
    res.send(`Item with ${item.id} was added to database`);
  }
};

export const updateItem = (req, res) => {
  const { id } = req.params;
  const {
    brandName,
    description,
    price,
    par,
    onHand,
    location,
    updated,
  } = req.body;
  const item = items.find((item) => item.id === id);
  if (brandName) item.brandName = brandName;
  if (description) item.description = description;
  if (price) item.price = price;
  if (par) item.par = par;
  if (onHand) item.onHand = onHand;
  if (location) item.location = location;

  item.updated = true;
  res.send("item updated");
};

export const deleteItem = (req, res) => {
  const { id } = req.params;
  items = items.filter((item) => item.id !== id);
  res.send(`Item with the id ${id} deleted from database`);
};
