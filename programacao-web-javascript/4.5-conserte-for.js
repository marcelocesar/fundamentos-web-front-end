/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

// fix the for loop
/* for (x < 10; x++) {
    console.log(x);
} */

for (var x = 0; x < 10; x++) {
    (x === 5 || x === 9) ? console.log(x) : "";
}