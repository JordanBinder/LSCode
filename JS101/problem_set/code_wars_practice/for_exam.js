run();

function run() {
  wasCalled();
  return function wasCalled() { return true; };
}