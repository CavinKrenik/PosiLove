import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 px-6 flex flex-col items-center text-center">
            <div className="container-custom card-base p-12 max-w-2xl animate-fade-in-up">
                <h1 className="text-4xl font-bold text-white mb-6">About PosiLove</h1>
                <p className="text-lg text-posi-light/80 mb-8">
                    We are the first dating community built explicitly for safety, privacy, and stigma-free connection.
                </p>
                <p className="text-white/60">
                    This page is under construction, but our mission is clear: Love without fear.
                </p>
                <div className="mt-10">
                    <Link href="/" className="btn-primary px-6 py-3 rounded-full text-sm">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
