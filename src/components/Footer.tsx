import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("p-4", className)}>
      <p>
        All rights reserved &copy; {new Date().getFullYear()} Dreamy. Made with
        ❤️ by NahueDev
      </p>
    </footer>
  );
}

export default Footer;
