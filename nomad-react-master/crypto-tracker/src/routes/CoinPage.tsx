import {Link, Outlet, useLocation, useMatch, useParams} from "react-router-dom";
import {Container, Header, Loader, Title} from "../styles/CoinCommonStyles";
import {CoinDetailResponse} from "../dto/CoinDetailResponse";
import {CoinPriceResponse} from "../dto/CoinPriceResponse";
import {
  CoinDetailCardContent,
  CoinDetailCardItem,
  CoinDetailCardTitle,
  CoinDetailCardWrapper,
  CoinDetailWrapper,
  Tab,
  TabWrapper
} from "../styles/CoinStyles";
import {useQuery} from "react-query";
import {fetchData} from "../repository/api";

type CoinPathParams = {
  coinId: string,
}

function CoinPage() {
  const {coinId} = useParams<CoinPathParams>();

  const {
    isLoading: isDetailLoading,
    data: detailData
  } = useQuery(`coinDetailApi-${coinId}`, () => fetchData<CoinDetailResponse>(`https://api.coinpaprika.com/v1/coins/${coinId}`))
  const {
    isLoading: isPriceLoading,
    data: priceData
  } = useQuery(`coinPriceApi-${coinId}`, () => fetchData<CoinPriceResponse>(`https://api.coinpaprika.com/v1/tickers/${coinId}`))

  const pricePathMatch = useMatch(":coinId/price");
  const chartPathMatch = useMatch(":coinId/chart");

  const {state} = useLocation();
  const simpleCoin = state?.simpleCoin;

  return (
    <Container>
      <Header>
        <Title>{simpleCoin?.name ?? detailData?.name ?? coinId}</Title>
      </Header>
      {
        (isDetailLoading || isPriceLoading)
          ? <Loader>Loading...</Loader>
          : <CoinDetailWrapper>
            <CoinDetailCardWrapper>
              <CoinDetailCardItem>
                <CoinDetailCardTitle>RANK:</CoinDetailCardTitle>
                <CoinDetailCardContent>{detailData?.rank}</CoinDetailCardContent>
              </CoinDetailCardItem>
              <CoinDetailCardItem>
                <CoinDetailCardTitle>SYMBOL:</CoinDetailCardTitle>
                <CoinDetailCardContent>{detailData?.symbol}</CoinDetailCardContent>
              </CoinDetailCardItem>
              <CoinDetailCardItem>
                <CoinDetailCardTitle>OPEN SOURCE:</CoinDetailCardTitle>
                <CoinDetailCardContent>{detailData?.open_source ? "Yes" : "No"}</CoinDetailCardContent>
              </CoinDetailCardItem>
            </CoinDetailCardWrapper>
            <span>{detailData?.description}</span>
            <CoinDetailCardWrapper>
              <CoinDetailCardItem>
                <CoinDetailCardTitle>TOTAL SUPPLY:</CoinDetailCardTitle>
                <CoinDetailCardContent>{priceData?.total_supply}</CoinDetailCardContent>
              </CoinDetailCardItem>
              <CoinDetailCardItem>
                <CoinDetailCardTitle>MAX SUPPLY:</CoinDetailCardTitle>
                <CoinDetailCardContent>{priceData?.max_supply}</CoinDetailCardContent>
              </CoinDetailCardItem>
            </CoinDetailCardWrapper>
          </CoinDetailWrapper>
      }
      <TabWrapper>
        <Tab $isActive={!!chartPathMatch}>
          <Link to={"chart"}>Chart</Link>
        </Tab>
        <Tab $isActive={!!pricePathMatch}>
          <Link to={"price"}>Price</Link>
        </Tab>
      </TabWrapper>

      <Outlet/>
    </Container>
  );
}

export default CoinPage;
