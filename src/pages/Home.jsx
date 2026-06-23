import Hero from "../components/sections/Hero";
import FeaturedProperties from "../components/sections/FeaturedProperties";
import Categories from "../components/sections/Categories";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ShowcaseProjects from "../components/sections/ShowcaseProjects";
import AgentsPreview from "../components/sections/AgentsPreview";
import ServicesPreview from "../components/sections/ServicesPreview";
import InvestmentCalculator from "../components/sections/InvestmentCalculator";
import Testimonials from "../components/sections/Testimonials";
import BlogPreview from "../components/sections/BlogPreview";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Categories />
      <WhyChooseUs />
      <ShowcaseProjects />
      <ServicesPreview />
      <InvestmentCalculator />
      <AgentsPreview />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <CTA />
    </>
  );
}
