var studentName = prompt("Name?");
var period = ("Period?");
var score = 0;
for (var i = 0; i < 12; i++) {
    var _1a = Math.floor((Math.random() * 100) + 1)
    var _1b = Math.floor((Math.random() * 100) + 1)
    var stuAnswer = prompt(_1a + " + " + _1b + " = ");
    var answerKey = (_1a + _1b);
    console.log("Your answer is " + stuAnswer + ", the correct answer is " + answerKey + ".");
    alert("You answered " + stuAnswer + ".");
    if (stuAnswer == answerKey) {
        score = score + 1;
    }
}
var numPoss = i++;

console.log(studentName + ", your score is " + score + " out of " + numPoss + ".");
