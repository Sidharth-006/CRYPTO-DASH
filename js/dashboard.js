import { fetchTopCoins } from "./api.js";
import { formatCurrency, shortenNumber } from "./utils.js";

const cardGrid = document.getElementById("cardGrid");
const loading = document.getElementById("loading");
const searchInput = document.getElementById("searchInput");

let allCoins = [];

async function loadDashboard() {
  const coins = await fetchTopCoins();
  allCoins = coins;
  displayCoins(coins);
  loading.style.display = "none";
}

function displayCoins(coins) {
  cardGrid.innerHTML = "";

  if (coins.length === 0) {
    cardGrid.innerHTML = "<p>No coin found.</p>";
    return;
  }

  coins.forEach(coin => {
    const card = document.createElement("div");
    card.className = "dashboard-card";

    card.innerHTML = `
      <div class="coin-header">
        <img src="${coin.image}" width="30">
        <h3>${coin.name}</h3>
      </div>
      <p>Price: ${formatCurrency(coin.current_price)}</p>
      <p>Market Cap: ${shortenNumber(coin.market_cap)}</p>
      <p class="${coin.price_change_percentage_24h >= 0 ? "positive" : "negative"}">
        24h: ${coin.price_change_percentage_24h.toFixed(2)}%
      </p>
    `;

    cardGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = allCoins.filter(coin =>
    coin.name.toLowerCase().includes(value)
  );
  displayCoins(filtered);
});

loadDashboard();