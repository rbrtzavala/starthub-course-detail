import { Course } from "@/lib/mockCourses"

type Props = {
    course: Course
}

export default function CourseDetail({ course }: Props) {
    return (
        <main className="mx-auto max-w-3xl px-4 py-12">
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