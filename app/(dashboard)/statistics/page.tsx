import { StatisticsContent } from "@/components/StatisticsContent";
import { StatisticsSidebar } from "@/components/StatisticsSidebar";

export default function StatisticsPage() {
  return (
    <div className="flex">
      <StatisticsContent />
      <StatisticsSidebar />
    </div>
  );
}
