import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vishdesignstudio.com';

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/design-process`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];

    // Dynamic project pages
    const projects = [
        {
            slug: 'california-usa-2024',
            lastModified: new Date('2024-01-01'),
        },
        {
            slug: 'artisan-teak-mandala-2024',
            lastModified: new Date('2024-01-01'),
        },
    ];

    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: project.lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic blog pages - Add your blog posts here
    const blogPosts = [
        {
            slug: 'art-of-space-planning',
            lastModified: new Date('2024-01-01'),
        },
        {
            slug: 'sustainable-design',
            lastModified: new Date('2024-01-01'),
        },
        {
            slug: 'color-psychology',
            lastModified: new Date('2024-01-01'),
        },
        // Add more blog posts as they are created
    ];

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...projectPages, ...blogPages];
}
