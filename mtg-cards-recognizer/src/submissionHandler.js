export default function handleSubmit(event) {
  event.preventDefault();

  const fileInput = document.getElementById("file");

  if (!fileInput.files.length) return;

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    console.log("Loaded image:", e.target.result);
  };

  reader.readAsDataURL(file);
}
