//Fizz Buzz In Class
let fizz = 0
let buzz = 0
let fizzBuzz = 0

while (fizzes<1000) {

    if (i % 15 == 0) {
        console.log(i + " fizz buzz")
        fizzBuzz = fizzBuzz + 1
    } else if (i % 3 == 0) {
        console.log(i + " fizz")
        fizz = fizz + 1
    } else if (i % 5 == 0) {
        console.log(i + " buzz")
        buzz = buzz + 1
    } else {
        console.log(i)
    }
}

console.log("There were " + fizz + " fizz's, " + buzz + " buzz's, and " + fizzBuzz + " fizzbuzz's out of " + maxNumber + ".")

