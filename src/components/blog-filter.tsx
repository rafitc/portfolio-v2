"use client";

import { useState } from "react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const TAG_CONFIG: Record<string, { label: string; emoji: string }> = {
  tech: { label: "Tech", emoji: "💻" },
  career: { label: "Career", emoji: "💼" },
  life: { label: "Life", emoji: "🌱" },
  "midnight-thoughts": { label: "Midnight Thoughts", emoji: "🌙" },
  spiritual: { label: "Spiritual", emoji: "🧘" },
};

type Post = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    tags?: string[];
  };
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogFilteredList({ posts }: { posts: Post[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Collect all unique tags used across posts
  const usedTags = Array.from(
    new Set(posts.flatMap((p) => p.metadata.tags ?? []))
  );

  const filteredPosts = posts
    .filter((post) =>
      activeTag ? post.metadata.tags?.includes(activeTag) : true
    )
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );

  return (
    <>
      {/* Tag filter bar */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTag(null)}
            className={cn(
              "inline-flex items-center gap-1 rounded-md border px-3 py-1 text-sm font-medium transition-colors cursor-pointer",
              activeTag === null
                ? "bg-primary text-primary-foreground border-transparent"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent"
            )}
          >
            🗂️ All
          </button>
          {usedTags.map((tag) => {
            const config = TAG_CONFIG[tag] ?? {
              label: tag.charAt(0).toUpperCase() + tag.slice(1),
              emoji: "🏷️",
            };
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-md border px-3 py-1 text-sm font-medium transition-colors cursor-pointer",
                  activeTag === tag
                    ? "bg-primary text-primary-foreground border-transparent"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent"
                )}
              >
                {config.emoji} {config.label}
              </button>
            );
          })}
        </div>
      </BlurFade>

      {/* Post list */}
      {filteredPosts.map((post, id) => (
        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="tracking-tight">{post.metadata.title}</p>
              <div className="flex items-center gap-2">
                <p className="text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
                {post.metadata.tags?.map((tag) => {
                  const config = TAG_CONFIG[tag] ?? {
                    label: tag.charAt(0).toUpperCase() + tag.slice(1),
                    emoji: "🏷️",
                  };
                  return (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0"
                    >
                      {config.emoji} {config.label}
                    </Badge>
                  );
                })}
              </div>
            </div>
          </Link>
        </BlurFade>
      ))}

      {filteredPosts.length === 0 && (
        <p className="text-sm text-muted-foreground mt-4">
          No posts found for this category.
        </p>
      )}
    </>
  );
}
