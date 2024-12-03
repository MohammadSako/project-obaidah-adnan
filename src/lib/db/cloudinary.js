import axios from "axios";
import crypto from "crypto";

// const cloudNames = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
// const apiKeys = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
// const apiSecrets = process.env.CLOUDINARY_API_SECRET;

export async function CloudinaryDelete({ uploadedImagePublicId }) {
  const generateSHA1 = (data) => {
    const hash = crypto.createHash("sha1");
    hash.update(data);
    return hash.digest("hex");
  };
  const generateSignature = () => {
    const timestamp = new Date().getTime();
    return `public_id=${uploadedImagePublicId}&timestamp=${timestamp}${apiSecret}`;
  };

  const cloudName = "dilj6mttl";
  const timestamp = new Date().getTime();
  const apiKey = "957714346843584";
  const apiSecret = "hX-nbhjEESb8Vjr-FUVM4HWWYu0";
  const signature = generateSHA1(
    generateSignature(uploadedImagePublicId, apiSecret)
  );

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;
  try {
    const response = await axios.post(url, {
      public_id: uploadedImagePublicId,
      signature: signature,
      api_key: apiKey,
      timestamp: timestamp,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
