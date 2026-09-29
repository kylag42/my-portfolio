import Link from "next/link";

export function Navbar() {
    return(
        <nav className="flex items-center justify-between px-6 py-6 bg-amber-50 sticky-top shadow-md">
            <Link href="/" className="text-lg font-bold mx-10">
            Kyla Gray
            </Link>

            <div className="flex items-center gap-6 mx-10">
                <Link href="/"
                className="text-lg tracking-widest transition-colors hover:text-[#6E9079]">
                    Home
                </Link>
                <Link href="/about"
                className="text-lg tracking-widest transition-colors hover:text-[#6E9079]">
                    About
                </Link>

                <Link
                href="/projects"
                className="text-lg tracking-widest transition-colors hover:text-[#6E9079]">
                    Projects
                </Link>

                <Link 
                href="/contact"
                className="text-lg tracking-widest transition-colors hover:text-[#6E9079]">
                    Contact
                </Link>
            </div>
        </nav>
    );
}