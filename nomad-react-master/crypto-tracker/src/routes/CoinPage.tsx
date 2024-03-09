import {Link, Outlet, useLocation, useMatch, useParams} from "react-router-dom";
import {Container, Header, Loader, Title} from "../styles/CoinCommonStyles";
import {useEffect, useState} from "react";
import axios from "axios";
import {CoinDetailResponse} from "../dto/CoinDetailResponse";
import {CoinPriceResponse} from "../dto/CoinPriceResponse";
import {
  CoinDetailCardContent,
  CoinDetailCardItem,
  CoinDetailCardTitle,
  CoinDetailCardWrapper,
  CoinDetailWrapper, Tab, TabWrapper
} from "../styles/CoinStyles";

type CoinPathParams = {
  coinId: string,
}

function CoinPage() {
  const {coinId} = useParams<CoinPathParams>();

  const [loading, setLoading] = useState<boolean>(false);
  const [coinDetail, setCoinDetail] = useState<CoinDetailResponse>();
  const [coinPrice, setCoinPrice] = useState<CoinPriceResponse>();

  const pricePathMatch = useMatch(":coinId/price");
  const chartPathMatch = useMatch(":coinId/chart");

  const {state} = useLocation();
  const simpleCoin = state?.simpleCoin;

  useEffect(() => {
    (async () => {
      const detailResponse = await axios.get<CoinDetailResponse>(`https://api.coinpaprika.com/v1/coins/${coinId}`);
      setCoinDetail(detailResponse.data);
      const priceResponse = await axios.get<CoinPriceResponse>(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
      setCoinPrice(priceResponse.data);
      setLoading(false);
    })();
  }, [coinId]);

  return (
    <Container>
      <Header>
        <Title>{simpleCoin?.name ?? coinDetail?.name ?? coinId}</Title>
      </Header>
      {
        loading
          ? <Loader>Loading...</Loader>
          : <CoinDetailWrapper>
            <CoinDetailCardWrapper>
              <CoinDetailCardItem>
                <CoinDetailCardTitle>RANK:</CoinDetailCardTitle>
                <CoinDetailCardContent>{coinDetail?.rank}</CoinDetailCardContent>
              </CoinDetailCardItem>
              <CoinDetailCardItem>
                <CoinDetailCardTitle>SYMBOL:</CoinDetailCardTitle>
                <CoinDetailCardContent>{coinDetail?.symbol}</CoinDetailCardContent>
              </CoinDetailCardItem>
              <CoinDetailCardItem>
                <CoinDetailCardTitle>OPEN SOURCE:</CoinDetailCardTitle>
                <CoinDetailCardContent>{coinDetail?.open_source ? "Yes" : "No"}</CoinDetailCardContent>
              </CoinDetailCardItem>
            </CoinDetailCardWrapper>
            <span>{coinDetail?.description}</span>
            <CoinDetailCardWrapper>
              <CoinDetailCardItem>
                <CoinDetailCardTitle>TOTAL SUPPLY:</CoinDetailCardTitle>
                <CoinDetailCardContent>{coinPrice?.total_supply}</CoinDetailCardContent>
              </CoinDetailCardItem>
              <CoinDetailCardItem>
                <CoinDetailCardTitle>MAX SUPPLY:</CoinDetailCardTitle>
                <CoinDetailCardContent>{coinPrice?.max_supply}</CoinDetailCardContent>
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
