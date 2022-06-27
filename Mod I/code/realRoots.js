let a = 4568, b = 90469, c = 45435;
const result = b * b - 4 * a * c;
if (result > 0) {
  var r1 = (-b + Math.pow(result, 0.5)) / (2 * a);
  var r2 = (-b - Math.pow(result, 0.5)) / (2 * a);
  console.log("The roots are " + r1 + " and " + r2);
} else if (result === 0) {
    var r1 = -b / (2 * a);
    console.log("The root is " + r1);
} else {
    console.log("no real roots.");
}



