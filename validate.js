function validate() {
  // get values
  const username = document.getElementById("usernamee").value.trim();
  const pswd = document.getElementById("pswd").value;
  const cnfrm = document.getElementById("cnfrmpswd").value;
  const dob = document.getElementById("dob").value;
  const qualification = document.getElementById("qualification").value;
  const skills = document.getElementById("Skills").value;
  const email = document.getElementById("email").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const phone = document.getElementById("phnno").value.trim();
  const address = document.getElementById("address").value.trim();
  const shift = document.querySelector('input[name="shift"]:checked');

  // username
  if (username === "") {
    alert("Username is required");
    return false;
  }

  // password
  if (pswd.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  if (pswd !== cnfrm) {
    alert("Passwords do not match");
    return false;
  }

  // DOB (YYYY-MM-DD)
  const dobPattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!dobPattern.test(dob)) {
    alert("Enter DOB in format YYYY-MM-DD");
    return false;
  }

  // qualification
  if (qualification === "") {
    alert("Please select qualification");
    return false;
  }

  // skills
  if (skills === "") {
    alert("Please select a skill");
    return false;
  }

  // email (basic check)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Enter a valid email");
    return false;
  }

  // gender
  if (!gender) {
    alert("Please select gender");
    return false;
  }

  // phone number (10 digits)
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Enter a valid 10-digit mobile number");
    return false;
  }

  // address
  if (address === "") {
    alert("Address is required");
    return false;
  }

  // preferred shift
  if (!shift) {
    alert("Please select a preferred shift");
    return false;
  }

  // all good 🎉
  return true;
}
