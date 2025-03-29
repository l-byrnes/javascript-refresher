let names = ["Lilly", "Ady", "Micah", "Olivia", "Tyler"]
console.log(names)
names.unshift("Mr.Gorton")
console.log(names)

console.log("The second value is " + names[1] + ".")

printAllNames(false)
console.log("--")
printAllNames(true)

function printAllNames(hi) {
    if (hi) {
        names.sort()
    }
    for (let i = 0; i < names.length; i++) {
        console.log(names[i])
    }
}