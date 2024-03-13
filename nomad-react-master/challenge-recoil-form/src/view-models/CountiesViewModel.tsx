import {CountriesBox, CountriesHeaderText, CountriesWrapper} from "../styles/CountiesViewModelStyle";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {Country} from "../models/Country";
import {wannaGoCountriesAtom} from "../models/WannaGoCountires";
import CountryInputFormView from "../views/CountryInputFormView";
import WannaGoCountriesView from "../views/WannaGoCountriesView";
import {wentCountriesAtom} from "../models/WentCountries";
import WentCountriesView from "../views/WentCountriesView";
import {likedCountriesAtom} from "../models/LikedCountries";
import LikedCountriesView from "../views/LikedCountriesView";

function CountiesViewModel() {
  const wannaGoCountries = useRecoilValue<Country[]>(wannaGoCountriesAtom);
  const setWannaGoCountries = useSetRecoilState<Country[]>(wannaGoCountriesAtom);
  const wentCountries = useRecoilValue<Country[]>(wentCountriesAtom);
  const setWentCountries = useSetRecoilState<Country[]>(wentCountriesAtom);
  const likedCountries = useRecoilValue<Country[]>(likedCountriesAtom);
  const setLikedCountries = useSetRecoilState<Country[]>(likedCountriesAtom);

  const addWannaGoCountry = (name: string) => {
    setWannaGoCountries((current) => [...current, {name}]);
  };

  const addWentCountryFromWannaGo = (name: string) => {
    setWannaGoCountries((current) => current.filter(country => country.name !== name));
    setWentCountries((current) => [...current, {name}]);
  };

  const removeWannaGoCountries = (name: string) => {
    setWannaGoCountries((current) => current.filter(country => country.name !== name));
  };

  const addLikedCountryFromWent = (name: string) => {
    setWentCountries((current) => current.filter(country => country.name !== name));
    setLikedCountries((current) => [...current, {name}]);
  };

  const addWannaGoCountryFromWent = (name: string) => {
    setWentCountries((current) => current.filter(country => country.name !== name));
    setWannaGoCountries((current) => [...current, {name}]);
  };

  const addWentCountryFromLiked = (name: string) => {
    setLikedCountries((current) => current.filter(country => country.name !== name));
    setWentCountries((current) => [...current, {name}]);
  };

  return (
    <CountriesWrapper>
      <CountriesBox>
        <CountriesHeaderText>내가 가고 싶은 나라들</CountriesHeaderText>
        <CountryInputFormView
          addWannaGoCountry={addWannaGoCountry}
        />
        <WannaGoCountriesView
          countries={wannaGoCountries}
          addWentCountryFromWannaGo={addWentCountryFromWannaGo}
          removeWannagoCountry={removeWannaGoCountries}
        />

        <CountriesHeaderText>내가 가본 나라들</CountriesHeaderText>
        <WentCountriesView
          countries={wentCountries}
          addLikedCountryFromWent={addLikedCountryFromWent}
          addWannaGoCountryFromWent={addWannaGoCountryFromWent}
        />

        <CountriesHeaderText>내가 좋아하는 나라들</CountriesHeaderText>
        <LikedCountriesView
          countries={likedCountries}
          addWentCountryFromLiked={addWentCountryFromLiked}
        />
      </CountriesBox>
    </CountriesWrapper>
  );
}

export default CountiesViewModel;
