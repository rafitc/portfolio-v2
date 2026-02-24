import BlurFade from "@/components/magicui/blur-fade";
import BlogFilteredList from "@/components/blog-filter";
import { getBlogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Serialize only what the client component needs
  const serializedPosts = posts.map((post) => ({
    slug: post.slug,
    metadata: {
      title: post.metadata.title,
      publishedAt: post.metadata.publishedAt,
      summary: post.metadata.summary,
      tags: post.metadata.tags ?? [],
    },
  }));

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-6xl mb-8 tracking-tighter">Blog</h1>
      </BlurFade>
      <BlogFilteredList posts={serializedPosts} />
    </section>
  );
}
