import { OrderContent } from "@/components/OrderContent";
import { OrderSidebar } from "@/components/OrderSidebar";

export default function OrderPage() {
  return (
    <div className="flex">
      <OrderContent />
      <OrderSidebar />
    </div>
  );
}
