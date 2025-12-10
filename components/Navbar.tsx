"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import clsx from "clsx";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Discover", href: "/discover" },
    { name: "Messages", href: "/messages" },
    { name: "Education", href: "/education" },
    { name: "Safety", href: "/safety" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
            <div className="container-custom h-16 flex items-center justify-between">

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-9 h-9 flex items-center justify-center">
                        {/* Fallback to text icon if image fails, but try image first */}
                        <img
                            src="/APP_ICON.png"
                            alt="PosiLove"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                        <div className="hidden w-9 h-9 rounded-full bg-gradient-to-br from-posi-pink to-posi-gold p-[2px]">
                            <div className="w-full h-full rounded-full bg-posi-plum flex items-center justify-center text-xs font-bold text-posi-gold">
                                PL
                            </div>
                        </div>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-posi-pink to-posi-coral tracking-tight">
                        PosiLove
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "text-sm font-bold transition-all duration-200 relative",
                                    isActive ? "text-posi-pink" : "text-white/70 hover:text-white"
                                )}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-posi-pink rounded-full shadow-[0_0_8px_rgba(242,90,140,0.8)]" />
                                )}
                            </Link>
                        )
                    })}
                </div>

                {/* Right Side: Auth / Profile */}
                <div className="hidden lg:flex items-center gap-4">
                    {/* Mock: Authenticated State could go here. For now, showing buttons */}
                    <Link
                        href="/onboarding?mode=login"
                        className="text-sm font-semibold text-white/80 hover:text-posi-pink transition-colors"
                    >
                        Login
                    </Link>
                    <Link
                        href="/onboarding"
                        className="btn-primary px-5 py-2 rounded-full text-sm shadow-lg shadow-posi-pink/10"
                    >
                        Join Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white/80 hover:text-posi-pink transition-colors p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-posi-plum/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-2 shadow-2xl">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        "text-lg font-semibold transition-colors p-3 rounded-xl flex items-center justify-between",
                                        isActive ? "bg-white/10 text-posi-pink shadow-inner" : "text-white/80 hover:bg-white/5"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    {isActive && <div className="w-2 h-2 rounded-full bg-posi-pink shadow-[0_0_8px_currentColor]" />}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="h-px bg-white/10 w-full" />

                    <div className="flex flex-col gap-3">
                        <Link
                            href="/onboarding?mode=login"
                            className="w-full text-center py-3 rounded-xl font-bold text-white/80 hover:bg-white/5 hover:text-white transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            Log In
                        </Link>
                        <Link
                            href="/onboarding"
                            className="btn-primary w-full text-center py-3 rounded-xl shadow-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Join Community
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
