import { DashboardContent } from "@/components/DashboardContent";
import { RightSidebar } from "@/components/RightSidebar";

export default function Home() {
  return (
    <div className="flex">
      <DashboardContent />
      <RightSidebar />
    </div>
  );
}
