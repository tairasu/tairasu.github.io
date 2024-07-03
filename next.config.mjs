
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "build",
    reactStrictMode: true,
    images: { unoptimized: true },
    typescript: { ignoreBuildErrors: true, },
    trailingSlash: true,
    // basePath: '/',
};


export default nextConfig;