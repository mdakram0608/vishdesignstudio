import Link from 'next/link';
import { blogPosts, getBlogPost } from '@/lib/blogData';
import BlogPostClient from './BlogPostClient';
import styles from './blogPost.module.css';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return (
            <div className={styles.notFound}>
                <h1>Blog post not found</h1>
                <Link href="/blog">Back to Blog</Link>
            </div>
        );
    }

    const currentIndex = blogPosts.findIndex(p => p.slug === slug);
    const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

    return <BlogPostClient post={post} prevPost={prevPost} nextPost={nextPost} />;
}
