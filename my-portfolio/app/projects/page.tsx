import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-12">
        <p className="text-sm font-medium tracking-widest text-brand-accent">
          PROJECTS
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Things I've Built
        </h1>
      </div>

      <Card className="overflow-hidden py-0">
        <div className="grid md:grid-cols-2">
          {/* Left - Image Carousel */}
          <div className="flex items-center justify-center bg-muted p-8">
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/images/projects/project-1-1.png"
                    alt="Project screenshot"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </CarouselItem>

                <CarouselItem>
                  <Image
                    src="/images/projects/project-1-2.png"
                    alt="Project screenshot"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </CarouselItem>

                <CarouselItem>
                  <Image
                    src="/images/projects/project-1-3.png"
                    alt="Project screenshot"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Right - Project Information */}
          <CardContent className="flex flex-col justify-center p-8 md:p-10">
            <p className="text-sm font-medium tracking-widest text-brand-accent">
              WEB APPLICATION
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Project Name
            </h2>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Project Description
            </p>

            <div className="mt-6">
              <p className="text-sm font-semibold">Technologies</p>

              <p className="mt-2 text-sm text-muted-foreground">
                Next.js · React · TypeScript · Tailwind CSS
              </p>
            </div>

            <div className="mt-8">
              <Button>
                View Project
                <ArrowRight />
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}