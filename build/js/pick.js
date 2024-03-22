const form = document.getElementById("form");


form.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target !== form) {
    let test = [];
    // loop and get value from the site
    document.querySelectorAll('[type="checkbox"]').forEach((item) => {
      if (item.checked === true) {
        test.push(item.value);
      }
    });
    console.log(test);
  }
});
