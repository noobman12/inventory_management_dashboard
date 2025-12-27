import { ShippingContent } from "@/components/ShippingContent";
import { ShippingSidebar } from "@/components/ShippingSidebar";

export default function ShippingPage() {
  return (
    <div className="flex">
      <ShippingContent />
      <ShippingSidebar />
    </div>
  );
}
