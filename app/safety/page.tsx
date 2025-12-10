import Link from "next/link";
import { Shield } from "lucide-react";

export default function SafetyPage() {
    return (
        <div className="min-h-screen pt-24 px-6 flex flex-col items-center text-center">
            <div className="container-custom card-base p-12 max-w-2xl animate-fade-in-up">
                <div className="w-16 h-16 bg-posi-coral/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-posi-coral" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-6">Safety First</h1>
                <p className="text-lg text-posi-light/80 mb-8">
                    Your safety—emotional, physical, and digital—is our top priority.
                </p>
                <ul className="text-left space-y-4 text-white/70 mb-10 max-w-md mx-auto">
                    <li>• Encryption for all messages</li>
                    <li>• Verified profiles to prevent catfish</li>
                    <li>• Zero-tolerance harassment policy</li>
                </ul>
                <div className="mt-10">
                    <Link href="/" className="btn-primary px-6 py-3 rounded-full text-sm">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
