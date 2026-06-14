/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: [
      '@base-ui/react',
      '@phosphor-icons/react',
      'class-variance-authority',
      'clsx',
      'cmdk',
      'date-fns',
      'embla-carousel-react',
      'input-otp',
      'radix-ui',
      'react-day-picker',
      'react-resizable-panels',
      'recharts',
      'shadcn',
      'sonner',
      'tailwind-merge',
      'tw-animate-css',
      'vaul'
    ],
  },
};

export default nextConfig;
