import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dilj6mttl",
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const { file } = req.body;
        const result = await cloudinary.uploader.upload(file, {
          upload_preset: "your_preset", // Use a preset if you have one
        });
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ error: "Error uploading file" });
      }
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }
// not used...