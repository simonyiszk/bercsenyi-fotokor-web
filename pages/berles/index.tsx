import InnerLayout from "@/components/layouts/InnerLayout";
import Listing from "@/components/typography/Listing";

export default function RentPage() {
  const items = ["Zenit 123", "Hasselblad 123", "Canon AE-1"];
  return (
    <InnerLayout title="Bérlés" restrictHeight restrictWidth>
      <Listing title="mit tudsz kölcsönözni tőlünk?" items={items} />
    </InnerLayout>
  );
}
