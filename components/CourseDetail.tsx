import { Course } from "@/lib/mockCourses";
import Link from "next/link";


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
      url: "https://www.starthub.academy",
    },
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="mx-auto max-w-3xl px-4 py-20">
        <article>
            <Link href="/"className="text-sm color-brand-secondary">
                &larr; Back to home
            </Link>
            {" "} | {" "}
              {/* Eyebrow */}
            <span className="text-sm font-medium uppercase tracking-wide text-brand">
                Course
            </span>

            {/* Title */}
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl color-brand-primary">
                {course.title}
            </h1>

            {/* Meta */}
            <p className="mt-3 text-slate-600">
                Provided by: {" "}
                <span className="font-medium text-slate-800 color-brand-tertiary">
                {course.provider}
                </span>
            </p>

            {/* Divider */}
            <hr className="my-10 border-slate-200" />

            {/* Content */}
            <section className="prose prose-slate max-w-none">
                <p className="text-lg">
                {course.description}
                </p>
          </section>
        </article>
      </div>
    </main>
  )
}
