let Student_Name = prompt("Enter The Student Name");
let Class = prompt("Enter the Class");
let TotalMarks = 100;
let ObtainedMarks = parseFloat(prompt("Enter the Obtained Marks"));
let Age = prompt("Enter the age");
let Grade = "";

let percentage = (ObtainedMarks / TotalMarks) * 100;

if (percentage >= 80) {
    Grade = "A+";
} else if (percentage >= 70) {
    Grade = "A";
} else if (percentage >= 60) {
    Grade = "B";
} else if (percentage >= 50) {
    Grade = "C";
} else {
    Grade = "Failed";
}

alert(
    "Student Name: " + Student_Name + "\n" +
    "Class: " + Class + "\n" +
    "Total Marks: " + TotalMarks + "\n" +
    "Obtained Marks: " + ObtainedMarks + "\n" +
    "Age: " + Age + "\n" +
    "Percentage: " + percentage + "%\n" +
    "Grade: " + Grade
);
