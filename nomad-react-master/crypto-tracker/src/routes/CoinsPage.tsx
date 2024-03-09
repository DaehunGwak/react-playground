import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {CoinResponse} from "../dto/CoinResponse";
import {Container, Header, Loader, Title} from "../styles/CoinCommonStyles";
import {Coin, CoinsUnorderedList, CoinWrapper, Img} from "../styles/CoinsStyles";

function CoinsPage() {
  const [coins, setCoins] = useState<CoinResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const response = await axios.get<CoinResponse[]>("https://api.coinpaprika.com/v1/coins");
      setCoins(response.data.slice(0, 100));
      setLoading(false);
    })()
  }, []);


  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {
        loading
          ? <Loader>Loading...</Loader>
          : <CoinsUnorderedList>
            {
              coins.map((coin) => (
                <Coin key={coin.id}>
                  <Link to={`/${coin.id}`} state={{simpleCoin: coin}}>
                    <CoinWrapper>
                      <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                      <span>{coin.name} &rarr;</span>
                    </CoinWrapper>
                  </Link>
                </Coin>)
              )
            }
          </CoinsUnorderedList>
      }
    </Container>
  );
}

export default CoinsPage;
