let message = "bop talk message"
let letter
let letterNum = 0
let bopTalkMessage = ""
while (letterNum < message.length) {
    letter = message.charAt(letterNum)
    if (((letter == "a" || letter == "e") || (letter == "i" || letter == "o")) || letter == "u") {
        bopTalkMessage = bopTalkMessage + " " + letter
    } else if (letter == " "){
        bopTalkMessage = bopTalkMessage
    } else {
        bopTalkMessage = bopTalkMessage + " " + letter + "op"
    }
    letterNum = letterNum + 1
}
console.log(bopTalkMessage)