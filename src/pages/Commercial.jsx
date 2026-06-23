import PageHeader from "../components/ui/PageHeader";
import PropertyListing from "../components/sections/PropertyListing";

const headerImg =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80";

export default function Commercial() {
  return (
    <>
      <PageHeader
        title="Commercial Properties"
        subtitle="Office floors, retail units and headquarters opportunities engineered for serious occupiers and investors."
        breadcrumb={[{ label: "Commercial" }]}
        image={headerImg}
      />
      <PropertyListing purpose="commercial" />
    </>
  );
}
