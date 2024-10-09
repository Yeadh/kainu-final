import { navLinks } from "@/constant";
import Link from "next/link";

export default function NavLinks() {
  return (
    <ul className="flex flex-col md:flex-row">
      {navLinks.map((link, idx) => (
        <Link
          href={link.link}
          key={idx}
          className="desc-text md:px-3 lg:px-4 2xl:px-6 hover:text-[#00E5FF] color-transition whitespace-nowrap"
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
}
