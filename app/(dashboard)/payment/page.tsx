import { PaymentContent } from "@/components/PaymentContent";
import { PaymentSidebar } from "@/components/PaymentSidebar";

export default function PaymentPage() {
  return (
    <div className="flex">
      <PaymentContent />
      <PaymentSidebar />
    </div>
  );
}
