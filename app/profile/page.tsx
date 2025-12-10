'use client';

import Link from 'next/link';
import { ArrowLeft, Settings, Camera, Edit2, Shield, Lock, EyeOff } from 'lucide-react';

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-posi-light flex flex-col font-sans">

            {/* Header */}
            <header className="bg-white p-4 shadow-sm flex items-center justify-between sticky top-0 z-10 border-b border-posi-subtle">
                <Link href="/discover" className="text-gray-500 hover:text-black transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
                <span className="font-bold text-lg text-posi-plum">My Profile</span>
                <button className="text-gray-500 hover:text-posi-pink transition-colors">
                    <Settings className="w-6 h-6" />
                </button>
            </header>

            <main className="flex-grow p-4 space-y-6 max-w-lg mx-auto w-full">

                {/* Profile Pic Section */}
                <div className="flex flex-col items-center relative mt-4">
                    <div className="w-32 h-32 rounded-full p-[3px] bg-gradient-to-r from-posi-pink to-posi-gold shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                            alt="My Profile"
                            className="w-full h-full rounded-full object-cover border-4 border-white"
                        />
                        <button className="absolute bottom-0 right-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-posi-pink transition-colors border border-gray-100">
                            <Camera className="w-5 h-5" />
                        </button>
                    </div>
                    <h1 className="text-2xl font-bold mt-4 text-posi-plum">Alex, 24</h1>
                    <p className="text-gray-500 flex items-center gap-1">
                        New York, NY
                    </p>
                </div>

                {/* HEALTH PRIVACY DASHBOARD */}
                <div className="bg-white rounded-2xl p-0 overflow-hidden shadow-sm border border-gray-100 opacity-90 hover:opacity-100 transition-opacity">
                    <div className="bg-blue-50/50 p-4 border-b border-blue-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-blue-500" />
                            <span className="font-bold text-gray-800 text-sm">Health & Privacy</span>
                        </div>
                        <span className="text-[10px] font-bold bg-blue-100 text-blue-600 px-2 py-1 rounded-full flex items-center gap-1">
                            <Lock className="w-3 h-3" /> ENCRYPTED
                        </span>
                    </div>

                    <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-posi-light cursor-pointer">
                            <div>
                                <p className="text-sm font-semibold text-posi-plum">Health Context</p>
                                <p className="text-xs text-gray-400">Living with HSV • Undetectable</p>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="text-xs">Private</span>
                                <EyeOff className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-posi-light cursor-pointer">
                            <div>
                                <p className="text-sm font-semibold text-posi-plum">Matching Preferences</p>
                                <p className="text-xs text-gray-400">Open to everyone</p>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Settings className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="text-center pt-2">
                            <p className="text-xs text-gray-400 italic">"Your story is yours to tell. We just facilitate the match."</p>
                        </div>
                    </div>
                </div>


                {/* Visual Details */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">

                    {/* Bio */}
                    <div className="relative">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bio</label>
                            <Edit2 className="w-4 h-4 text-posi-pink cursor-pointer" />
                        </div>
                        <p className="text-posi-plum leading-relaxed text-sm">
                            Digital nomad and coffee lover. Always looking for the next best cafe in the city. ☕️✈️<br />
                            <span className="text-gray-400 text-xs mt-2 block">(No stigma here. Just good vibes.)</span>
                        </p>
                    </div>

                    {/* Interests */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Interests</label>
                            <PlusButton />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Coffee', 'Travel', 'Tech', 'Hiking'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <button className="w-full py-4 text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-red-500 transition-colors">
                    Log Out
                </button>

            </main>
        </div>
    );
}

function PlusButton() {
    return (
        <div className="bg-gray-100 hover:bg-posi-pink/10 hover:text-posi-pink p-1 rounded-full cursor-pointer transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </div>
    )
}
