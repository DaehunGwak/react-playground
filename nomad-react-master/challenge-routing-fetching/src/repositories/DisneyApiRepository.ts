import axios from "axios";
import {SimpleCharacterResponse} from "../dto/SimpleCharacterResponse";
import {DetailCharacterResponse} from "../dto/DetailCharacterResponse";

const DISNEY_API_BASE_URL: string = "https://disney_api.nomadcoders.workers.dev";
const CHARACTERS_PATH: string = "/characters";

export function getCharacters(): Promise<SimpleCharacterResponse[]> {
  return getData<SimpleCharacterResponse[]>(CHARACTERS_PATH);
}

export function getDetailCharacter(id: number): Promise<DetailCharacterResponse> {
  return getData<DetailCharacterResponse>(`${CHARACTERS_PATH}/${id}`);
}

async function getData<T>(path: string): Promise<T> {
  const response = await axios.get<T>(`${DISNEY_API_BASE_URL}${path}`);
  return response.data;
}
