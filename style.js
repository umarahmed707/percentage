let Student_Name="Umer Ahmed"
let Class="10th"
let Total=900
let Age =21
let percentage=80
let Grade= ""


if(percentage>=80){
Grade="A+"
}else if(percentage>=70){
Grade="A"
}else if(percentage>=60){
Grade="B"
}else if(percentage>=50){
Grade="c"
}else{
    Grade="Failed"
}
alert("Student_Name :" + Student_Name+"\n" +
    "Class :"+Class+"\n"+
    "Total :" +Total + "\n"+
    "Age :"+Age+"\n"+
    "percentage :"+percentage+"\n"+
    "Grade :"+Grade
)