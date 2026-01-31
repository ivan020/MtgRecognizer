

export function setLoading(isLoading) {
  const loadingEl = document.getElementById("loading");
  loadingEl.style.display = isLoading ? "block" : "none";
}

export async function makeRequest(formData, requestURL) {
  const response = await fetch(requestURL, {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    throw new Error("Server error: " + response.status);
  }

  return response.json();
}
