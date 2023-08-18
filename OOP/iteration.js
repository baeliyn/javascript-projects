var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (var product of dairy) {
    console.log(product);
  }
}

logDairy();

const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (key of Object.keys(bird)) {
    console.log(key + ": " + bird[key]);
  }
}

birdCan();

function animalCan() {
  for (prop in bird) {
    console.log(prop + ": " + bird[prop]);
  }
}

animalCan();

/*let mappy = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);*/

logDairy = () => {
  var mappy = new Map();

  mappy.set("one", "first element");
  mappy.set("two", "second element");
  mappy.set(3, "third element");

  console.log(mappy.keys());
  for (let key of mappy.keys()) {
    console.log(key);
  }
}

logDairy();
