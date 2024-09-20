/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_PUBLIC_DB_URL: process.env.NEXT_PUBLIC_DB_URL,
        WEB3_AUTH_CLIENT_ID: process.env.WEB3_AUTH_CLIENT_ID,
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        NEXT_PUBLIC_GEMINI_API_KEY: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    },
};

export default nextConfig;