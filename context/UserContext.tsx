'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
interface User {
    id: string;
    name: string;
    isPremium: boolean;
    avatar: string;
}

interface UserContextType {
    currentUser: User | null;
    isWaiverAccepted: boolean;
    acceptWaiver: () => void;
    matches: any[]; // Extended as needed
}

// Mock Data
const MOCK_USER: User = {
    id: 'u1',
    name: 'Alpha Tester',
    isPremium: true, // Alpha users get premium
    avatar: '/512.png',
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [currentUser] = useState<User>(MOCK_USER);
    const [isWaiverAccepted, setIsWaiverAccepted] = useState(false);

    // Load waiver state from localStorage on mount
    useEffect(() => {
        const accepted = localStorage.getItem('posilove_waiver_accepted');
        if (accepted === 'true') {
            setIsWaiverAccepted(true);
        }
    }, []);

    const acceptWaiver = () => {
        setIsWaiverAccepted(true);
        localStorage.setItem('posilove_waiver_accepted', 'true');
    };

    return (
        <UserContext.Provider value={{
            currentUser,
            isWaiverAccepted,
            acceptWaiver,
            matches: [] // Add mock matches here if needed later
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
