"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) =>
    pathname === path ? "text-blue-700" : "text-gray-700 hover:text-blue-700";

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" aria-label="Recipe Explorer Home">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 shadow-sm" />
            <span className="text-xl font-semibold text-gray-900">Recipe Explorer</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className={isActive("/")}>Home</Link>
            <Link href="/about" className={isActive("/about")}>About</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
