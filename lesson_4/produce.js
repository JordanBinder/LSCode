let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};


function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}


selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }