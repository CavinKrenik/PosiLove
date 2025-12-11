'use client';

import { useState, useMemo, useEffect } from 'react';
import { Card, Profile } from '@/components/SwipeCard';
import { X, Heart, Star, MessageCircle, User } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

// MOCK DATA
// Extended with gender for filtering
const MOCK_PROFILES: (Profile & { gender: 'male' | 'female' | 'non-binary' })[] = [
    {
        id: '1',
        name: 'Sarah',
        age: 24,
        bio: 'Adventure seeker & coffee enthusiast. Looking for someone to hike with! 🏔️☕',
        photos: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'],
        interests: ['Hiking', 'Coffee', 'Photography'],
        distance: 3,
        isPremium: true,
        gender: 'female'
    },
    {
        id: '2',
        name: 'Jessica',
        age: 27,
        bio: 'Art director by day, gamer by night. Lets 1v1? 🎮🎨',
        photos: ['https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'],
        interests: ['Gaming', 'Art', 'Design'],
        distance: 12,
        gender: 'female'
    },
    {
        id: '3',
        name: 'Emily',
        age: 22,
        bio: 'Just moved to the city! Love trying new restaurants and museums.',
        photos: ['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'],
        interests: ['Foodie', 'Museums', 'Travel'],
        distance: 5,
        gender: 'female'
    },
    {
        id: '4',
        name: 'James',
        age: 26,
        bio: 'Musician and dog lover. Ask me about my golden retriever! 🐕🎸',
        photos: ['https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'],
        interests: ['Music', 'Dogs', 'Concerts'],
        distance: 8,
        gender: 'male'
    },
    {
        id: '5',
        name: 'Alex',
        age: 25,
        bio: 'Techie who loves the outdoors. Always down for a camping trip. ⛺💻',
        photos: ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'],
        interests: ['Coding', 'Camping', 'Tech'],
        distance: 4,
        gender: 'non-binary'
    }
];

export default function DiscoverPage() {
    const { onSwipe, addMatch, currentUser } = useUser();
    const router = useRouter();

    // Init state with filtered profiles? 
    // We need to filter based on currentUser preference efficiently.
    // Since currentUser might load from localStorage, let's use an effect or useMemo to initialize profiles once.
    // However, for this mock engine, we can just filter MOCK_PROFILES directly on load.

    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Initial Load & Filter Logic
    useEffect(() => {
        if (!currentUser) return;

        const lookingFor = currentUser.profile.lookingFor || 'everyone'; // Default fallback

        let filtered = MOCK_PROFILES;

        if (lookingFor === 'women') {
            filtered = MOCK_PROFILES.filter(p => p.gender === 'female');
        } else if (lookingFor === 'men') {
            filtered = MOCK_PROFILES.filter(p => p.gender === 'male');
        }
        // 'everyone' keeps all

        setProfiles(filtered);
        setIsLoaded(true);
    }, [currentUser?.profile.lookingFor]);


    // Match Logic State
    const [rightSwipeCount, setRightSwipeCount] = useState(0);
    const [matchedProfile, setMatchedProfile] = useState<Profile | null>(null);

    const removeProfile = (id: string) => {
        setProfiles((current) => current.filter((p) => p.id !== id));
    };

    const handleSwipe = (direction: 'left' | 'right' | 'super', id: string) => {
        // Record swipe in context
        // @ts-ignore
        onSwipe(id, direction);

        if (direction === 'right') {
            onRightSwipe(id);
        }

        setTimeout(() => removeProfile(id), 200);
    };

    const onRightSwipe = (id: string) => {
        const newCount = rightSwipeCount + 1;
        setRightSwipeCount(newCount);

        // Mock Match Logic: Trigger match on the 2nd right swipe
        if (newCount === 2) {
            const profile = profiles.find(p => p.id === id);
            if (profile) {
                // @ts-ignore
                addMatch(id); // Save to context
                setTimeout(() => {
                    setMatchedProfile(profile);
                }, 500); // Slight delay for effect
            }
        }
    }

    const handleStartChat = () => {
        router.push('/messages');
    };

    const closeMatchModal = () => {
        setMatchedProfile(null);
    };

    const resetDemoFilters = () => {
        setProfiles(MOCK_PROFILES); // Reset to all
        setRightSwipeCount(0);
    }

    if (!isLoaded) return <div className="min-h-screen bg-posi-dark animate-pulse" />;

    return (
        <div className="min-h-screen pt-16 flex flex-col font-sans relative overflow-hidden">

            {/* Sub Header for Discover Controls */}
            <header className="px-6 py-4 flex justify-between items-center z-20 relative container-custom">
                <Link href="/profile" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-posi-pink/20 hover:border-posi-pink/50 transition-all group overflow-hidden">
                    {currentUser?.profile?.avatar ? (
                        <img src={currentUser.profile.avatar} className="w-full h-full object-cover" />
                    ) : (
                        <User className="w-5 h-5 text-white/80 group-hover:text-posi-pink transition-colors" />
                    )}
                </Link>

                {/* Visual Privacy Indicator */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-posi-plum/40 backdrop-blur-md rounded-full border border-posi-pink/20 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                    <span className="text-[10px] text-posi-light/90 font-bold tracking-widest uppercase">
                        Compatibility: {currentUser?.profile.lookingFor === 'everyone' ? 'All' : currentUser?.profile.lookingFor === 'men' ? 'Men' : 'Women'}
                    </span>
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
                            <p className="text-posi-light/60 mb-8 max-w-[200px]">You've seen everyone matching your preferences.</p>
                            <button
                                onClick={resetDemoFilters}
                                className="px-8 py-3 bg-gradient-to-r from-posi-pink to-posi-coral text-white rounded-full font-bold shadow-lg shadow-posi-coral/20 hover:scale-105 transition-all"
                            >
                                Show All (Demo)
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

            {/* MATCH MODAL */}
            <AnimatePresence>
                {matchedProfile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-posi-plum/90 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            className="w-full max-w-sm bg-black/40 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden"
                        >
                            {/* Confetti / Sparkles Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-posi-pink/20 via-transparent to-posi-gold/20 pointer-events-none" />

                            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-posi-gold to-posi-coral mb-2 italic transform -rotate-2">
                                IT'S A MATCH!
                            </h2>
                            <p className="text-white/80 mb-8 font-medium">You and {matchedProfile.name} dig each other.</p>

                            <div className="flex items-center justify-center gap-4 mb-10 w-full relative">
                                {/* My Photo (Placeholder/Mock) */}
                                <div className="w-24 h-24 rounded-full border-4 border-posi-plum overflow-hidden z-10 shadow-xl relative -mr-4 transform -rotate-6">
                                    <img
                                        src={currentUser?.profile.avatar || "/512.png"}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Their Photo */}
                                <div className="w-24 h-24 rounded-full border-4 border-posi-plum overflow-hidden z-20 shadow-xl transform rotate-6 scale-110 border-posi-gold/50">
                                    <img
                                        src={matchedProfile.photos[0]}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleStartChat}
                                className="w-full btn-primary py-4 rounded-xl text-lg font-bold mb-3 shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" /> Say Hello
                            </button>

                            <button
                                onClick={closeMatchModal}
                                className="text-white/60 font-semibold hover:text-white transition-colors text-sm"
                            >
                                Keep Swiping
                            </button>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
