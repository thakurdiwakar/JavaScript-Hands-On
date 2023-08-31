let myGrades = {
  sem1: {
    cgpa: 9.45,
    sgpa: 9.45,
  },
  sem2: {
    cgpa: 9.46,
    sgpa: 9.46,
  },
  sem3: {
    cgpa: 9.44,
    sgpa: 9.44,
  },
  sem4: {
    cgpa: 9.42,
    sgpa: 9.42,
  },
};

console.log(myGrades);
console.log(myGrades.sem1);
console.log(myGrades.sem2);
console.log(myGrades.sem3);
console.log(myGrades.sem4);
console.log("The cgpa of sem 4 : ",myGrades.sem4.cgpa);

myGrades.sem1.cgpa=9.54;
console.log(myGrades.sem1);

