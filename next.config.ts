import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/cv',
        destination: 'https://tsdextzewypssyjm.public.blob.vercel-storage.com/George_Holman_CV.pdf',
      },
    ];
  },
};

export default nextConfig;