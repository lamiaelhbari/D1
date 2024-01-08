let firstName = "Lamia";
let lastName = "ElHbari";
const PI = 3.14;
let radius = 5;
let favoriteSuperhero = " Aquaman";
let favoriteQuote = " Never Give Up";

const fullName = firstName + " " + lastName;

//--------------1 Name:: -----------------//
console.log(fullName);

//--------------2 Maths: -----------------//

let radius1 = radius * radius;
let area = PI * radius1;
console.log(area);
let perimeter = 2 * PI * radius;
console.log(perimeter);

//--------------3 Motivation: -----------------//

let motivation = favoriteSuperhero + "" + favoriteQuote;
console.log(motivation);
//--------------Task 3 :  Variable swap: -----------------//
let a = 3;
let b = 10;
let oldValue = a;
a = b;
b = oldValue;

console.log("Après l'échange : a = ", a, " et b = ", b);

/* ----------- Task 1 : Even or Odd ------------ */

let numberToCheck = 6;
if (numberToCheck % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

/* ----------- Task 2 :  Days of the week ------------ */
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednsday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Sunday");
}

/* ----------- Task 3 : Maximum  ------------ */
let c = -15;
let d = 6;
let e = 2.6;
const MaxNumber = "Hi";
const MaxNumberLength = MaxNumber.length;
console.log(Math.max(c, d, e));

/* ----------- Task 4 : The Teacher  ------------ */

let score = 83;
if (score >= 85) {
  console.log("grade is A");
} else if (score <= 85 && score >= 70) {
  console.log("grade is B");
} else if (score <= 70 && score >= 55) {
  console.log("grade is C");
} else if (score <= 55 && score >= 40) {
  console.log("grade is D");
} else if (score <= 40 && score >= 15) {
  console.log("grade is E");
} else {
  console.log("grade is F");
}
