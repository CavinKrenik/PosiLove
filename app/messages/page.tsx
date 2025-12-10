'use client';

import { ArrowLeft, MoreVertical, Send, Phone, Video, ShieldCheck, Image as ImageIcon, X, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const MOCK_CHATS = [
    { id: 1, name: 'Sarah', lastMessage: 'That hike looks amazing! 🏔️', time: '2m', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', active: true },
    { id: 2, name: 'Jessica', lastMessage: 'GG! We crushed it.', time: '1h', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', active: false },
];

export default function MessagesPage() {
    const [activeChat, setActiveChat] = useState<number | null>(null);

    if (activeChat) {
        const chat = MOCK_CHATS.find(c => c.id === activeChat);
        return (
            <div className="flex flex-col h-screen bg-white">
                {/* Chat Header */}
                <header className="flex items-center p-4 shadow-sm border-b sticky top-0 bg-white z-10 border-posi-subtle">
                    <button onClick={() => setActiveChat(null)} className="mr-4 text-posi-plum hover:text-black">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <div className="relative">
                        <img src={chat?.avatar} className="w-10 h-10 rounded-full object-cover" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="ml-3 flex-grow">
                        <h3 className="font-bold text-posi-plum">{chat?.name}</h3>
                        <div className="flex items-center gap-1 text-xs text-blue-500 font-medium">
                            <ShieldCheck className="w-3 h-3" />
                            <span>Verified Human</span>
                        </div>
                    </div>
                    <div className="flex gap-4 text-gray-400">
                        <Phone className="w-5 h-5 cursor-pointer hover:text-posi-pink" />
                        <Video className="w-5 h-5 cursor-pointer hover:text-posi-pink" />
                    </div>
                </header>

                {/* Chat Area */}
                <main className="flex-grow p-4 overflow-y-auto space-y-4 bg-posi-light">

                    {/* Safety System Message */}
                    <div className="flex flex-col gap-2 items-center my-4">
                        <div className="bg-yellow-50 border border-yellow-100 text-yellow-800 text-xs px-4 py-2 rounded-full flex items-center gap-2">
                            <ShieldCheck className="w-3 h-3" />
                            <span>Detailed health info is kept private. Focus on the connection!</span>
                        </div>
                        {/* NEW: Consent Tip */}
                        <div className="text-[10px] text-gray-400 italic text-center max-w-xs">
                            “Ask before sharing details. Check in about comfort levels. Consent is a conversation.”
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Today</span>
                    </div>

                    {/* Received Bubble */}
                    <div className="flex items-end max-w-[85%]">
                        <img src={chat?.avatar} className="w-8 h-8 rounded-full object-cover mr-2 mb-1" />
                        <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 text-gray-800">
                            <p>Hey! I saw you like hiking. Have you been to Breakneck Ridge?</p>
                        </div>
                    </div>

                    {/* Sent Bubble */}
                    <div className="flex items-end max-w-[85%] ml-auto flex-row-reverse">
                        <div className="bg-posi-pink text-white p-3 rounded-2xl rounded-br-sm shadow-sm font-medium">
                            <p>Yes! Just went last weekend. It's intense but worth it.</p>
                        </div>
                    </div>

                    {/* CONSENT MOCK: Photo Request */}
                    <div className="flex items-end max-w-[90%] md:max-w-[70%]">
                        <img src={chat?.avatar} className="w-8 h-8 rounded-full object-cover mr-2 mb-1" />
                        <div className="bg-gray-50 border border-gray-200 p-1 rounded-2xl rounded-bl-sm w-full overflow-hidden">
                            <div className="bg-white p-3 rounded-xl border border-gray-100 mb-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <ImageIcon className="w-4 h-4 text-posi-pink" />
                                    <span className="text-sm font-bold text-posi-plum">Photo Request</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-3">
                                    {chat?.name} wants to send a photo. Do you accept?
                                </p>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-black text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-gray-800">
                                        <Check className="w-3 h-3" /> Accept
                                    </button>
                                    <button className="flex-1 bg-gray-100 text-gray-600 text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-gray-200">
                                        <X className="w-3 h-3" /> Decline
                                    </button>
                                </div>
                            </div>
                            <p className="text-[10px] text-center text-gray-400 py-1">PosiLove Consent Engine™</p>
                        </div>
                    </div>

                    {/* Received Bubble */}
                    <div className="flex items-end max-w-[85%]">
                        <img src={chat?.avatar} className="w-8 h-8 rounded-full object-cover mr-2 mb-1" />
                        <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 text-gray-800">
                            <p>Cool, just wanted to check before sending! Here's the view 🌄</p>
                        </div>
                    </div>

                    {/* DISCLOSURE MOCK */}
                    <div className="flex justify-center mt-6">
                        <button className="bg-posi-card border border-posi-subtle text-posi-plum px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-posi-pink/10 transition-colors shadow-sm">
                            <ShieldCheck className="w-3 h-3 text-posi-pink" />
                            Ready to share more? Start Guided Disclosure
                        </button>
                    </div>


                </main>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-posi-subtle flex items-center gap-2">
                    <input type="text" placeholder="Type a message..." className="flex-grow p-3 bg-posi-light rounded-full outline-none focus:ring-1 focus:ring-posi-pink/50 transition-all font-sans" />
                    <button className="p-3 bg-posi-pink text-white rounded-full hover:bg-posi-coral transition-colors shadow-lg">
                        <Send className="w-5 h-5 ml-0.5" />
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-posi-light flex flex-col font-sans">
            <header className="p-4 bg-white shadow-sm font-bold text-xl flex items-center justify-between sticky top-0 z-10 border-b border-posi-subtle">
                <h1 className="text-posi-plum">Messages</h1>
                <Link href="/discover" className="text-sm font-medium text-posi-pink hover:underline">
                    Back to Deck
                </Link>
            </header>

            <main className="p-4 space-y-2">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2 mb-2">New Matches</h2>
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {[...MOCK_CHATS, ...MOCK_CHATS].map((chat, i) => (
                        <div key={i} className="flex flex-col items-center flex-shrink-0 cursor-pointer hover:scale-105 transition-transform">
                            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-r from-posi-pink to-posi-gold">
                                <img src={chat.avatar} className="w-full h-full rounded-full object-cover border-2 border-white" />
                            </div>
                            <span className="text-xs font-semibold mt-1 text-gray-700">{chat.name}</span>
                        </div>
                    ))}
                </div>

                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2 mb-2 mt-6">Conversations</h2>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {MOCK_CHATS.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => setActiveChat(chat.id)}
                            className="flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors border-b last:border-0 border-gray-50"
                        >
                            <div className="relative mr-4">
                                <img src={chat.avatar} className="w-14 h-14 rounded-full object-cover" />
                                {chat.active && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />}
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="font-bold text-gray-900">{chat.name}</h3>
                                    <span className="text-xs text-gray-400">{chat.time}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {!chat.active && <Check className="w-3 h-3 text-gray-300" />}
                                    <p className="text-sm text-gray-500 line-clamp-1">{chat.lastMessage}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
