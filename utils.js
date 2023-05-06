// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello";
};

const area = (w, h) => {
  // should return the area
  return w * h;
};

const perimeter = (w, h) => {
  // should return the perimeter
  return 2 * (w + h);
};

const circleArea = (r) => {
  // should return the area of the circle
  return Math.PI * r ** 2;
};

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = [];

const clearCart = () => {
  shoppingCart.length = 0;
};

const createItem = (name, price) => {
  return { name, price, quantity: 1 };
};

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart;
};

const addItemToCart = (item) => {
  // should add item to shopping cart
  shoppingCart.push(item);
};

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  count = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    count += shoppingCart[i].quantity;
  }
  return count;
};

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  const index = shoppingCart.indexOf(item);
  shoppingCart.splice(index, 1);
};

const getShoppingCartTotal = () => {
  // should return the total cost of all items in cart
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return total;
}

module.exports = {
  sayHello,
  area,
  perimeter,
  circleArea,
  clearCart,
  createItem,
  getShoppingCart,
  addItemToCart,
  getNumItemsInCart,
  removeItemFromCart,
  getShoppingCartTotal
};
