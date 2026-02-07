import Link from "next/link";
import { mockCourses } from "@/lib/mockCourses";


export default function HomePage() {
    return (
        <main className="bg-white">
            <div className="mx-auto max-w-3xl px-4 py-24">
                <p className="text-sm font-medium uppercase tracking-wide color-brand-tertiary">
                    StartHub Academy
                </p>
                
                <h1 className="mt-4 text-4xl font-semibold tracking-tight">
                    Learn modern <span className="color-brand-primary">Web Development</span>,
                    <br className="hidden sm:block" />
                    the right way
                </h1>

                <p className="mt-6 max-w-xl text-lg text-slate-600">
                    Practical, performance-focused courses designed for builders who care
                    about quality, scalability, and real-world impact.
                </p>

                {mockCourses.map(course => {
                    return (
                        <div
                            key={course.id}
                            className="mt-10"
                        >
                            <h2 className="text-2xl font-semibold mb-2 color-brand-primary">
                                {course.title}
                            </h2>
                            <p>{course.short_description}</p>
                            <Link
                                href={`/courses/${course.slug}`}
                                className="inline-block color-brand-tertiary font-medium underline"
                            >
                                View course
                            </Link>
                        </div>
                    )
                })}
      </div>
    </main>
    )
}