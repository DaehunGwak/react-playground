import {Country} from "../models/Country";
import {CountryActionBox, CountryItemWrapper, CountryName} from "../styles/CountriesViewStyle";

interface WannaGoCountriesViewProps {
  countries: Country[];
  addLikedCountryFromWent: (name: string) => void;
  addWannaGoCountryFromWent: (name: string) => void;
}

function WentCountriesView({
  countries,
  addLikedCountryFromWent,
  addWannaGoCountryFromWent,
}: WannaGoCountriesViewProps) {
  return (
    <>
      {
        countries.map((country) => <CountryItemWrapper key={`country.name-${crypto.randomUUID()}`}>
          <CountryName>{country.name}</CountryName>
          <CountryActionBox onClick={() => addLikedCountryFromWent(country.name)}>
            👍
          </CountryActionBox>
          <CountryActionBox onClick={() => addWannaGoCountryFromWent(country.name)}>
            ❌
          </CountryActionBox>
        </CountryItemWrapper>)
      }
    </>
  );
}

export default WentCountriesView;
