function repeater(string) {
  let arr = string.split("");

  for (let idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx].repeat(2);
  }

  let result = arr.join("");

  console.log(result);
}

repeater('Hello');        // "HHeelllloo"

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""