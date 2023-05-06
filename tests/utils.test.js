const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function () {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return the area of a rectange", () => {
  const area = utils.area(5, 10);
  expect(area).to.be.a("number");
  expect(area).to.equal(50);
});

it("should return the perimeter of a rectangle", () => {
  const perimeter = utils.perimeter(5, 10);
  expect(perimeter).to.be.a("number");
  expect(perimeter).to.equal(30);
});

it("should return the area of a circle", () => {
  const circleArea = utils.circleArea(5);
  expect(circleArea).to.be.a("number");
  expect(circleArea).to.equal(Math.PI * 25);
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart();
  done();
});

it("Should create a new (object) Item with name and price", function () {
  const item = utils.createItem("apple", 0.99);
  expect(item).to.be.a("object");
  expect(item).to.have.property("name", "apple");
  expect(item).to.have.property("price", 0.99);
  expect(item).to.have.property("quantity", 1);
});

it("Should return an array containing all items in cart", () => {
  const shoppingCart = utils.getShoppingCart();
  const pear = utils.createItem("pear", 0.99);
  utils.addItemToCart(pear);
  expect(shoppingCart).to.be.a("array");
  expect(shoppingCart.length).to.equal(1);
  expect(shoppingCart).to.contains(pear);
});

it("Should add a new item to the shopping cart", () => {
  const pear = utils.createItem("pear", 0.99);
  utils.addItemToCart(pear);
  const shoppingCart = utils.getShoppingCart();
  expect(shoppingCart.length).to.equal(1);
  expect(shoppingCart[0]).to.have.property("name", "pear");
});

it("Should return the number of items in the cart", () => {
  const pear = utils.createItem("pear", 0.99);
  utils.addItemToCart(pear);
  numOfItems = utils.getNumItemsInCart();
  expect(numOfItems).to.be.a("number");
  expect(numOfItems).to.equal(1);
});

it("Should remove items from cart", () => {
  const pear = utils.createItem("pear", 0.99);
  utils.addItemToCart(pear);
  utils.removeItemFromCart(pear);
  const shoppingCart = utils.getShoppingCart();
  expect(shoppingCart.length).to.equal(0);
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", () => {
  const pear = utils.createItem("pear", 0.99);
  utils.addItemToCart(pear);
  utils.addItemToCart(pear);
  const numOfItems = utils.getNumItemsInCart();
  expect(numOfItems).to.be.a("number");
  expect(numOfItems).to.equal(2);
});

it("Should validate that an empty cart has 0 items", () => {
  const pear = utils.createItem("pear", 0.99);
  utils.addItemToCart(pear);
  utils.clearCart();
  const numOfItems = utils.getNumItemsInCart();
  expect(numOfItems).to.be.a("number");
  expect(numOfItems).to.equal(0);
});

it("Should return the total cost of all items in the cart", () => {
  const cart = utils.getShoppingCart();
  const pear = utils.createItem("pear", 0.99);
  const apple = utils.createItem("apple", 0.23, 3);
  const orange = utils.createItem("orange", 0.5, 2);
  utils.addItemToCart(pear);
  utils.addItemToCart(apple);
  utils.addItemToCart(orange);
  const totalCost = utils.getShoppingCartTotal();
  expect(totalCost).to.be.a("number");
  expect(totalCost).to.equal(
    pear.price + apple.price * apple.quantity + orange.price * orange.quantity
  );
});
