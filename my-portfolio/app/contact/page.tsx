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

export default function ContactPage() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-10">
                <Card className="w-full overflow-hidden">
                    <div className="grid md:grid-cols-2">

                        <div className="min-w-0 p-10 md:p-14">
                            <p className="text-sm font-medium text-muted-foreground">
                                Get in touch
                            </p>

                            <h2 className="mt-3 text-4xl font-bold tracking-tight">
                                Let's connect.
                            </h2>

                            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                                Whether you have a question, want to talk about a project, or just
                                want to connect, feel free to reach out.
                            </p>

                            <div className="mt-10">
                                <p className="text-sm font-medium">Email</p>
                                <p className="mt-2 text-muted-foreground">
                                    kylag42@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="min-w-0 border-t p-10 md:border-l md:border-t-0 md:p-14">
                            <h2 className="text-2xl font-bold tracking-tight">
                                Send me a message
                            </h2>

                            <form className="mt-8 space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Name
                                    </label>
                                    <Input id="name" placeholder="Your name" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell me a little about what you'd like to discuss..."
                                        className="min-h-40"
                                    />
                                </div>

                                <Button type="submit" className="h-12 px-6">
                                    Send message
                                </Button>
                            </form>
                        </div>
                    </div>
                </Card>
        </section >
    )
}
