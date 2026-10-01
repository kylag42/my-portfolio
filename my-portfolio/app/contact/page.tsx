import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


export default function ContactPage() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-6">
            <Card className="w-full overflow-hidden py-0">
                <div className="grid md:grid-cols-2">

                    <div className="min-w-0 p-10 md:p-14 bg-brand-accent">
                        <h1 className="text-4xl text-center font-bold text-white tracking-widest">
                            CONTACT ME
                        </h1>

                        <h2 className="mt-6 max-w-md text-lg text-center leading-relaxed text-white">
                            Whether you have a question, want to talk about a project, or just
                            want to connect, feel free to reach out.
                        </h2>

                        <div className="flex items-center justify-center gap-2 mt-5">
                            <Mail color="white" />
                            <a href="mailto:kylag42@gmail.com" className="text-lg text-white tracking-widest hover:underline">kylag42@gmail.com</a>
                        </div>

                        <div className="flex items-center justify-center gap-2 mt-4">
                            <a
                                href="https://github.com/kylag42"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Github"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <SiGithub className="h-8 w-8 text-white" />
                            </a>

                            <a
                                href="https://linkedin.com/in/kylamgray"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-muted-foreground transition-colors hover:text-foreground">

                                <FaLinkedin className="h-8 w-8 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="min-w-0 border-t p-10 md:border-l md:border-t-0 md:p-14">
                        <h1 className="text-4xl font-bold tracking-wide text-brand-accent">
                            SEND ME A MESSAGE
                        </h1>

                        <form className="mt-8 space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-base tracking-wide font-bold">
                                    Name
                                </label>
                                <Input id="name" placeholder="Your name" className="mt-2 border-black" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-base font-bold tracking-wide">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="mt-2 p-4 border-black"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-base font-bold tracking-wide">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell me a little about what you'd like to discuss..."
                                    className="min-h-40 mt-2 border-black"
                                />
                            </div>

                                <Button type="submit" className="h-14 px-6 text-lg bg-[#6E9079] text-white rounded-full tracking-widest">
                                    SEND
                            </Button>
                        </form>
                    </div>
                </div>
            </Card>
        </section >
    )
}
