
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "build",
    reactStrictMode: true,
    images: { unoptimized: true },
    typescript: { ignoreBuildErrors: true, },
    trailingSlash: true,
    basePath: '/portfolio',
};


export default nextConfig;