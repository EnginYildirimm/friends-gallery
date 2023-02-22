import { supabase } from "@/lib/supabase";
import { Image } from "@/types/Image";
import { NextApiHandler } from "next";
import { AddGallery } from "@/types/Api";

const handler: NextApiHandler<Image[]> = async (req, res) => {
  if (req.method === "POST") {
    const images = req.body as AddGallery;
    const { error } = await supabase.from("images").insert(images);
    if (!error) {
      const { data: images, error: imagesError } = await supabase
        .from("images")
        .select("*")
        .order("id");
      if (!imagesError) {
        res.status(200).json(images as Image[]);
      }
    }
  }
  return res.status(405).end();
};

export default handler;
