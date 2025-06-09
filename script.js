const form = document.getElementById('assignment-form');
const assignmentName = document.getElementById('assignment-name');
const assignmentGrade = document.getElementById('assignment-grade');
const assignmentList = document.getElementById('assignment-list');
const gpaDisplay = document.getElementById('gpa');

let assignments = [];

// GPA Calculation Function
function calculateGPA() {
if (assignments.length === 0) return 0;
const total = assignments.reduce((sum, item) => sum + item.grade, 0);
return (total / assignments.length).toFixed(2);
}