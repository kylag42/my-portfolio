import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-amber-50">
      <section className="flex min-h-[80vh] items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
          <Image
          src="/images/profile.jpg"
          alt="Profile picture"
          width={200}
          height={200}
          className="rounded-full object-cover"
          />
        </div>
          <h1 className="text-4xl font-bold tracking-wide sm:text-6xl">
            Hi, I'm Kyla.
          </h1>

          <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
            A computer science student passionate about building software and developing my skills across modern technologies.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button className="h-14 px-6 text-lg bg-[#6E9079] text-white tracking-widest">
              CONTACT ME
              <ArrowRight />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}