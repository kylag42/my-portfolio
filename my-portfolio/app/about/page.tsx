import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid items-center gap-12 md:grid-cols-2">

        <div className="flex justify-center">
            <Image
            src="/images/DSC_6494.jpg"
            alt="profile picture"
            width={400}
            height={400}
            className="rounded-2xl object-cover"
            />
        </div>
        <div>
          <p className="mb-3 text-lg font-bold tracking-widest text-brand-accent">
            ABOUT ME
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Building my path in software engineering.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I’m a computer science student passionate about building software
            and developing my skills across modern web technologies. I enjoy
            solving problems, learning new technologies, and turning ideas
            into useful applications.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I’m currently focused on strengthening my foundation in software
            engineering while gaining hands-on experience through personal
            projects and continued learning.
          </p>
      </div>
      </div>
    </section>
  );
}