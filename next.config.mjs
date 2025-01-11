const supabaseImage = process.env.NEXT_PUBLIC_SUPABASE_URL; //to hide env
const supabase = supabaseImage.slice(8);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["tailwindui.com", "res.cloudinary.com", `${supabase}`],
  },
};

export default nextConfig;