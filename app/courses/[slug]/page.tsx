import { getCourseBySlug } from "@/lib/mockCourses";
import CourseDetail from "@/components/CourseDetail"
import { notFound } from "next/navigation";

type PageProps = {
    params: {
        slug: string
    }
}

async function CoursePage({ params }: PageProps) {
    const { slug } = await params; 
    const course = getCourseBySlug(slug)

    if (!course) {
        notFound()
    }

    return <CourseDetail course={course} />
}

export default CoursePage