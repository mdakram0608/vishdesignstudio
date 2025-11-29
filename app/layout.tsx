import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Vish Design Studio | Architectural Designer Portfolio",
    description: "Award-winning architectural design studio specializing in modern, sustainable, and innovative spaces.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.Node;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
