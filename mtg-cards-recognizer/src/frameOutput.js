// everything we need to create a nicely looking output 

export function populateOutput(resultsChildNode, outputJson) {
  const card = outputJson.bestMatch;

  const {
    cardName,
    rarity,
    collectorNumber,
    priceNormal,
    priceFoil,
    pngLink
  } = card;

  resultsChildNode.innerHTML = "";

  const layout = document.createElement("div");
  layout.className = "card-layout";

  const img = document.createElement("img");
  img.src = pngLink;
  img.alt = cardName;
  img.id = "cardImage";

  const info = document.createElement("div");
  info.id = "cardInfo";

  info.innerHTML = `
    <h2>${cardName}</h2>
    <p><strong>Rarity:</strong> ${rarity}</p>
    <p><strong>Collector #:</strong> ${collectorNumber}</p>
    <p><strong>Price (Normal):</strong> $${priceNormal ?? "N/A"}</p>
    <p><strong>Price (Foil):</strong> $${priceFoil ?? "N/A"}</p>
  `;

  layout.appendChild(img);
  layout.appendChild(info);

  resultsChildNode.appendChild(layout);
}

