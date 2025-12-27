import { ProductContent } from "@/components/ProductContent";
import { ProductPreviewSidebar } from "@/components/ProductPreviewSidebar";

export default function ProductPage() {
  return (
    <div className="flex">
      <ProductContent />
      <ProductPreviewSidebar />
    </div>
  );
}
