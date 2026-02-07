import { getCourseBySlug } from "@/lib/mockCourses";
import CourseDetail from "@/components/CourseDetail"
import { notFound } from "next/navigation";

type PageProps = {
    params: {
        slug: string
    }
}

export default function CoursePage({ params }: PageProps) {
    const course = getCourseBySlug(params.slug)

    if (!course) {
        notFound()
    }

    return <CourseDetail course={course} />
}