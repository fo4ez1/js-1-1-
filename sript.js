let a = prompt("input a");
console.log(a);
let b = prompt("input b");
console.log(b);

if (a != 0) {
  let x = -b / a;

  console.log(x);
  alert(x);
} else {
  alert("нет решения");
}

let a1 = prompt("input a1");
let b1 = prompt("input b1");
let c1 = prompt("input c1");

if (a1 == 0) {
  let x1 = -b1 / c1;
  alert(x1);
}
if (c1 == 0) {
  alert("error");
} else {
  let z = b1 * b1 - 4 * a1 * c1;
  alert(z);
  if (z < 0) {
    alert("error");
  }
  else (z > 0) 
  let x2 = (-b1 + Math.sqrt(z)) / (2 * a1);
  alert(x2);
  let x3 = (-b1 - Math.sqrt(z)) / (2 * a1);
  alert(x3);
 
  }

