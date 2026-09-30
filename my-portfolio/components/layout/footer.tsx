import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa"

export function Footer() {
    return (
        <footer className="border-t bg-[#f5f0e6]">
            <div className="mx-auto flex max-w flex-col items-center gap-4 px-6 py-3 sm:flex-row sm:justify-between">
                <p className="text-sm text-muted-foreground">
                    © 2026 Kyla Gray
                </p>
                <div className="flex items-center gap-4">
                    <a
                    href="https://github.com/kylag42"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <SiGithub className="h-5 w-5"/>
                        </a>
                        
                        <a
                        href="https://linkedin.com/in/kylamgray"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground transition-colors hover:text-foreground">

                      <FaLinkedin className="h-5 w-5"/>  
                    </a>
                </div>
                </div>
        </footer>
    )
}