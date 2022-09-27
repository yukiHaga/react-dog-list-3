export const DOG_IMAGES_URL = "https://dog.ceo/api";

export const IMAGES_COUNT = 9;
export const randomSpecifiedDogImages = (name: string) =>
  `${DOG_IMAGES_URL}/breed/${name}/images/random/${IMAGES_COUNT}`;

export const randomDogImages = `${DOG_IMAGES_URL}/breeds/image/random/${IMAGES_COUNT}`;
