import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Vish Design Studio | Award-Winning Interior Design in Chennai",
        template: "%s | Vish Design Studio",
    },
    description: "Award-winning architectural design studio specializing in modern, sustainable, and innovative interior spaces. Based in Chennai, serving clients globally.",
    keywords: [
        "interior design",
        "architectural design",
        "Chennai interior designer",
        "luxury interior design",
        "residential design",
        "commercial design",
        "sustainable design",
        "modern architecture",
        "Vish Design Studio",
        "Gayathri Vish",
    ],
    authors: [{ name: "Gayathri Vish", url: "https://vishdesignstudio.com" }],
    creator: "Vish Design Studio",
    publisher: "Vish Design Studio",
    metadataBase: new URL('https://vishdesignstudio.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://vishdesignstudio.com",
        siteName: "Vish Design Studio",
        title: "Vish Design Studio | Award-Winning Interior Design",
        description: "Award-winning architectural design studio specializing in modern, sustainable, and innovative interior spaces. Based in Chennai, serving clients globally.",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "Vish Design Studio - Award-Winning Interior Design",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Vish Design Studio | Award-Winning Interior Design",
        description: "Award-winning architectural design studio specializing in modern, sustainable, and innovative interior spaces.",
        images: ["/logo.png"],
        creator: "@vishdesignstudio",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/logo.png',
        apple: '/logo.png',
    },
    manifest: '/manifest.json',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
