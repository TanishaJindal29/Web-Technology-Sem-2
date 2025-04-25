function generateMarksheet() {
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
    const subject4 = parseInt(document.getElementById('subject4').value);
    const subject5 = parseInt(document.getElementById('subject5').value);

    if (name && roll && !isNaN(subject1) && !isNaN(subject2) && !isNaN(subject3) && !isNaN(subject4) && !isNaN(subject5)) {
        const total = subject1 + subject2 + subject3 + subject4 + subject5;
        const percentage = (total / 500) * 100;
        const result = percentage >= 40 ? "Pass" : "Fail";

        document.getElementById('marksheet-name').textContent = name;
        document.getElementById('marksheet-roll').textContent = roll;
        document.getElementById('marksheet-subject1').textContent = subject1;
        document.getElementById('marksheet-subject2').textContent = subject2;
        document.getElementById('marksheet-subject3').textContent = subject3;
        document.getElementById('marksheet-subject4').textContent = subject4;
        document.getElementById('marksheet-subject5').textContent = subject5;
        document.getElementById('marksheet-total').textContent = total;
        document.getElementById('marksheet-percentage').textContent = percentage.toFixed(2);
        document.getElementById('marksheet-result').textContent = result;

        document.getElementById('marksheet').style.display = 'block';
    } else {
        alert('Please fill out all fields with valid marks.');
    }
}