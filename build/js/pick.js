const form = document.getElementById("form");

form.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll('[type="checkbox"]').forEach((item) => {
    if (item.checked === true) {
      console.log("working");
    }
  });
});
