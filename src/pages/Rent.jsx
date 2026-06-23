import PageHeader from "../components/ui/PageHeader";
import PropertyListing from "../components/sections/PropertyListing";

const headerImg =
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=2000&q=80";

export default function Rent() {
  return (
    <>
      <PageHeader
        title="Properties For Rent"
        subtitle="Premium rentals with flexible terms — managed end to end for a seamless tenancy."
        breadcrumb={[{ label: "Rent" }]}
        image={headerImg}
      />
      <PropertyListing purpose="rent" />
    </>
  );
}
