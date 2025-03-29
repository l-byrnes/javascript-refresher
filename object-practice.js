let student1 = { fName: "Sue", lName: "Smith", gpa: 2.9, volleyball: true }

console.log("I know " + student1.fName, student1.lName)

let student2 = { fName: "Bob", lName: "Hurtado", gpa: 3.8, volleyball: false }

if (student1.volleyball) {
    console.log(student1.fName + " does play volleyball")
} else {
    console.log(student1.fName + " does not play volleyball")
}

let students = [student1]
students.push(student2)

console.log(students)
student1.fName = "stew"
student2.fname="fred"

students.push({ fName: "hsfd", lName: "Doyle", gpa: 3.4, volleyball: true })
console.table(students)

students[students.length-1].gpa+=0.5
console.table(students)