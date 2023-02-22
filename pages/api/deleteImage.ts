import { supabase } from "@/lib/supabase";
import { Image } from "@/types/Image";
import { NextApiHandler } from "next";
import { DeleteGallery } from "@/types/Api";

const handler: NextApiHandler<Image[]> = async (req, res) => {
  if (req.method === "POST") {
    const images = req.body as DeleteGallery;
    const { error } = await supabase
      .from("images")
      .delete()
      .eq("id", images.id);
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
