import {recoilPersist} from "recoil-persist";
import {atom} from "recoil";
import {Country} from "./Country";

const { persistAtom } = recoilPersist();

export const likedCountriesAtom = atom<Country[]>({
  key: "likedCountries",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
