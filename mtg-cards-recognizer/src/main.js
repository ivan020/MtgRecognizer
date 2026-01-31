import './style.css'
import handleSubmit from "./submissionHandler.js";

document.querySelector('#app').innerHTML = `
  <div>
    <form id="upload">
      <label for="file">File to upload</label>
      <input type="file" id="file" accept="image/*">
      <button type="submit">Upload</button>
    </form>

    <div id="loading" class="spinner" style="display:none;"></div>
    <pre id="result"></pre>
  </div>
`;

//grab the form data
const form = document.querySelector('#upload');

// Register submit handler
form.addEventListener("submit", handleSubmit);
