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

// Handle Form Submission
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = assignmentName.value.trim();
  const grade = parseFloat(assignmentGrade.value);

  if (!name || isNaN(grade) || grade < 0 || grade > 5) {
    alert("Please enter valid assignment name and grade (0-5)");
    return;
  }

  const newAssignment = { name, grade };
  assignments.push(newAssignment);

  // Update GPA and Assignment List
  renderAssignments();
  updateGPA();

  // Clear form
  assignmentName.value = '';
  assignmentGrade.value = '';
});

// Render Assignments
function renderAssignments() {
  assignmentList.innerHTML = '';
  assignments.forEach((a, i) => {
    const li = document.createElement('li');
    li.textContent = `${a.name}: ${a.grade}/5`;
    assignmentList.appendChild(li);
  });
}

// Update GPA
function updateGPA() {
  gpaDisplay.textContent = calculateGPA();
}

// Log assignments on "S" key press
document.addEventListener('keydown', function (e) {
  if (e.key.toLowerCase() === 's') {
    console.log(assignments);
  }
});


// Load saved data
window.addEventListener('load', () => {
  const saved = localStorage.getItem('assignments');
  if (saved) {
    assignments = JSON.parse(saved);
    renderAssignments();
    updateGPA();
  }
});

// Save on update
function saveToStorage() {
  localStorage.setItem('assignments', JSON.stringify(assignments));
}

// Call saveToStorage on submit
form.addEventListener('submit', function () {
  saveToStorage();
});
