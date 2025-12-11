'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Upload, Sparkles, Check, Shield, HandHeart, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

const COMMUNITY_TAGS = [
    { id: 'hiv', label: 'HIV (Undetectable)' },
    { id: 'hsv1', label: 'HSV-1' },
    { id: 'hsv2', label: 'HSV-2' },
    { id: 'hpv', label: 'HPV' },
    { id: 'hepb', label: 'Hepatitis B' },
    { id: 'chlamydia', label: 'Chlamydia (Curable)' },
    { id: 'gonorrhea', label: 'Gonorrhea (Curable)' },
    { id: 'syphilis', label: 'Syphilis (Curable)' },
    { id: 'trich', label: 'Trichomoniasis (Curable)' },
];

export default function OnboardingPage() {
    const [step, setStep] = useState(1);
    const router = useRouter();
    const { updateProfile } = useUser();

    // Form State
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [myTags, setMyTags] = useState<string[]>([]);
    const [openToTags, setOpenToTags] = useState<string[]>([]);

    const toggleMyTag = (tag: string) => {
        setMyTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    };

    const toggleOpenToTag = (tag: string) => {
        setOpenToTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    };

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1);
        } else {
            // Save Profile Data
            updateProfile({
                name: name || 'Anonymous User',
                bio: bio || 'Just joined the community!',
                communityTags: myTags,
                openToTags: openToTags,
                avatar: '' // Mock: Logic elsewhere handles avatar or initials
            });
            router.push('/discover');
        }
    };

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center p-4 font-sans">
            <div className="card-base w-full max-w-lg overflow-hidden relative min-h-[600px] flex flex-col border border-white/10 backdrop-blur-xl">

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
                                <h2 className="text-2xl font-bold mb-2 text-white">Select Your Tribes</h2>
                                <p className="text-posi-light/60 mb-6 text-sm">
                                    This data is encrypted and used for <span className="font-bold text-posi-gold">private matching only</span>.
                                </p>

                                <div className="w-full mb-6">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-left mb-3">I am living with:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {COMMUNITY_TAGS.map(tag => {
                                            const isSelected = myTags.includes(tag.label);
                                            return (
                                                <button
                                                    key={tag.id}
                                                    onClick={() => toggleMyTag(tag.label)}
                                                    className={`px-3 py-2 rounded-full text-xs font-bold border transition-all ${isSelected
                                                            ? 'bg-gradient-to-r from-posi-pink to-posi-coral border-transparent text-white shadow-lg'
                                                            : 'bg-white/5 border-white/10 text-posi-light/60 hover:bg-white/10'
                                                        }`}
                                                >
                                                    {tag.label}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="w-full mb-6">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-left mb-3">I am open to meeting others with:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {COMMUNITY_TAGS.map(tag => {
                                            const isSelected = openToTags.includes(tag.label);
                                            return (
                                                <button
                                                    key={tag.id}
                                                    onClick={() => toggleOpenToTag(tag.label)}
                                                    className={`px-3 py-2 rounded-full text-xs font-bold border transition-all ${isSelected
                                                            ? 'bg-gradient-to-r from-posi-gold to-posi-coral border-transparent text-posi-plum shadow-lg'
                                                            : 'bg-white/5 border-white/10 text-posi-light/60 hover:bg-white/10'
                                                        }`}
                                                >
                                                    {tag.label}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 bg-blue-500/10 p-3 rounded-lg text-left border border-blue-500/20">
                                    <Lock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                                    <p className="text-xs text-blue-200 leading-snug">
                                        Your circles determine who you match with. This info is never public.
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

                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-4 bg-black/20 rounded-xl mb-4 text-white border border-white/10 focus:border-posi-coral outline-none transition-colors placeholder:text-white/30"
                                />

                                <textarea
                                    placeholder="Bio: I love hiking, painting, and..."
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    className="w-full p-4 bg-black/20 rounded-xl mb-6 text-white border border-white/10 focus:border-posi-coral outline-none transition-colors min-h-[100px] placeholder:text-white/30"
                                />
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
