// Button ko JS me pakad rahe hain (index.html me id="theme-toggle" hai)
const button = document.getElementById("theme-toggle");
 
// Click hone pe body se "light" class lagao ya hatao
button.addEventListener("click", function () {
  document.body.classList.toggle("light");
 
  // Button ka text bhi badal do
  if (document.body.classList.contains("light")) {
    button.textContent = "Dark";
  } else {
    button.textContent = "Light";
  }
});

const topBtn = document.getElementById("top-btn");

// Scroll karne pe check kar: 300px se neeche aaye to button dikha, warna chhupa
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// Click pe smoothly sabse upar le ja
topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
 
// constant form 
const form = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", function (event) {
  event.preventDefault();   // page reload hone se roko

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || message === "") {
    formMsg.textContent = "Please fill in both fields.";
  } else {
    formMsg.textContent = "Thanks, " + name + "! (Form works, sending not set up yet.)";
    form.reset();           // fields saaf kar do
  }
});

