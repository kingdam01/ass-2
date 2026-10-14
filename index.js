let age = 17
let score = 65
if (age >= 16 && score >= 50) {
    console.log("Congratulations! You are qualified for admission");
    
}
else if (age >=16 && score < 50) {
    console.log("Sorry, your score is to low");
    
}
else if (age < 16 || score < 30) {
    console.log("You do  not meet the admission requirements");
    
}
else {
    console.log("Please check your admission details");
    
}