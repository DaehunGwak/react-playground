import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsUnorderedList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;

  a {
    transition: color 0.2s ease-in;
    display: block; /* TODO: block 이 왜 상위 까지 다 링크로 만드는지 이해할 필요 있음 */
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor}
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 32px;
  font-weight: bold;
`;

const Loader = styled.div`
  text-align: center;
`;

interface CoinResponse {
  id: string,
  name: string;
  symblk: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
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
          ? <Loader>"Loading..."</Loader>
          : <CoinsUnorderedList>
            {
              coins.map((coin) => (
                <Coin key={coin.id}>
                  <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
                </Coin>)
              )
            }
          </CoinsUnorderedList>
      }
    </Container>
  );
}

export default Coins;
