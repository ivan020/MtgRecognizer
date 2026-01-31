import "./style.css";
import handleSubmit from "./submissionHandler.js";
import { createHeader } from "./header.js";

const app = document.querySelector("#app");
app.innerHTML = ""; // Clear Vite placeholder

app.appendChild(createHeader());

// Upload form
const form = document.createElement("form");
form.id = "upload";
form.innerHTML = `
  <label for="file">File to upload</label>
  <input type="file" id="file" accept="image/*">
  <button type="submit">Upload</button>
`;
app.appendChild(form);

const spinner = document.createElement("div");
spinner.id = "loading";
spinner.className = "spinner";
spinner.style.display = "none";
app.appendChild(spinner);

const result = document.createElement("div");
result.id = "result";
app.appendChild(result);

form.addEventListener("submit", handleSubmit);
