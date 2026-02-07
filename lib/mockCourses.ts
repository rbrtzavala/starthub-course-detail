export type Course = {
    slug: string
    title: string
    description: string
    short_description: string
    provider: string
    id: number,
}

export const mockCourses: Course[] = [
    {
        slug: "nextjs-seo-mastery",
        title: "Next.js SEO Mastery",
        description: "Learn how to build high-performance, SEO-optimized applications using Next.js and modern web standards.",
        short_description: "Learn how to build high-performance...",
        provider: "StarHub Academy",
        id: 0,
    },
    {
        slug: "testing-for-seo",
        title: "Testing for SEO",
        description: "Learn to test your SEO pages with modern testing tools",
        short_description: "Learn to test your SEO ...",
        provider: "StarHub Academy",
        id: 1.
    },
]
export function getCourseBySlug(slug: string): Course | undefined {
    return mockCourses.find((course) => course.slug === slug)
}