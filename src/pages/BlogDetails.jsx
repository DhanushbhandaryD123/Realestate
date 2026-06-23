import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Button from "../components/ui/Button";
import { getPostBySlug, blogPosts } from "../data/content";
import { fadeUp, staggerContainer, viewport } from "../utils/motion";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-5 text-center">
        <h1 className="font-display text-3xl text-navy">Article not found</h1>
        <p className="mt-3 text-navy/60">
          The piece you&rsquo;re looking for may have moved.
        </p>
        <Button to="/blog" className="mt-6">
          Back to Journal
        </Button>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const paragraphs = post.content.split("\n").filter(Boolean);

  return (
    <article>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-navy pb-14 pt-36">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/30" />
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-3xl px-5 lg:px-8"
        >
          <motion.span
            variants={fadeUp()}
            className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy"
          >
            {post.category}
          </motion.span>
          <motion.h1
            variants={fadeUp()}
            className="mt-5 font-display text-3xl leading-tight text-white lg:text-5xl"
          >
            {post.title}
          </motion.h1>
          <motion.div
            variants={fadeUp()}
            className="mt-6 flex flex-wrap items-center gap-5 text-sm text-cream/70"
          >
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-gold" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gold" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-gold" /> {post.readTime}
            </span>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-navy/60 transition-colors hover:text-gold"
          >
            <ArrowLeft size={16} /> Back to all articles
          </Link>

          <p className="font-display text-xl leading-relaxed text-navy/90">
            {post.excerpt}
          </p>
          <div className="gold-rule my-8" />
          {paragraphs.map((p, i) => (
            <p key={i} className="mb-6 leading-relaxed text-navy/75">
              {p}
            </p>
          ))}

          <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
            <h3 className="font-display text-2xl text-white">
              Thinking about your next move?
            </h3>
            <p className="mt-2 text-cream/70">
              Our advisors are ready to help you act on these insights.
            </p>
            <Button to="/contact" className="mt-6">
              Speak to an Advisor
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="mb-10 font-display text-2xl text-navy lg:text-3xl">
            More from the journal
          </h2>
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-8 md:grid-cols-3"
          >
            {related.map((r) => (
              <motion.div key={r.id} variants={fadeUp()}>
                <Link
                  to={`/blog/${r.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-navy/10 bg-cream shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-gold">
                      {r.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg text-navy group-hover:text-gold">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </article>
  );
}
