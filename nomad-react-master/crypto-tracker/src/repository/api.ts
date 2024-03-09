import axios from "axios";

export async function fetchData<T>(apiUrl: string): Promise<T> {
  const response = await axios.get<T>(apiUrl);
  return response.data;
}
