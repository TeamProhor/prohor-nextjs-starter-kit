import type { ReactElement } from "react";
import Link from "next/link";
import { ThemeToggler } from "@/components/theme-toggler";
import { ProhorIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";

export default function Home(): ReactElement {
  return (
    <main className="relative flex flex-col min-h-screen bg-background">
      <header className="w-full p-6 flex justify-between items-center z-10 absolute top-0 left-0">
        <nav aria-label="Main Navigation">
          <ul className="flex gap-6 text-sm font-medium text-muted-foreground">
            <li><Link href="/">হোম</Link></li>
            <li><Link href="/features">বৈশিষ্ট্য</Link></li>
            <li><Link href="/pricing">মূল্য</Link></li>
          </ul>
        </nav>
        <ThemeToggler variant="circle" />
      </header>

      <section className="flex-grow flex flex-col items-center justify-center px-6 mt-20 pt-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <ProhorIcon animate={true} className="size-32" />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-normal tracking-tight font-serif text-foreground">
              প্রহর নেক্সট.জেএস স্টার্টার কিট
            </h1>
            <p className="text-muted-foreground text-sm font-sans max-w-lg mx-auto">
              একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য ডেভেলপার স্টার্টার কিট
            </p>
          </div>
          <Button asChild size="lg" className="mt-2">
            <Link href="/login">লগইন করুন</Link>
          </Button>
        </div>
      </section>

      <section className="px-6 py-12 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-serif mb-6 text-foreground">সাধারণ জিজ্ঞাসা (FAQ)</h2>
        <div className="flex flex-col gap-6">
          <article>
            <h3 className="text-lg font-medium">প্রহর (Prohor) স্টার্টার কিট কী?</h3>
            <p className="text-muted-foreground mt-2">
              প্রহর হলো একটি আধুনিক এবং দ্রুতগতির Next.js স্টার্টার কিট যা Supabase ডাটাবেজ, Tailwind CSS স্টাইলিং, Biome লিন্টিং এবং GSAP এনিমেশন ফ্রেমওয়ার্কের সাথে সম্পূর্ণরূপে সজ্জিত।
            </p>
          </article>
          <article>
            <h3 className="text-lg font-medium">এটি দিয়ে কীভাবে কাজ শুরু করব?</h3>
            <p className="text-muted-foreground mt-2">
              প্রজেক্টটি ক্লোন করে সরাসরি 'bun install' এবং 'bun run dev' কমান্ড চালুর মাধ্যমে ডেভেলপমেন্ট শুরু করা যাবে।
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
