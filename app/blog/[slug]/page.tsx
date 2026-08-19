import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/posts";
import { BlogPostContent } from "@/components/pages/BlogPostContent";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article introuvable" };
  return {
    title: post.fr.title,
    description: post.fr.excerpt,
    openGraph: {
      type: "article",
      title: post.fr.title,
      description: post.fr.excerpt,
      images: [{ url: post.image, width: 1200, height: 800, alt: post.fr.title }],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.fr.title,
      description: post.fr.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <BlogPostContent post={post} />;
}
