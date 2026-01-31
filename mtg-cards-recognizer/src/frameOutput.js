// set of functions that drive the recognition process

const mainCard = (bestMatchObj) => {
  const layout = document.createElement("div");
  layout.className = "card-layout";

  const img = document.createElement("img");
  img.id = "cardImage";
  img.src = bestMatchObj.pngLink;
  img.alt = bestMatchObj.cardName;

  const info = document.createElement("div");
  info.id = "cardInfo";
  info.innerHTML = `
    <h2>${bestMatchObj.cardName}</h2>
    <p><strong>Rarity:</strong> ${bestMatchObj.rarity}</p>
    <p><strong>Collector #:</strong> ${bestMatchObj.collectorNumber}</p>
    <p><strong>Price (Normal):</strong> $${bestMatchObj.priceNormal ?? "N/A"}</p>
    <p><strong>Price (Foil):</strong> $${bestMatchObj.priceFoil ?? "N/A"}</p>
  `;

  layout.appendChild(img);
  layout.appendChild(info);
  return layout;
};

const alternativeMatchesCards = (matchingOptions, bestMatch, resultsChildNode) => {
  const altWrapper = document.createElement("div");
  altWrapper.className = "alt-matches";

  const title = document.createElement("h3");
  title.textContent = "Other closely matching cards:";
  altWrapper.appendChild(title);

  matchingOptions.forEach(card => {
    const btn = document.createElement("button");
    btn.textContent = `${card.cardName} (${card.cardSet})`;

    btn.onclick = () => {
      const newOtherMatches = matchingOptions
        .filter(c => c.collectorNumber !== card.collectorNumber)
        .concat(bestMatch);

      populateOutput(resultsChildNode, {
        bestMatch: card,
        otherMatches: newOtherMatches
      });
    };

    altWrapper.appendChild(btn);
  });

  return altWrapper;
};

export function populateOutput(resultsChildNode, outputJson) {
  const { bestMatch, otherMatches = [] } = outputJson;

  resultsChildNode.innerHTML = "";
  resultsChildNode.appendChild(mainCard(bestMatch));

  if (otherMatches.length) {
    resultsChildNode.appendChild(
      alternativeMatchesCards(otherMatches, bestMatch, resultsChildNode)
    );
  }
}

