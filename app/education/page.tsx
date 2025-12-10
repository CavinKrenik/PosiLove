'use client';

import { ArrowLeft, BookOpen, Heart, Shield, LifeBuoy } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const SECTIONS = [
    { id: 'basics', label: 'The Basics', icon: BookOpen },
    { id: 'dating', label: 'Dating Tips', icon: Heart },
    { id: 'consent', label: 'Consent', icon: Shield },
    { id: 'support', label: 'Support', icon: LifeBuoy },
];

export default function EducationPage() {
    const [activeSection, setActiveSection] = useState('basics');

    // Scroll spy logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = SECTIONS.map(s => document.getElementById(s.id));
            const scrollValues = sections.map(s => s ? Math.abs(s.getBoundingClientRect().top - 200) : Infinity);
            const minIndex = scrollValues.indexOf(Math.min(...scrollValues));
            if (minIndex !== -1) setActiveSection(SECTIONS[minIndex].id);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Offset for sticky headers (Main Nav + Sub Nav)
            const offset = 80 + 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen pb-20 pt-20"> {/* pt-20 to account for fixed global nav if needed, though sticky is relative in flow, but assuming transparent overlay usually implies padding content */}

            {/* Secondary Header / Sub-Nav */}
            <div className="sticky top-16 z-40 bg-posi-plum/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
                <div className="container-custom py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-posi-coral hover:text-posi-pink transition-colors">
                            <ArrowLeft className="w-6 h-6" />
                        </Link>
                        <h1 className="font-bold text-2xl text-white">Resources & Education</h1>
                    </div>

                    <nav className="flex gap-2 overflow-x-auto no-scrollbar max-w-full pb-2 md:pb-0">
                        {SECTIONS.map((section) => {
                            const Icon = section.icon;
                            const isActive = activeSection === section.id;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${isActive
                                        ? 'bg-posi-pink text-white shadow-lg shadow-posi-pink/20'
                                        : 'bg-white/5 text-posi-light/60 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {section.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>

            <main className="container-custom max-w-4xl mx-auto p-6 space-y-20 mt-8">

                {/* BASICS */}
                <section id="basics" className="scroll-mt-40">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <BookOpen className="w-8 h-8 text-posi-gold" /> The Basics
                    </h2>
                    <div className="card-base p-8 space-y-6">
                        <p className="text-lg text-posi-light/90 leading-relaxed">
                            Living with a chronic STI is common. In fact, millions of people lead healthy, happy, and romantic lives with HSV, HIV, and HPV. The biggest virus is often the <span className="font-bold text-posi-coral">stigma</span>, not the condition itself.
                        </p>
                        <div className="bg-posi-plum/30 p-6 rounded-xl border border-posi-pink/20">
                            <h3 className="font-bold text-posi-pink mb-3 text-lg">Did you know?</h3>
                            <ul className="list-disc pl-5 text-posi-light/80 space-y-2">
                                <li>Undetectable = Untransmittable (U=U) for HIV.</li>
                                <li>HSV adds protection/disclosure layers, but intimacy remains safe.</li>
                                <li>Most people carry some form of HSV/HPV unknowingly.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* DATING */}
                <section id="dating" className="scroll-mt-40">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <Heart className="w-8 h-8 text-posi-pink" /> Dating Tips
                    </h2>
                    <div className="card-base p-8 space-y-6">
                        <p className="text-lg text-posi-light/90 leading-relaxed">
                            Dating on PosiLove skips the "big talk" anxiety because we all share a baseline of understanding. But chemistry is still chemistry!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-posi-coral/30 transition-colors">
                                <h3 className="font-bold text-posi-gold mb-2 text-lg">Be Yourself</h3>
                                <p className="text-sm text-posi-light/70">Your diagnosis is a small part of your story. Share your passions, hobbies, and dreams first.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-posi-coral/30 transition-colors">
                                <h3 className="font-bold text-posi-gold mb-2 text-lg">Disclosure</h3>
                                <p className="text-sm text-posi-light/70">Even here, disclosure matters for specific compatibility. Use our "Guided Disclosure" tool in chat when you feel ready.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONSENT */}
                <section id="consent" className="scroll-mt-40">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <Shield className="w-8 h-8 text-posi-coral" /> Consent Framework
                    </h2>
                    <div className="card-base p-8 space-y-6">
                        <p className="text-lg text-posi-light/90 leading-relaxed">
                            Consent is a continuous conversation. It's about comfort, boundaries, and enthusiasm.
                        </p>
                        <blockquote className="border-l-4 border-posi-gold pl-6 italic text-posi-light/80 my-6 text-xl">
                            "Ask before showing. Check in during. Stop whenever."
                        </blockquote>
                        <p className="text-sm text-posi-light/60">
                            We have integrated tools in our messaging to help you ask for consent before sending photos or moving to real-life meetups.
                        </p>
                    </div>
                </section>

                {/* SUPPORT */}
                <section id="support" className="scroll-mt-40">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <LifeBuoy className="w-8 h-8 text-posi-pink" /> Support
                    </h2>
                    <div className="card-base p-8 text-center space-y-6">
                        <p className="text-lg text-posi-light/90">Need someone to talk to? Our community resources are here 24/7.</p>
                        <button className="btn-primary px-8 py-3 rounded-full text-lg">
                            Contact Support Team
                        </button>
                        <p className="text-xs text-posi-light/40 mt-4">We are not a medical service. For medical advice, please consult a professional.</p>
                    </div>
                </section>

            </main>
        </div>
    );
}
