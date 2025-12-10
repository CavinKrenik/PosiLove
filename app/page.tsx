'use client';

import Link from "next/link";
import { Heart, Shield, Lock, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">

      {/* Background Gradient Shapes - simplified for performance and cleaner look */}
      <div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-posi-pink/20 rounded-full blur-[100px] animate-blob z-0 pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-posi-gold/10 rounded-full blur-[100px] animate-blob animation-delay-2000 z-0 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-4 md:px-6 pb-12">

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg mb-8 animate-fade-in-up">
          <Heart className="w-4 h-4 text-posi-pink fill-posi-pink" />
          <span className="text-sm font-medium text-posi-light tracking-wide">A safe space for real connection</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-5xl drop-shadow-2xl">
          Love without <span className="text-gradient drop-shadow-sm">Stigma.</span><br />
          Connection without <span className="text-gradient drop-shadow-sm">Fear.</span>
        </h1>

        <p className="text-lg md:text-2xl text-posi-light/80 mb-10 max-w-2xl leading-relaxed mx-auto">
          The dating app for people living with chronic STIs.
          We center <strong className="text-white font-semibold">privacy</strong>, <strong className="text-white font-semibold">consent</strong>, and <strong className="text-white font-semibold">community</strong> so you can focus on the person, not the disclosure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/onboarding"
            className="btn-primary px-8 py-4 rounded-full text-lg flex items-center justify-center gap-2 min-w-[200px]"
          >
            Join the Community
          </Link>
        </div>
      </section>

      {/* Feature Row - Floating Overlap */}
      <section className="relative z-20 w-full px-4 -mt-10 mb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <Feature
              icon={<Shield className="w-8 h-8 text-posi-coral" />}
              title="Privacy First"
              desc="Your health status is private by default. You control who sees what, and when."
            />
            <Feature
              icon={<Users className="w-8 h-8 text-posi-gold" />}
              title="Stigma-Free Zone"
              desc="A community where 'I have...' is met with 'Me too' or 'Thanks for sharing,' never shame."
            />
            <Feature
              icon={<Lock className="w-8 h-8 text-posi-pink" />}
              title="Safe & Secure"
              desc="Encrypted messaging and verified profiles keep your emotional and digital safety intact."
            />
          </div>
        </div>
      </section>

      {/* Footer is now handled globally or can be kept here if it's page specific, 
          but usually footer is global. For now, matching original structure where it was at bottom 
          but typically this should go to layout or a component. I'll keep a simple one here for now 
          to match the requirement of 'reorganizing' without deleting structure unless moved. 
      */}
      <footer className="w-full py-12 text-center text-posi-light/40 text-sm border-t border-white/5 relative z-10 bg-black/20">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/education" className="hover:text-posi-pink transition-colors">Resources & Education</Link>
          <span>•</span>
          <Link href="#" className="hover:text-posi-pink transition-colors">Privacy Policy</Link>
        </div>
        <p>PosiLove © {new Date().getFullYear()} • Built with ❤️</p>
      </footer>

    </main>
  );
}

function Feature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="card-base p-8 hover:bg-card-bg/10 transition-all duration-300 group">
      <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-posi-light/70 leading-relaxed">{desc}</p>
    </div>
  )
}
