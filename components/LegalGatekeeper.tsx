'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/context/UserContext';
import { Shield, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function LegalGatekeeper() {
    const { isWaiverAccepted, acceptWaiver } = useUser();
    const [agreedHealth, setAgreedHealth] = useState(false);
    const [agreedTerms, setAgreedTerms] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || isWaiverAccepted) return null;

    const canEnter = agreedHealth && agreedTerms;

    return (
        <div className="fixed inset-0 z-[100] bg-posi-plum/95 backdrop-blur-xl flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Background blobs for flair */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-posi-pink/20 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-posi-gold/10 blur-3xl rounded-full pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 ring-1 ring-white/10">
                        <Shield className="w-8 h-8 text-posi-coral" />
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">Safety & Liability Agreement</h2>
                    <p className="text-posi-light/80 text-sm mb-8 leading-relaxed">
                        Welcome to PosiLove. Before entering our community, verified consent to our safety standards is required.
                    </p>

                    <div className="w-full space-y-4 mb-8 text-left">
                        <label className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                            <input
                                type="checkbox"
                                checked={agreedHealth}
                                onChange={(e) => setAgreedHealth(e.target.checked)}
                                className="mt-1 w-5 h-5 rounded border-posi-pink/50 text-posi-pink focus:ring-posi-pink bg-black/20"
                            />
                            <span className="text-sm text-posi-light/90">
                                I understand PosiLove does not verify medical status. I am responsible for my own health decisions and disclosures.
                            </span>
                        </label>

                        <label className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                            <input
                                type="checkbox"
                                checked={agreedTerms}
                                onChange={(e) => setAgreedTerms(e.target.checked)}
                                className="mt-1 w-5 h-5 rounded border-posi-pink/50 text-posi-pink focus:ring-posi-pink bg-black/20"
                            />
                            <span className="text-sm text-posi-light/90">
                                I am 18+ and agree to the Terms of Service and Community Guidelines.
                            </span>
                        </label>
                    </div>

                    <button
                        onClick={acceptWaiver}
                        disabled={!canEnter}
                        className={clsx(
                            "w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2",
                            canEnter
                                ? "bg-gradient-to-r from-posi-pink to-posi-coral text-white shadow-lg shadow-posi-pink/20 hover:scale-[1.02]"
                                : "bg-white/10 text-white/40 cursor-not-allowed"
                        )}
                    >
                        {canEnter && <CheckCircle className="w-5 h-5" />}
                        {canEnter ? "Enter Community" : "Agree to Continue"}
                    </button>
                </div>
            </div>
        </div>
    );
}
