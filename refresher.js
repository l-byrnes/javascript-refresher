// //1
// console.log('Hello world')

// //2
let x = 'How are you?'
// console.log(x)

// //3
let greeting = 'Hello'
let fName = 'Bob'
// console.log(greeting + ' ' + fName + '!')

// //4
let age = 13
// console.log('you are ' + age)

// //5
// console.log('In 10 years you will be ' + (age + 10))

//start of part 2


// if (fName == 'Bob'){
//     console.log('I knew it was you ' + fName)
// } else {
//     console.log('Hey ' + fName + ' you\'re not bob')
// }

// //11
// let iAmWearingABelt = false
// let iAmWearingGlasses = false

// if (iAmWearingABelt && iAmWearingGlasses){
//     console.log('Probably not Mr.Gorton')
// } else if (iAmWearingABelt && !iAmWearingGlasses){
//     console.log('Probably Mr.Gorton')
// } else (iAmWearingABelt || iAmWearingGlasses){
//     console.log('Probably just some dude')
// }

//start of part 3

//14
for (let i = 0; i < 6; i++) {
    console.log("comp sci is awesome!")
}

//15
for (let i = 0; i < 11; i++) {
    console.log(i)
}

//16&17
tellMeMyAge()
function tellMeMyAge() {
    console.log("You are " + age + " years old.")
}

//18
function makePizza(type, size) {
    console.log("One " + size + " " + type + " pizza coming up!")
}
makePizza("peperoni", "small")
makePizza("bacon", "medium")

//19
pricePizza("medium")
pricePizza("large")
function pricePizza(size) {
    if (size=="large"){
        let howMuchForAPizza=17
    } else if(size=="medium"){
        let howMuchForAPizza=15
    } else if(size=="small"){
        let howMuchForAPizza=13
    }
    console.log(howMuchForAPizza)
}


