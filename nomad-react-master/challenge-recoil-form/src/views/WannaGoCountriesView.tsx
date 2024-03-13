import {Country} from "../models/Country";
import {CountryActionBox, CountryItemWrapper, CountryName} from "../styles/CountriesViewStyle";

interface WannaGoCountriesViewProps {
  countries: Country[];
  addWentCountryFromWannaGo: (name: string) => void;
  removeWannagoCountry: (name: string) => void;
}

function WannaGoCountriesView({
  countries,
  addWentCountryFromWannaGo,
  removeWannagoCountry,
}: WannaGoCountriesViewProps) {
  return (
    <>
      {
        countries.map((country) => <CountryItemWrapper key={`country.name-${crypto.randomUUID()}`}>
          <CountryName>{country.name}</CountryName>
          <CountryActionBox onClick={() => addWentCountryFromWannaGo(country.name)}>
            ✅
          </CountryActionBox>
          <CountryActionBox onClick={() => removeWannagoCountry(country.name)}>
            🗑️
          </CountryActionBox>
        </CountryItemWrapper>)
      }
    </>
  );
}

export default WannaGoCountriesView;
