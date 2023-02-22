import { APIs } from "@/constants/apis";
import { AddGallery } from "@/types/Api";
import { Image } from "@/types/Image";
import axios from "axios";

export const addGallery = async (params: AddGallery): Promise<Image[]> => {
  const response = await axios.post(APIs.addImage, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
