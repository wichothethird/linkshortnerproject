import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { BarChart3, Link2, ShieldCheck, Zap } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  const features = [
    {
      icon: Link2,
      title: "Short links in seconds",
      description:
        "Create clean, memorable short URLs for campaigns, social posts, and shared documents.",
    },
    {
      icon: BarChart3,
      title: "Track performance",
      description:
        "Monitor clicks and engagement so you can understand what links are working best.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable and secure",
      description:
        "Built for dependable redirects with a focus on keeping your links safe and available.",
    },
    {
      icon: Zap,
      title: "Fast user experience",
      description:
        "Lightweight pages and quick redirects keep visitors moving without delays.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16 md:px-10">
        <Image
          className="mb-10 dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="space-y-6">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Shorten links, track results, and share smarter.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            LinkShortener helps teams create branded short links and follow
            performance in one place.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <SignInButton mode="modal">
              <Button size="lg" aria-label="Sign in to start creating and managing short links">
                Sign in to get started
              </Button>
            </SignInButton>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">
                Explore features
              </a>
            </Button>
          </div>
        </div>

        <section id="features" className="mt-16 grid gap-4 sm:grid-cols-2 md:mt-24">
          <h2 className="sr-only">Key features</h2>
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-5">
              <Icon className="mb-3 size-5 text-muted-foreground" />
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
