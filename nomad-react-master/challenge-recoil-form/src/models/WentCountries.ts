import {recoilPersist} from "recoil-persist";
import {atom} from "recoil";
import {Country} from "./Country";

const { persistAtom } = recoilPersist();

export const wentCountriesAtom = atom<Country[]>({
  key: "wentCountries",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
