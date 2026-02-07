import { Course } from "@/lib/mockCourses"

type Props = {
    course: Course
}

export default function CourseDetail({ course }: Props) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
            "@type": "Organization",
            name: course.provider,
            url: "https://www.starhub.academy",
        },
    }
    return (
        <main className="mx-auto max-w-3xl px-4 py-12">
            {/* Structured Data for Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            {/* End Structured Data */}

            <article>
                <header className="mb-6">
                    <h1 className="text-3xl font-bold text-slate-900">
                        {course.title}
                    </h1>
                    <p className="mt-2 text-slate-600">
                        Provided by {course.provider}
                    </p>
                </header>

                <section>
                    <p className="text-lg leading-relaxed text-slate-800">
                        {course.description}
                    </p>
                </section>
            </article>
        </main>
    )
}