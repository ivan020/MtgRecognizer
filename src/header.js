export function createHeader() {
    const header = document.createElement("header");
    header.className = "app-header";

    const logo = document.createElement("img");
    logo.src = new URL("../public/assets/logo.png", import.meta.url).href;
    logo.alt = "Magic the Gathering";
    logo.className = "app-logo";

    const titleBox = document.createElement("div");
    titleBox.className = "app-title";

    const title = document.createElement("h1");
    title.textContent = "Magic the Gathering Card Recognizer";

    const subtitle = document.createElement("p");
    subtitle.textContent = "Upload a card image to identify and price it";

    titleBox.appendChild(title);
    titleBox.appendChild(subtitle);

    header.appendChild(logo);
    header.appendChild(titleBox);

    return header;
}

