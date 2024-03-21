const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

type ImageType = "w500" | "original";

export function createImageUrl(path: string, type: ImageType = "w500") {
  return `${IMAGE_BASE_URL}/${type}/${path}`;
}
