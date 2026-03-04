const BASE_URL = "https://api.coingecko.com/api/v3";

export async function fetchTopCoins() {
  const res = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1`
  );

  return await res.json();
}