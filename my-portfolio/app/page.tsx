import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <section className="flex min-h-[80vh] items-center px-6">
        <div className="mx-auto grid w-full max-w-4xl items-center gap-6 md:grid-cols-2">

          <div>
            <h1 className="text-4xl font-bold tracking-wide sm:text-6xl">
            Hi, I'm Kyla.
          </h1>

          <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
            A computer science student passionate about building software and developing my skills across modern technologies.
          </p>

          <div className="mt-8">
            <Link href="/contact">
              <Button className="h-14 px-6 text-lg bg-[#6E9079] text-white tracking-widest">
                CONTACT ME
                <ArrowRight />
              </Button>
            </Link>
          </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
          src="/images/profile.jpg"
          alt="Profile picture"
          width={350}
          height={350}
          className="rounded-full object-cover"
          />
          </div>
        </div>
      </section>
    </main>
  );
}