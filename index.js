const { hash } = window.location;
const message = atob(hash.replace("#", " "));

if (message) {
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const input = document.querySelector("#message-input");

  // btoa encrypts the message that the user enters in the input above
  const encrypted = btoa(input.value);
  // sets the input value displayed as the encrypted value
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
