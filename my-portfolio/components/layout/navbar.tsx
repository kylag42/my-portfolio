"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Download Resume", href: "/resume.pdf", download: true },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-brand-primary px-6 py-6">
            <div className="mx-auto flex h-10 items-center justify-between">
                <Link href="/" className="font-bold text-lg">
                    <Image
                        src="/images/portfolio-logo-3.png"
                        alt="logo"
                        width={80}
                        height={50} />
                </Link>

                <div className="flex gap-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return item.download ? (
                            <a
                                key={item.href}
                                href={item.href}
                                download
                                className="rounded-full bg-brand-accent px-5 py-2 text-base font-bold tracking-widest text-white transition-all hover:scale-105 hover:opacity-90 -mt-2"
                            >
                                {item.name}
                            </a>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={
                                    isActive
                                        ? "font-bold text-brand-accent tracking-widest underline underline-offset-8 text-lg"
                                        : "font-bold hover:text-brand-accent tracking-widest text-lg"
                                }
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}

