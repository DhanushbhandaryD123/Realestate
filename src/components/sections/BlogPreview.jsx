import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { blogPosts } from "../../data/content";
import { fadeUp, staggerContainer, viewport } from "../../utils/motion";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title="From the Journal"
            subtitle="Market intelligence, guides and ideas from our advisory team."
          />
          <Button to="/blog" variant="outline" size="sm" className="border-navy/20 text-navy hover:bg-navy hover:text-white hover:border-navy">
            All Articles <ArrowRight size={16} />
          </Button>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-7 md:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.article key={post.id} variants={fadeUp()}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] ring-1 ring-navy/5"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-navy/50">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl leading-snug text-navy transition group-hover:text-gold">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-navy/60">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-medium text-gold">
                    Read article <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
