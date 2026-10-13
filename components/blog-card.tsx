import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogArticle } from "@/lib/blog-source";

export function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <Link className="blog-card" href={`/blog/${article.category}/${article.slug}/`}>
      <figure className="blog-card-media">
        <span className="blog-card-chip">{article.categoryLabel}</span>
        <Image src={article.image} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw" unoptimized />
      </figure>
      <div className="blog-card-body">
        <span className="blog-card-date">{article.date}</span>
        <h3 className="blog-card-title">{article.title}</h3>
        <p className="blog-card-excerpt">{article.copy}</p>
        <span className="blog-card-cta">Leer más <ArrowRight size={15} /></span>
      </div>
    </Link>
  );
}
