import {useLocation, useParams} from "react-router-dom";
import {Container, Header, Loader, Title} from "../styles/CoinCommonStyles";
import {useState} from "react";
import {CoinResponse} from "../dto/CoinResponse";

type CoinPathParams = {
  coinId: string,
}

function Coin() {
  const {coinId} = useParams<CoinPathParams>();
  const [loading, setLoading] = useState<boolean>(false);
  const { state } = useLocation();
  const simpleCoin = state?.simpleCoin as CoinResponse;
  console.log(simpleCoin);

  return (
    <Container>
      <Header>
        <Title>Coin: {coinId}</Title>
      </Header>
      {
        loading
          ? <Loader>Loading...</Loader>
          : <div>{simpleCoin?.toString() ?? "unknown"}</div>
      }
    </Container>
  );
}

export default Coin;
