const btn = document.getElementById("heart");

btn.addEventListener("click", function handleClick() {
  const initialText = "♡";

  if (btn.textContent.includes(initialText)) {
    btn.textContent = "♥";
  } else {
    btn.textContent = initialText;
  }
});
