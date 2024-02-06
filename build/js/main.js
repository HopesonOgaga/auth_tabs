const email_address = document.getElementById("email-address");
const name_info = document.getElementById("name");
const phone_number = document.getElementById("phone-number");
const submit = document.getElementById("form-submit");

// storage function

function store(e) {
  e.preventDefault();
  // get value
  const user_info = {
    email: email_address.value,
    user_name: name_info.value,
    phone_num: phone_number.value,
  };
  console.log(user_info);

  localStorage.setItem("user_info", JSON.stringify(user_info));
  // load next page

  location.href = "./plan.html";
}

submit.addEventListener("submit", store);

// localStorage.getItem(JSON.parse('user_info'))
