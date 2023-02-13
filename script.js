const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (input.value.length >= 3) {
    alert(`Hello ${input.value}`.toUpperCase());
    input.value = "";
  } else {
    alert("Your name too short");
    input.value = "";
  }
});
