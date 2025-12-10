'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Upload, Sparkles, Check, Shield, HandHeart, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
    const [step, setStep] = useState(1);
    const router = useRouter();

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1);
        } else {
            router.push('/discover');
        }
    };

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center p-4 font-sans">
            <div className="card-base w-full max-w-lg overflow-hidden relative min-h-[550px] flex flex-col border border-white/10 backdrop-blur-xl">

                {/* Progress Bar */}
                <div className="h-1 bg-white/5 w-full">
                    <motion.div
                        className="h-full bg-gradient-to-r from-posi-pink to-posi-gold shadow-[0_0_10px_rgba(242,90,140,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(step / 4) * 100}%` }}
                    />
                </div>

                <div className="flex-grow p-8 flex flex-col items-center text-center">

                    <AnimatePresence mode="wait">

                        {/* STEP 1: AUTH */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="w-full flex flex-col items-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-posi-pink/20 to-posi-plum/40 rounded-full flex items-center justify-center mb-6 border border-posi-pink/30">
                                    <Sparkles className="w-8 h-8 text-posi-pink" />
                                </div>
                                <h2 className="text-2xl font-bold mb-2 text-white">Welcome to PosiLove</h2>
                                <p className="text-posi-light/60 mb-8">A community built on trust and privacy.</p>

                                <input type="email" placeholder="Email Address" className="w-full p-4 bg-black/20 rounded-xl mb-4 text-white border border-white/10 focus:border-posi-coral outline-none transition-colors placeholder:text-white/30" />
                                <input type="password" placeholder="Create a Password" className="w-full p-4 bg-black/20 rounded-xl mb-6 text-white border border-white/10 focus:border-posi-coral outline-none transition-colors placeholder:text-white/30" />
                            </motion.div>
                        )}

                        {/* STEP 2: COMPATIBILITY CIRCLES (PRIVACY) */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="w-full flex flex-col items-center"
                            >
                                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 border border-blue-500/30">
                                    <Shield className="w-8 h-8 text-blue-400" />
                                </div>
                                <h2 className="text-2xl font-bold mb-2 text-white">Compatibility Circles</h2>
                                <p className="text-posi-light/60 mb-6 text-sm">
                                    Select your community circle. This is <span className="font-bold text-posi-gold">private matching data</span> only.
                                </p>

                                <div className="w-full space-y-3 mb-6">
                                    {/* Mock Selection for Group */}
                                    <div className="p-4 border border-posi-coral bg-posi-coral/10 rounded-xl flex items-center justify-between cursor-pointer">
                                        <div className="text-left">
                                            <span className="text-white font-bold block">Circle A</span>
                                            <span className="text-xs text-posi-light/70">Living with HIV (Undetectable)</span>
                                        </div>
                                        <Check className="w-5 h-5 text-posi-coral" />
                                    </div>

                                    <div className="p-4 border border-white/5 rounded-xl flex items-center justify-between hover:border-posi-coral/50 cursor-pointer bg-black/20 opacity-60">
                                        <div className="text-left">
                                            <span className="text-posi-light/80 font-bold block">Circle B</span>
                                            <span className="text-xs text-posi-light/50">Living with HSV-1/2</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm font-bold text-posi-light/80 mb-3 self-start">I am open to meeting:</p>
                                <div className="flex gap-2 w-full flex-wrap mb-6">
                                    <span className="px-3 py-1 bg-posi-coral text-white rounded-full text-xs font-bold shadow-lg shadow-posi-coral/20">Circle A</span>
                                    <span className="px-3 py-1 bg-posi-coral text-white rounded-full text-xs font-bold shadow-lg shadow-posi-coral/20">Circle B</span>
                                    <span className="px-3 py-1 bg-white/10 text-white/40 rounded-full text-xs font-bold border border-white/5">Circle C</span>
                                </div>

                                <div className="flex items-start gap-3 bg-blue-500/10 p-3 rounded-lg text-left border border-blue-500/20">
                                    <Lock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                                    <p className="text-xs text-blue-200 leading-snug">
                                        Your circle is encrypted. It determines who you see, but is NEVER displayed on your public card.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: PROFILE VISUALS */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="w-full flex flex-col items-center"
                            >
                                <div className="w-24 h-24 bg-black/20 rounded-full flex items-center justify-center mb-6 border-2 border-dashed border-white/20 cursor-pointer hover:border-posi-pink hover:text-posi-pink transition-colors text-white/40">
                                    <Upload className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold mb-2 text-white">The Real You</h2>
                                <p className="text-posi-light/60 mb-8">Show your smile! (No health info needed here).</p>

                                <input type="text" placeholder="First Name" className="w-full p-4 bg-black/20 rounded-xl mb-4 text-white border border-white/10 focus:border-posi-coral outline-none transition-colors placeholder:text-white/30" />

                                <textarea placeholder="Bio: I love hiking, painting, and..." className="w-full p-4 bg-black/20 rounded-xl mb-6 text-white border border-white/10 focus:border-posi-coral outline-none transition-colors min-h-[100px] placeholder:text-white/30" />
                            </motion.div>
                        )}

                        {/* STEP 4: COMMUNITY PLEDGE */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="w-full flex flex-col items-center"
                            >
                                <div className="w-20 h-20 bg-posi-pink/10 rounded-full flex items-center justify-center mb-6 border border-posi-pink/30 shadow-[0_0_20px_rgba(242,90,140,0.1)]">
                                    <HandHeart className="w-10 h-10 text-posi-pink" />
                                </div>
                                <h2 className="text-2xl font-bold mb-2 text-white">Our Pledge</h2>
                                <p className="text-posi-light/60 mb-6">By joining PosiLove, you agree to create a space of:</p>

                                <ul className="text-left space-y-4 mb-8 w-full px-4">
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-posi-green flex-shrink-0 text-emerald-400" />
                                        <span className="text-posi-light/80"><strong>Kindness First.</strong> Zero tolerance for stigma or shaming.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-posi-green flex-shrink-0 text-emerald-400" />
                                        <span className="text-posi-light/80"><strong>Consent Always.</strong> Ask before sending photos or explicit texts.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-posi-green flex-shrink-0 text-emerald-400" />
                                        <span className="text-posi-light/80"><strong>Privacy Protection.</strong> What is shared here, stays here.</span>
                                    </li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

                {/* Footer Buttons */}
                <div className="p-6 border-t border-white/5 bg-black/10 z-10">
                    <button
                        onClick={handleNext}
                        className="btn-primary w-full py-4 rounded-xl text-lg flex items-center justify-center gap-2"
                    >
                        {step === 4 ? "I Agree - Join Community" : "Continue"}
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    {step > 1 && (
                        <button onClick={() => setStep(step - 1)} className="mt-4 text-posi-light/40 text-sm hover:text-white transition-colors">
                            Back
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}
