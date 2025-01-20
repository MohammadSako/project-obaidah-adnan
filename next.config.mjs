const supabaseImage = process.env.NEXT_PUBLIC_SUPABASE_URL; //to hide env
const supabase = supabaseImage.slice(8);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // redirects() {
  //   return [
  //     {
  //       source: "/login",
  //       destination: "/dashboard",
  //       permanent: false,
  //     },
  //   ];
  // },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname:  `${supabase}`,
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
