import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://prohor-nextjs-starter-kit.vercel.app"),
  title: "প্রহর (Prohor) - Next.js Starter Kit with Supabase & Tailwind CSS",
  description:
    "একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য Next.js স্টার্টার কিট যা Supabase, Tailwind CSS এবং Biome-এর সাথে সম্পূর্ণরূপে সজ্জিত।",
  keywords: [
    "Next.js",
    "Supabase",
    "Tailwind CSS",
    "Starter Kit",
    "Bangla Developer Template",
    "Prohor",
    "প্রহর",
  ],
  authors: [{ name: "Prohor Team" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "প্রহর (Prohor) - Next.js Starter Kit",
    description:
      "একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য Next.js স্টার্টার কিট যা Supabase, Tailwind CSS এবং Biome-এর সাথে সম্পূর্ণরূপে সজ্জিত।",
    type: "website",
    locale: "bn_BD",
    url: "https://prohor-nextjs-starter-kit.vercel.app/",
    images: [
      {
        url: "https://prohor-nextjs-starter-kit.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prohor Next.js Starter Kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "প্রহর (Prohor) - Next.js Starter Kit",
    description:
      "একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য Next.js স্টার্টার কিট যা Supabase, Tailwind CSS এবং Biome-এর সাথে সম্পূর্ণরূপে সজ্জিত।",
    images: ["https://prohor-nextjs-starter-kit.vercel.app/og-image.png"],
  },
};

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://prohor-nextjs-starter-kit.vercel.app/#website",
      url: "https://prohor-nextjs-starter-kit.vercel.app/",
      name: "Prohor Next.js Starter Kit",
      description: "একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য Next.js স্টার্টার কিট যা Supabase, Tailwind CSS এবং Biome-এর সাথে সম্পূর্ণরূপে সজ্জিত।",
      inLanguage: "bn-BD",
    },
    {
      "@type": "Organization",
      "@id": "https://prohor-nextjs-starter-kit.vercel.app/#organization",
      name: "Prohor Team",
      url: "https://prohor-nextjs-starter-kit.vercel.app/",
      sameAs: [
        "https://github.com/TeamProhor"
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Tech Street",
        addressLocality: "Dhaka",
        addressCountry: "BD"
      },
      knowsAbout: ["Next.js", "Web Development", "React"]
    },
    {
      "@type": "Person",
      "@id": "https://prohor-nextjs-starter-kit.vercel.app/#person",
      name: "Prohor Developer",
      url: "https://prohor-nextjs-starter-kit.vercel.app/",
      sameAs: [
        "https://github.com/TeamProhor"
      ]
    },
    {
      "@type": "SoftwareApplication",
      name: "Prohor Next.js Starter Kit",
      operatingSystem: "All",
      applicationCategory: "DeveloperApplication",
      description:
        "একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য Next.js স্টার্টার কিট যা Supabase, Tailwind CSS এবং Biome-এর সাথে সম্পূর্ণরূপে সজ্জিত।",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    }
  ]
};

export const siteFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "প্রহর (Prohor) স্টার্টার কিট কী?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "প্রহর হলো একটি আধুনিক এবং দ্রুতগতির Next.js স্টার্টার কিট যা Supabase ডাটাবেজ, Tailwind CSS স্টাইলিং, Biome লিন্টিং এবং GSAP এনিমেশন ফ্রেমওয়ার্কের সাথে সম্পূর্ণরূপে সজ্জিত।",
      },
    },
    {
      "@type": "Question",
      name: "এটি দিয়ে কীভাবে কাজ শুরু করব?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "প্রজেক্টটি ক্লোন করে সরাসরি 'bun install' এবং 'bun run dev' কমান্ড চালুর মাধ্যমে ডেভেলপমেন্ট শুরু করা যাবে।",
      },
    },
  ],
};
