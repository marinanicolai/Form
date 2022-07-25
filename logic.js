function myfunction(event) {
    event.preventDefault();
    const userBox = document.getElementById("name");
    const userBoxLastName = document.getElementById("lastname");
    let gender = document.getElementsByName("gender");
    let userName = document.getElementById("name").value;
    let userLast = document.getElementById("lastname").value;
    let city = document.getElementById("city").value;
    console.log(gender);
  
    let nameError = document.getElementById("nameError");
    let lastNameError = document.getElementById("lastNameError");
    let cityError = document.getElementById("cityError");
    let genderError = document.getElementById("genderError");
    const cityBox = document.getElementById("city");
  
    if (userName == "") {
      nameError.innerHTML = "enter your name";
      nameError.style.color = "red";
      userBox.style.border = "1px solid red";
    }
  
    if (userLast == "") {
      lastNameError.innerHTML = "enter your last name";
      lastNameError.style.color = "red";
      userBoxLastName.style.border = "1px solid red";
    }
  
    if (city == 0) {
      cityError.style.color = "red";
      cityBox.style.border = "1px solid red";
      cityError.innerHTML = "choose the city";
      return false;
    }
    let gender = document.getElementsByName("gender");
    if (!(gender[0].checked || gender[1].checked || gender[2].checked)) {
      genderError.innerHTML = "select your gender please";
      genderError.style.color = "red";
      return false;
    }
  }
  