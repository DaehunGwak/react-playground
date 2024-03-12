import {atom} from "recoil";
import {Country} from "./Country";
import {recoilPersist} from "recoil-persist";

const { persistAtom } = recoilPersist();

export const wannaGoCountriesAtom = atom<Country[]>({
  key: "wannaGoCountries",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
