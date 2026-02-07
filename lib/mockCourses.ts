export type Course = {
    slug: string
    title: string
    description: string
    provider: string
}

export const mockCourses: Course[] = [
    {
        slug: "nextjs-seo-mastery",
        title: "Next.js SEO Mastery",
        description: "Learn how to build high-performance, SEO-optimized applications using Next.js and modern web standards.",
        provider: "StarHub Academy"
    }
]
export function getCourseBySlug(slug: string): Course | undefined {
    return mockCourses.find((course) => course.slug === slug)
}