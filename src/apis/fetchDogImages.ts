import { randomSpecifiedDogImages, randomDogImages } from "../constants/url";
import axios from "axios";

type ResponseData = {
  message: string[];
  status: string;
};

export default async function fetchDogImages(
  name?: string
): Promise<ResponseData> {
  const url = name ? randomSpecifiedDogImages(name) : randomDogImages;
  const response = await axios.get(url);
  return response.data;
}
