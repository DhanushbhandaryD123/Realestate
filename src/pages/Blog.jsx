import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import { blogPosts, blogCategories } from "../data/content";
import { fadeUp, viewport, staggerContainer } from "../utils/motion";

export default function Blog() {
  const [active, setActive] = useState("All");

  const posts =
    active === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        title="Insights & Journal"
        subtitle="Market intelligence, buying guides and stories from the world of prime property."
        breadcrumb={[{ label: "Blog" }]}
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {blogCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  active === c
                    ? "bg-navy text-white"
                    : "border border-navy/15 text-navy/70 hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={staggerContainer()}
              initial="hidden"
              animate="show"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {posts.map((post) => (
                <motion.article key={post.id} variants={fadeUp()}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-navy/85 px-3 py-1 text-xs font-medium text-gold backdrop-blur">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-4 text-xs text-navy/50">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-xl text-navy transition-colors group-hover:text-gold">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-navy/60">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                        Read article
                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
