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

                <h2 className="mt-5 mb-2 text-md font-bold uppercase tracking-wide brand-color-tertiary">
                    Courses: {" "}
                </h2>

                {mockCourses.map(course => {
                    return (
                        <div
                            key={course.id}
                            className="mb-10"
                        >
                            <h3 className="text-2xl font-semibold mb-2 color-brand-primary">
                                {course.title}
                            </h3>
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