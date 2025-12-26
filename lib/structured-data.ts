// Structured Data (JSON-LD) utilities for SEO

const SITE_URL = 'https://vishdesignstudio.com';
const SITE_NAME = 'Vish Design Studio';

// Organization Schema - Represents the business
export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description: 'Award-winning architectural design studio specializing in modern, sustainable, and innovative interior spaces.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Chennai',
            addressCountry: 'IN',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'info@vishdesignstudio.com',
        },
        founder: {
            '@type': 'Person',
            name: 'Gayathri Vish',
            jobTitle: 'Founder & Principal Designer',
        },
        sameAs: [
            'https://www.instagram.com/vishdesignstudio/',
            'https://www.facebook.com/WallsandDetails',
            'https://www.linkedin.com/company/vish-design-studio/',
            'https://www.youtube.com/@vishdesignstudio',
            'https://www.pinterest.com/vishdesignstudio/',
        ],
    };
}

// Person Schema - Represents the founder
export function getPersonSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Gayathri Vish',
        jobTitle: 'Founder & Principal Designer',
        worksFor: {
            '@type': 'Organization',
            name: SITE_NAME,
        },
        description: 'Interior designer with expertise in modern, sustainable design. Holds certifications from Harvard University Graduate School of Design and London School of Trends.',
        image: `${SITE_URL}/founder%20pic2.png`,
        url: SITE_URL,
        sameAs: [
            'https://www.linkedin.com/in/gayathri-vish-6baab6185/',
            'https://www.instagram.com/vishdesignstudio/',
        ],
        alumniOf: [
            {
                '@type': 'CollegeOrUniversity',
                name: 'Harvard University Graduate School of Design',
            },
            {
                '@type': 'CollegeOrUniversity',
                name: 'London School of Trends',
            },
            {
                '@type': 'CollegeOrUniversity',
                name: 'Stella Maris College',
            },
        ],
    };
}

// Website Schema
export function getWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        description: 'Award-winning architectural design studio specializing in modern, sustainable, and innovative interior spaces.',
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
        },
    };
}

// Breadcrumb Schema
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.url}`,
        })),
    };
}

// Creative Work Schema - for projects/portfolio items
export function getCreativeWorkSchema(project: {
    name: string;
    description: string;
    image: string;
    url: string;
    dateCreated?: string;
    location?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.name,
        description: project.description,
        image: `${SITE_URL}${project.image}`,
        url: `${SITE_URL}${project.url}`,
        creator: {
            '@type': 'Organization',
            name: SITE_NAME,
        },
        ...(project.dateCreated && { dateCreated: project.dateCreated }),
        ...(project.location && {
            locationCreated: {
                '@type': 'Place',
                name: project.location,
            },
        }),
    };
}

// Article Schema - for blog posts
export function getArticleSchema(article: {
    title: string;
    description: string;
    image: string;
    url: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: `${SITE_URL}${article.image}`,
        url: `${SITE_URL}${article.url}`,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
            '@type': 'Person',
            name: article.author || 'Gayathri Vish',
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/logo.png`,
            },
        },
    };
}

// Export the site URL for use in other files
export { SITE_URL, SITE_NAME };
