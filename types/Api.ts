import { Image } from "./Image";

export type AddGallery = Pick<Image, "name" | "username" | "href" | "imageSrc">;
export type DeleteGallery = Pick<Image, "id">;
