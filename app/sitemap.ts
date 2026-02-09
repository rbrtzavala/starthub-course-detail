import { MetadataRoute } from "next";
import { mockCourses } from "@/lib/mockCourses";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://rbrtzavalastarhub.netlify.app/";
    const monthlyFreq = 'monthly' as const;
    const yearlyFreq = 'yearly' as const;

    const coursePages = mockCourses.map((course) => ({
        url: `${baseUrl}courses/${course.slug}`,
        lastModified: new Date(),
        changeFrequency: monthlyFreq,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: yearlyFreq,
            priority: 1,
        },
        ...coursePages,
    ]
}