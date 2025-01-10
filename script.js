function submitSignup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (email && password) {
        alert(`Sign Up Successful!
Email: ${email}`);
        document.getElementById('signupFormContainer').style.display = 'none';
        document.getElementById('profileFormContainer').style.display = 'block';
    } else {
        alert('Please fill in all required fields.');
    }
}

function submitProfile() {
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const bio = document.getElementById('bio').value;

    if (name && gender && dob) {
        alert(`Profile Created!

Name: ${name}
Gender: ${gender}
DOB: ${dob}
Bio: ${bio}`);
    } else {
        alert('Please fill in all required fields.');
    }
}
