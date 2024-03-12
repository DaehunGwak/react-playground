import {Link, useOutletContext} from "react-router-dom";
import {CoinResponse} from "../dto/CoinResponse";
import {Container, Header, Loader, Title} from "../styles/CoinCommonStyles";
import {Coin, CoinsUnorderedList, CoinWrapper} from "../styles/CoinsStyles";
import {useQuery} from "react-query";
import {fetchData} from "../repository/api";

interface ThemeContextProps {
  toggleTheme: () => void;
}

function CoinsPage() {
  const {isLoading, data} =
    useQuery("coinsApi", () => fetchData<CoinResponse[]>("https://api.coinpaprika.com/v1/coins"));
  const {toggleTheme} = useOutletContext<ThemeContextProps>();

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </Header>
      {
        isLoading
          ? <Loader>Loading...</Loader>
          : <CoinsUnorderedList>
            {
              data!.slice(0, 100).map((coin) => (
                <Coin key={coin.id}>
                  <Link to={`/${coin.id}`} state={{simpleCoin: coin}}>
                    <CoinWrapper>
                      {/*<Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>*/}
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
