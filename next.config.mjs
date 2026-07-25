/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // build to static HTML in ./out
  images: { unoptimized: true }, // <Image> without the server optimizer
};

export default nextConfig;