import { sanityQuery } from "@/lib/sanity";
import { allBlogArticles, type BlogBodyBlock } from "@/lib/blog-articles";

export type BlogArticle = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  copy: string;
  body?: BlogBodyBlock[];
};

type SanityBlogPost = {
  slug: string;
  title: string;
  date?: string;
  category?: string;
  image?: string;
  excerpt?: string;
  body?: Array<{ _type: "h3" | "p" | "ul"; text?: string; items?: string[] }>;
};

const MONTHS: Record<string, number> = { ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5, jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11 };
const FALLBACK_IMAGE = "/blog/blog-01.jpg";

// Fechas con el formato del sitio: "Sep 11, 2026".
function dateValue(date: string) {
  const match = /^(\w{3})\w*\s+(\d{1,2}),\s*(\d{4})$/.exec(date.trim());
  if (!match) return 0;
  return Date.UTC(Number(match[3]), MONTHS[match[1].toLowerCase()] ?? 0, Number(match[2]));
}

const originalOrder = new Map(allBlogArticles.map((a, i) => [a.slug, i]));

function toArticle(post: SanityBlogPost): BlogArticle {
  return {
    slug: post.slug,
    title: post.title,
    date: post.date ?? "",
    category: post.category ?? "",
    image: post.image || FALLBACK_IMAGE,
    copy: post.excerpt ?? "",
    body: post.body?.map(block =>
      block._type === "ul" ? { type: "ul", items: block.items ?? [] } : { type: block._type, text: block.text ?? "" },
    ),
  };
}

// Más recientes primero; en la misma fecha se respeta el orden original del sitio.
function byDate(a: BlogArticle, b: BlogArticle) {
  return dateValue(b.date) - dateValue(a.date) || (originalOrder.get(a.slug) ?? -1) - (originalOrder.get(b.slug) ?? -1);
}

export async function getBlogArticles(): Promise<BlogArticle[]> {
  const posts = await sanityQuery<SanityBlogPost[]>(
    `*[_type == "blogPost" && defined(slug.current)]{"slug": slug.current, title, date, category, image, excerpt, body}`,
  );
  if (!posts?.length) return allBlogArticles;
  return posts.map(toArticle).sort(byDate);
}
