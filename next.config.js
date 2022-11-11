/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/charts/:slug([0-9]+)",
                destination: "/charts/:slug([0-9]+)/master",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
