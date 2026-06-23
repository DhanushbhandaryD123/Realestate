import PageHeader from "../components/ui/PageHeader";
import PropertyListing from "../components/sections/PropertyListing";

const headerImg =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80";

export default function Properties() {
  return (
    <>
      <PageHeader
        title="All Properties"
        subtitle="Browse our full portfolio of homes, apartments and commercial spaces — filter, sort and find your match."
        breadcrumb={[{ label: "Properties" }]}
        image={headerImg}
      />
      <PropertyListing purpose="all" />
    </>
  );
}
