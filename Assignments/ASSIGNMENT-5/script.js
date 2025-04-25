function generateMarksheet() {
    const roll = document.getElementById('roll').value;

    // Predefined student data
    const studentData = {
        "101": {
            name: "Tanisha Sharma",
            subject1: 85,
            subject2: 90,
            subject3: 78,
            subject4: 88,
            subject5: 92
        },
        "102": {
            name: "Rahul Verma",
            subject1: 75,
            subject2: 80,
            subject3: 68,
            subject4: 72,
            subject5: 85
        },
        "103": {
            name: "Priya Singh",
            subject1: 95,
            subject2: 88,
            subject3: 92,
            subject4: 89,
            subject5: 94
        }
    };

    // Check if roll number exists in predefined data
    if (studentData[roll]) {
        const student = studentData[roll];
        const total = student.subject1 + student.subject2 + student.subject3 + student.subject4 + student.subject5;
        const percentage = (total / 500) * 100;
        const result = percentage >= 40 ? "Pass" : "Fail";

        let division = "";
        if (percentage >= 60) {
            division = "First Division";
        } else if (percentage >= 50) {
            division = "Second Division";
        } else if (percentage >= 40) {
            division = "Third Division";
        } else {
            division = "Fail";
        }

        // Populate marksheet
        document.getElementById('marksheet-name').textContent = student.name;
        document.getElementById('marksheet-roll').textContent = roll;
        document.getElementById('marksheet-subject1').textContent = student.subject1;
        document.getElementById('marksheet-subject2').textContent = student.subject2;
        document.getElementById('marksheet-subject3').textContent = student.subject3;
        document.getElementById('marksheet-subject4').textContent = student.subject4;
        document.getElementById('marksheet-subject5').textContent = student.subject5;
        document.getElementById('marksheet-total').textContent = total;
        document.getElementById('marksheet-percentage').textContent = percentage.toFixed(2);
        document.getElementById('marksheet-result').textContent = result;
        document.getElementById('marksheet-division').textContent = division;

        document.getElementById('marksheet').style.display = 'block';
    } else {
        alert('Roll number not found. Please enter a valid roll number.');
    }
}