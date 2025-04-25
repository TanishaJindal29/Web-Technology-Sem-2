let p = function (a, b) {
  console.log(a + b);
};
p(10, 5);

let a = () => {
  console.log("hello");
};
a();
let b = (a, b) => {
  return a + b;
};
console.log(b(10, 9));
