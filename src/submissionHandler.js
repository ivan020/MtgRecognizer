import {setLoading, makeRequest} from "./util.js";
import { populateOutput } from "./frameOutput.js";

const MTG_URL = "http://mtgrecognizer.dpdns.org/card_data";

export default async function handleSubmit(event) {
  event.preventDefault();

  const fileInput = document.getElementById("file");
  const resultEl = document.getElementById("result");

  if (!fileInput.files.length) return;

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("file", file);

  try {
    setLoading(true);
    resultEl.textContent = "";

    const apiResponse = await makeRequest(formData, MTG_URL);
      console.log(apiResponse);
      populateOutput(resultEl, apiResponse);

  } catch (err) {
    resultEl.textContent = "Upload failed: " + err.message;
  } finally {
    setLoading(false);
  }
}
