import { APIs } from "@/constants/apis";
import { DeleteGallery } from "@/types/Api";
import { Image } from "@/types/Image";
import axios from "axios";

export const deleteGallery = async (params: DeleteGallery): Promise<Note[]> => {
  const response = await axios.post(APIs.deleteImage, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
