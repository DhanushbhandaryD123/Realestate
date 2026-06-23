import PageHeader from "../components/ui/PageHeader";
import PropertyListing from "../components/sections/PropertyListing";

const headerImg =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80";

export default function Buy() {
  return (
    <>
      <PageHeader
        title="Properties For Sale"
        subtitle="Homes and investment opportunities ready for ownership — from city apartments to waterfront villas."
        breadcrumb={[{ label: "Buy" }]}
        image={headerImg}
      />
      <PropertyListing purpose="buy" />
    </>
  );
}
