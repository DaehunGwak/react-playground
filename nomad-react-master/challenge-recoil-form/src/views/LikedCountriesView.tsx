import {Country} from "../models/Country";
import {CountryActionBox, CountryItemWrapper, CountryName} from "../styles/CountriesViewStyle";

interface WannaGoCountriesViewProps {
  countries: Country[];
  addWentCountryFromLiked: (name: string) => void;
}

function LikedCountriesView({
  countries,
  addWentCountryFromLiked,
}: WannaGoCountriesViewProps) {
  return (
    <>
      {
        countries.map((country) =>
          <CountryItemWrapper key={`country.name-${crypto.randomUUID()}`}>
            <CountryName>{country.name}</CountryName>
            <CountryActionBox onClick={() => addWentCountryFromLiked(country.name)}>
              👎
            </CountryActionBox>
          </CountryItemWrapper>)
      }
    </>
  );
}

export default LikedCountriesView;
