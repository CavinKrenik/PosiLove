'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
export interface UserProfile {
    name: string;
    avatar: string; // URL or base64 placeholder
    bio: string;
    communityTags: string[]; // "Tribes"
    openToTags: string[];    // "I'm Open To"
    gender: 'male' | 'female' | 'non-binary';
    lookingFor: 'men' | 'women' | 'everyone';
}

export interface User {
    id: string;
    isPremium: boolean;
    profile: UserProfile;
}

type SwipeDirection = 'left' | 'right';

interface UserContextType {
    currentUser: User | null;
    isWaiverAccepted: boolean;
    acceptWaiver: () => void;

    // Mock Engine State
    swipes: Record<string, SwipeDirection>;
    matches: string[]; // List of matched User IDs

    // Actions
    updateProfile: (updates: Partial<UserProfile>) => void;
    onSwipe: (targetUserId: string, direction: SwipeDirection) => void;
    resetDemo: () => void;
    addMatch: (userId: string) => void;
}

// Default Mock User
const DEFAULT_USER: User = {
    id: 'u_alpha_001',
    isPremium: true,
    profile: {
        name: 'Alpha Tester',
        avatar: '', // Empty initially, will use initials
        bio: 'Ready to find my community.',
        communityTags: [],
        openToTags: [],
        gender: 'non-binary',
        lookingFor: 'everyone'
    }
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User>(DEFAULT_USER);
    const [isWaiverAccepted, setIsWaiverAccepted] = useState(false);
    const [swipes, setSwipes] = useState<Record<string, SwipeDirection>>({});
    const [matches, setMatches] = useState<string[]>([]);

    // 1. Load Initial State from LocalStorage
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Waiver
        const storedWaiver = localStorage.getItem('posilove_waiver_accepted');
        if (storedWaiver === 'true') setIsWaiverAccepted(true);

        // Profile
        const storedProfile = localStorage.getItem('posilove_user_profile');
        if (storedProfile) {
            try {
                const parsedProfile = JSON.parse(storedProfile);
                setCurrentUser(prev => ({ ...prev, profile: parsedProfile }));
            } catch (e) {
                console.error("Failed to parse stored profile", e);
            }
        }

        // Swipes
        const storedSwipes = localStorage.getItem('posilove_swipes');
        if (storedSwipes) {
            setSwipes(JSON.parse(storedSwipes));
        }

        // Matches
        const storedMatches = localStorage.getItem('posilove_matches');
        if (storedMatches) {
            setMatches(JSON.parse(storedMatches));
        }
    }, []);

    // 2. Action Handlers
    const acceptWaiver = () => {
        setIsWaiverAccepted(true);
        localStorage.setItem('posilove_waiver_accepted', 'true');
    };

    const updateProfile = (updates: Partial<UserProfile>) => {
        setCurrentUser(prev => {
            const newUser = {
                ...prev,
                profile: { ...prev.profile, ...updates }
            };
            localStorage.setItem('posilove_user_profile', JSON.stringify(newUser.profile));
            return newUser;
        });
    };

    const onSwipe = (targetUserId: string, direction: SwipeDirection) => {
        const newSwipes = { ...swipes, [targetUserId]: direction };
        setSwipes(newSwipes);
        localStorage.setItem('posilove_swipes', JSON.stringify(newSwipes));

        // Mock Match Logic: If standard logic determines a match, add here. 
        // Note: The specific "2nd right swipe = match" logic will be handled 
        // within the Discover page component calling this, or we can centrally logic it here.
        // For flexibility, let's allow the UI component to decide when to push a match,
        // or we could expose a `addMatch` helper. 
        // But per requirements, let's keep it simple. Discover page will trigger match.
    };

    // Helper exposed to essentially "Force Match" for demo purposes
    const addMatch = (userId: string) => {
        if (!matches.includes(userId)) {
            const newMatches = [...matches, userId];
            setMatches(newMatches);
            localStorage.setItem('posilove_matches', JSON.stringify(newMatches));
        }
    };

    const resetDemo = () => {
        localStorage.clear();
        window.location.reload();
    };

    // We expose addMatch via explicit logic or just internal to the flow? 
    // The interface requirements didn't explicitly ask for addMatch but the discover page needs it.
    // Let's attach it to onSwipe logic in the page or just trust this context.

    // Actually, to support the Discover page logic "2nd swipe right = match", 
    // we need to expose a way to set matches.
    // Let's modify the Context type slightly to include `addMatch` or handle it inside `onSwipe` with a special flag?
    // User requested: "onSwipe(id, direction): Updates the swipes state."
    // And "Mock Logic: In Discover, hardcode it so the second profile you swipe right... triggers match".
    // So Discover page needs to call `setMatches` or similar. 
    // I will add `addMatch` to the context for clean separation.

    return (
        <UserContext.Provider value={{
            currentUser,
            isWaiverAccepted,
            acceptWaiver,
            swipes,
            matches,
            updateProfile,
            onSwipe,
            resetDemo,
            addMatch
        }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
