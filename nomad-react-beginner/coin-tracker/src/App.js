import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState({});
  const [usd, setUsd] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setSelectedCoin(json[0]);
      });
  }, []);

  const onSelectedCoinChange = (event) => setSelectedCoin(coins[event.target.value]);

  const onUsdChange = (event) => setUsd(event.target.value);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading
        ? <strong>Loading</strong>
        : <div>
          <select onChange={onSelectedCoinChange}>
            {
              coins.map((coin, index) => (
                <option value={index} key={coin.id}>
                  {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                </option>
              ))
            }
          </select>
          <hr/>
          <div>
            <input
              value={usd}
              onChange={onUsdChange}
              type="number"
              disabled={loading}
              placeholder="변환을 원하시는 USD를 입력해주세요."
            />
          </div>
          <div>
            <strong>{selectedCoin.name} ({selectedCoin.symbol}): {usd / selectedCoin.quotes.USD.price}</strong>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
