import { getCourseBySlug } from "@/lib/mockCourses";
import CourseDetail from "@/components/CourseDetail"
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type PageProps = {
    params: {
        slug: string
    }
}

/************************************
 * Dynamic SEO metadata (SSR)
*************************************/

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        return {}
    }

    const title = `${course.title} | StarHub Academy`;
    const description = course.description;
    const url = `https://www.starhub.academy/courses/${course.slug}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: "StarHub Academy",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
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