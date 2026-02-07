import Link from "next/link"

export default function HomePage() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-12">
            <h1 className="text-3xl font-bold mb-4">
                StarHub Academy
            </h1>

            <Link
                href="/courses/nextjs-seo-mastery"
                className="text-blue-600 underline"
            >
                View Course Detail
            </Link>
        </main>
    )
}