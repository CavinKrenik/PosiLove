import Link from "next/link";
import { Crown, Zap, Ghost, ArrowLeft } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header with Back Button */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 pb-32 relative overflow-hidden">
                <Link href="/discover" className="absolute top-6 left-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                </Link>

                <div className="relative z-10 flex flex-col items-center text-center mt-4">
                    <div className="w-24 h-24 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/30">
                        <Crown className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold">PosiLove Premium</h1>
                    <p className="text-yellow-400 font-medium text-sm bg-yellow-400/10 px-3 py-1 rounded-full mt-2 border border-yellow-400/20">
                        ACTIVE • FREE PREVIEW
                    </p>
                </div>

                {/* Background sparkles */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500/20 blur-3xl rounded-full" />
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full" />
            </div>

            {/* Content Card stack */}
            <div className="max-w-md mx-auto px-4 -mt-24 relative z-20 space-y-4">

                {/* Feature 1 */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                        <Ghost className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Ghost Mode</h3>
                        <p className="text-sm text-gray-500">Go invisible whenever you want.</p>
                    </div>
                    <div className="ml-auto">
                        <div className="w-10 h-6 bg-green-500 rounded-full relative">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                        </div>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                        <Zap className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Unlimited Swipes</h3>
                        <p className="text-sm text-gray-500">No limits on your love life.</p>
                    </div>
                    <div className="ml-auto text-green-500 font-bold text-sm">active</div>
                </div>

                <div className="p-6 text-center text-gray-400 text-sm">
                    <p>Billing: $0.00 / month</p>
                    <p className="text-xs mt-1 opacity-70">Enjoy the alpha preview!</p>
                </div>
            </div>

        </div>
    );
}
