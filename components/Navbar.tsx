"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Settings } from "lucide-react";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useUser } from "@/context/UserContext";

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
    const { currentUser } = useUser();

    // Scroll Effect
    const { scrollY } = useScroll();
    const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.95]);
    const backdropBlur = useTransform(scrollY, [0, 50], ["0px", "12px"]);
    const borderOpacity = useTransform(scrollY, [0, 50], [0, 0.1]);

    // Don't animate on mobile as much? or keep consistent.
    // Framer motion style object

    return (
        <motion.nav
            style={{
                backgroundColor: useTransform(bgOpacity, (v) => `rgba(45, 27, 78, ${v})`), // Using Deep Plum base
                backdropFilter: useTransform(backdropBlur, (v) => `blur(${v})`),
                borderBottom: useTransform(borderOpacity, (v) => `1px solid rgba(255, 255, 255, ${v})`)
            }}
            className="sticky top-0 z-50 w-full transition-all duration-300"
        >
            <div className="container-custom h-16 flex items-center justify-between">

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="relative w-9 h-9 flex items-center justify-center"
                    >
                        {/* Fallback to text icon if image fails, but try image first */}
                        <img
                            src="/512.png"
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
                    </motion.div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-posi-pink to-posi-coral tracking-tight">
                        PosiLove
                    </span>
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-posi-gold to-posi-coral text-[10px] font-bold text-black shadow-sm hidden sm:block">
                        Alpha Preview
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

                {/* Right Side: Avatar / Settings */}
                <div className="hidden lg:flex items-center gap-4">
                    {currentUser ? (
                        <div className="flex items-center gap-3">
                            <Link href="/settings" className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="Settings">
                                <Settings className="w-5 h-5" />
                            </Link>
                            <Link href="/profile" className="flex items-center gap-2 pl-2 pr-1 py-1 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
                                <span className="text-sm font-bold text-white px-2 hidden xl:block">
                                    {currentUser.profile.name || "User"}
                                </span>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-posi-pink to-posi-plum p-[1px]">
                                    {currentUser.profile.avatar ? (
                                        <img src={currentUser.profile.avatar} className="w-full h-full rounded-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full rounded-full bg-black/50 flex items-center justify-center text-xs text-white font-bold">
                                            {currentUser.profile.name ? currentUser.profile.name.charAt(0).toUpperCase() : "U"}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <>
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
                        </>
                    )}
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
                <div className="lg:hidden absolute top-16 left-0 w-full bg-posi-plum/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-2 shadow-2xl h-[calc(100vh-4rem)]">
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
                        {/* Mobile Settings Link */}
                        <Link
                            href="/settings"
                            className="text-lg font-semibold transition-colors p-3 rounded-xl flex items-center justify-between text-white/80 hover:bg-white/5"
                            onClick={() => setIsOpen(false)}
                        >
                            Settings
                            <Settings className="w-5 h-5 text-white/50" />
                        </Link>
                    </div>

                    <div className="h-px bg-white/10 w-full" />

                    {!currentUser && (
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
                    )}

                    {currentUser && (
                        <div className="mt-auto flex items-center gap-3 p-4 bg-white/5 rounded-2xl">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-posi-pink to-posi-plum p-[1px]">
                                {currentUser.profile.avatar ? (
                                    <img src={currentUser.profile.avatar} className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    <div className="w-full h-full rounded-full bg-black/50 flex items-center justify-center text-sm text-white font-bold">
                                        {currentUser.profile.name ? currentUser.profile.name.charAt(0).toUpperCase() : "U"}
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="text-white font-bold">{currentUser.profile.name}</div>
                                <div className="text-xs text-posi-gold">Premium Member</div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </motion.nav>
    );
}
