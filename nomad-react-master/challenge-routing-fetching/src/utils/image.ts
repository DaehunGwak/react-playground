import axios from "axios";

export async function isExistImageUrls(urls: string[]): Promise<boolean[]> {
  return await Promise.all(
    urls.map(url => isExistImageUrl(url))
  );
}

async function isExistImageUrl(url: string): Promise<boolean> {
  try {
    const response = await axios.head(url);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}
