'use client';

import { useState } from 'react';
import { Card, Profile } from '@/components/SwipeCard';
import { X, Heart, Star, MessageCircle, User } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

// MOCK DATA
// Using same mock data as before but ensuring consistent structure
const MOCK_PROFILES: Profile[] = [
    {
        id: '1',
        name: 'Sarah',
        age: 24,
        bio: 'Adventure seeker & coffee enthusiast. Looking for someone to hike with! 🏔️☕',
        photos: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'],
        interests: ['Hiking', 'Coffee', 'Photography'],
        distance: 3,
        isPremium: true
    },
    {
        id: '2',
        name: 'Jessica',
        age: 27,
        bio: 'Art director by day, gamer by night. Lets 1v1? 🎮🎨',
        photos: ['https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'],
        interests: ['Gaming', 'Art', 'Design'],
        distance: 12
    },
    {
        id: '3',
        name: 'Emily',
        age: 22,
        bio: 'Just moved to the city! Love trying new restaurants and museums.',
        photos: ['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'],
        interests: ['Foodie', 'Museums', 'Travel'],
        distance: 5
    }
];

export default function DiscoverPage() {
    const [profiles, setProfiles] = useState(MOCK_PROFILES);
    const [lastDirection, setLastDirection] = useState<string | null>(null);

    const removeProfile = (id: string) => {
        setProfiles((current) => current.filter((p) => p.id !== id));
    };

    const handleSwipe = (direction: 'left' | 'right' | 'super', id: string) => {
        console.log(`Swiped ${direction} on ${id}`);
        setLastDirection(direction);
        setTimeout(() => removeProfile(id), 200);
    };

    return (
        <div className="min-h-screen pt-16 flex flex-col font-sans relative overflow-hidden">

            {/* Sub Header for Discover Controls */}
            <header className="px-6 py-4 flex justify-between items-center z-20 relative container-custom">
                <Link href="/profile" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-posi-pink/20 hover:border-posi-pink/50 transition-all group">
                    <User className="w-5 h-5 text-white/80 group-hover:text-posi-pink transition-colors" />
                </Link>

                {/* Visual Privacy Indicator */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-posi-plum/40 backdrop-blur-md rounded-full border border-posi-pink/20 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                    <span className="text-[10px] text-posi-light/90 font-bold tracking-widest uppercase">Encrypted Compatibility</span>
                </div>

                <Link href="/messages" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-posi-pink/20 hover:border-posi-pink/50 transition-all group">
                    <MessageCircle className="w-5 h-5 text-white/80 group-hover:text-posi-pink transition-colors" />
                </Link>
            </header>

            {/* Main Card Deck Area */}
            <main className="flex-grow flex items-center justify-center relative p-4 z-10">
                <div className="relative w-full max-w-sm h-[580px]">
                    {profiles.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-card-bg/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl">
                            <div className="bg-white/5 p-4 rounded-full mb-6 relative">
                                <div className="absolute inset-0 bg-posi-pink/20 blur-xl rounded-full" />
                                <img src="/APP_ICON.png" className="w-12 h-12 relative opacity-80" onError={(e) => e.currentTarget.src = '/512.png'} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">No more profiles!</h3>
                            <p className="text-posi-light/60 mb-8 max-w-[200px]">You've seen everyone in your area inside your compatible circles.</p>
                            <button
                                onClick={() => setProfiles(MOCK_PROFILES)} // Reset for demo
                                className="px-8 py-3 bg-gradient-to-r from-posi-pink to-posi-coral text-white rounded-full font-bold shadow-lg shadow-posi-coral/20 hover:scale-105 transition-all"
                            >
                                Refresh Demo
                            </button>
                        </div>
                    ) : (
                        profiles.map((profile, index) => (
                            <Card
                                key={profile.id}
                                profile={profile}
                                onSwipe={(dir) => handleSwipe(dir, profile.id)}
                                style={{ zIndex: profiles.length - index }}
                            />
                        ))
                    )}
                </div>
            </main>

            {/* Bottom Controls */}
            <div className="pb-10 pt-2 flex justify-center items-center gap-6 z-20 relative">
                <button
                    onClick={() => profiles.length > 0 && handleSwipe('left', profiles[0].id)}
                    className="p-4 bg-posi-plum/40 backdrop-blur-md rounded-full shadow-lg text-posi-coral border border-white/5 hover:bg-posi-coral hover:text-white hover:scale-110 hover:shadow-posi-coral/40 transition-all"
                >
                    <X className="w-8 h-8" />
                </button>
                <button className="p-3 bg-posi-plum/40 backdrop-blur-md rounded-full shadow-lg text-posi-gold border border-white/5 hover:bg-posi-gold hover:text-posi-plum hover:scale-110 hover:shadow-posi-gold/40 transition-all">
                    <Star className="w-6 h-6" />
                </button>
                <button
                    onClick={() => profiles.length > 0 && handleSwipe('right', profiles[0].id)}
                    className="p-4 bg-posi-plum/40 backdrop-blur-md rounded-full shadow-lg text-posi-pink border border-white/5 hover:bg-posi-pink hover:text-white hover:scale-110 hover:shadow-posi-pink/40 transition-all"
                >
                    <Heart className="w-8 h-8 fill-current" />
                </button>
            </div>
        </div>
    );
}
