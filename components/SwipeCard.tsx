'use client';

import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { BadgeCheck, Info, X, Heart, Star } from 'lucide-react';
import { useState } from 'react';

export interface Profile {
    id: string;
    name: string;
    age: number;
    bio: string;
    photos: string[];
    interests: string[];
    distance: number;
    isPremium?: boolean;
}

interface CardProps {
    profile: Profile;
    onSwipe: (direction: 'left' | 'right' | 'super') => void;
    style?: any;
}

export const Card = ({ profile, onSwipe, style }: CardProps) => {
    const controls = useAnimation();
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Rotation based on X movement
    const rotate = useTransform(x, [-200, 200], [-15, 15]);

    // Opacity for overlays (Like/Nope)
    const likeOpacity = useTransform(x, [50, 150], [0, 1]);
    const nopeOpacity = useTransform(x, [-50, -150], [0, 1]);
    const superOpacity = useTransform(y, [-50, -150], [0, 1]);

    const handleDragEnd = async (event: any, info: any) => {
        const threshold = 100;
        const velocity = info.velocity.x;

        if (info.offset.x > threshold || velocity > 500) {
            await controls.start({ x: 500, opacity: 0, transition: { duration: 0.2 } });
            onSwipe('right');
        } else if (info.offset.x < -threshold || velocity < -500) {
            await controls.start({ x: -500, opacity: 0, transition: { duration: 0.2 } });
            onSwipe('left');
        } else if (info.offset.y < -threshold) {
            await controls.start({ y: -500, opacity: 0, transition: { duration: 0.2 } });
            onSwipe('super');
        } else {
            controls.start({ x: 0, y: 0 });
        }
    };

    return (
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x, y, rotate, touchAction: 'none', ...style }}
            className="absolute top-0 left-0 w-full h-[600px] max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden cursor-grab active:cursor-grabbing border border-gray-100 select-none"
        >
            {/* Image Section */}
            <div className="relative h-[75%] w-full bg-gray-200">
                <img
                    src={profile.photos[0]}
                    alt={profile.name}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                {/* Name & Age Overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2">
                        <h2 className="text-3xl font-bold">{profile.name}</h2>
                        <span className="text-2xl font-medium opacity-90">{profile.age}</span>
                        {profile.isPremium && <BadgeCheck className="text-posi-gold fill-posi-gold/20" />}
                    </div>
                    <p className="text-sm opacity-80 flex items-center gap-1">
                        📍 {profile.distance} miles away
                    </p>
                </div>

                {/* SWIPE OVERLAYS */}
                <motion.div style={{ opacity: likeOpacity }} className="absolute top-8 left-8 border-4 border-posi-green rounded-lg px-4 py-2 rotate-[-15deg]">
                    <span className="text-4xl font-extrabold text-posi-green uppercase tracking-widest">LIKE</span>
                </motion.div>

                <motion.div style={{ opacity: nopeOpacity }} className="absolute top-8 right-8 border-4 border-red-500 rounded-lg px-4 py-2 rotate-[15deg]">
                    <span className="text-4xl font-extrabold text-red-500 uppercase tracking-widest">NOPE</span>
                </motion.div>

                <motion.div style={{ opacity: superOpacity }} className="absolute bottom-20 left-1/2 transform -translate-x-1/2 border-4 border-posi-blue rounded-lg px-4 py-2">
                    <span className="text-4xl font-extrabold text-posi-blue uppercase tracking-widest">SUPER</span>
                </motion.div>
            </div>

            {/* Info Section */}
            <div className="p-4 h-[25%] flex flex-col justify-between">
                <p className="text-gray-600 line-clamp-3 text-sm">
                    {profile.bio}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {profile.interests.slice(0, 3).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-semibold">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

        </motion.div>
    );
};
