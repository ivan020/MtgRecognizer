import { setLoading, makeRequest } from "./util.js";
import { populateOutput } from "./frameOutput.js";
import { compressImage } from "./imageUtils.js";

const MTG_URL = "https://mtgrecognizer.dpdns.org/card_data";

export default async function handleSubmit(event) {
    event.preventDefault();

    const fileInput = document.getElementById("file");
    const resultEl = document.getElementById("result");

    if (!fileInput.files.length) return;

    const file = fileInput.files[0];
    const compressed = await compressImage(file, 2048, 0.9);
    console.log("successfully compressed");
    const formData = new FormData();
    // formData.append("file", file);
    formData.append("file", compressed);

    try {
        setLoading(true);
        resultEl.textContent = "";

        const apiResponse = await makeRequest(formData, MTG_URL);
        populateOutput(resultEl, apiResponse);

    } catch (err) {
        resultEl.textContent = "Upload failed: " + err.message;
    } finally {
        setLoading(false);
    }
}
