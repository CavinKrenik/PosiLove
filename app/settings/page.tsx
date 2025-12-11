'use client';

import { ArrowLeft, Bell, Moon, Trash2, RefreshCw, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';
import { useState } from 'react';

export default function SettingsPage() {
    const { resetDemo } = useUser();
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(true); // Mock, always true for this theme

    return (
        <div className="min-h-screen bg-posi-light pb-20">
            {/* Header */}
            <header className="bg-white shadow-sm p-4 flex items-center gap-4 sticky top-0 z-10">
                <Link href="/discover" className="text-posi-plum hover:text-black">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
                <h1 className="text-xl font-bold text-posi-plum">Settings</h1>
            </header>

            <main className="container-custom max-w-md mx-auto p-4 space-y-6 mt-4">

                {/* Preferences Section */}
                <section className="space-y-4">
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">Preferences</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                        <div className="flex items-center justify-between p-4 border-b border-gray-50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 text-blue-500 rounded-full">
                                    <Bell className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-gray-700">Notifications</span>
                            </div>
                            <button
                                onClick={() => setNotifications(!notifications)}
                                className={`w-12 h-6 rounded-full p-1 transition-colors ${notifications ? 'bg-green-500' : 'bg-gray-200'}`}
                            >
                                <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${notifications ? 'translate-x-6' : 'translate-x-0'}`} />
                            </button>
                        </div>

                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-50 text-purple-500 rounded-full">
                                    <Moon className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-gray-700">Dark Mode</span>
                            </div>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`w-12 h-6 rounded-full p-1 transition-colors ${darkMode ? 'bg-posi-plum' : 'bg-gray-200'}`}
                            >
                                <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
                            </button>
                        </div>

                    </div>
                </section>

                {/* Account Actions */}
                <section className="space-y-4">
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">Account & Data</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                        <button
                            onClick={resetDemo}
                            className="w-full flex items-center gap-3 p-4 border-b border-gray-50 text-left hover:bg-gray-50 transition-colors"
                        >
                            <div className="p-2 bg-orange-50 text-orange-500 rounded-full">
                                <RefreshCw className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block font-semibold text-gray-700">Reset Demo Data</span>
                                <span className="block text-xs text-gray-400">Clears swipes, matches, and onboarding.</span>
                            </div>
                        </button>

                        <button className="w-full flex items-center gap-3 p-4 text-left hover:bg-red-50 transition-colors text-red-500">
                            <div className="p-2 bg-red-50 rounded-full">
                                <Trash2 className="w-5 h-5" />
                            </div>
                            <span className="font-semibold">Delete Account</span>
                        </button>

                    </div>
                </section>

                <div className="pt-8 flex justify-center">
                    <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-posi-pink text-sm font-semibold">
                        <LogOut className="w-4 h-4" /> Log Out
                    </Link>
                </div>

                <div className="text-center text-[10px] text-gray-300 font-mono mt-8">
                    PosiLove Alpha v0.1.0<br />
                    Build: {new Date().toISOString().split('T')[0]}
                </div>

            </main>
        </div>
    );
}
