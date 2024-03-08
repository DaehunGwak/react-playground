import {useParams} from "react-router-dom";

type CoinPathParams = {
  coinId: string,
}

function Coin() {
  const {coinId} = useParams<CoinPathParams>();

  return (
    <h1>Coin: {coinId}</h1>
  );
}

export default Coin;
