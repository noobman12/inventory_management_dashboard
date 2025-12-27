import { SettingContent } from "@/components/SettingContent";
import { SettingSidebar } from "@/components/SettingSidebar";

export default function SettingPage() {
  return (
    <div className="flex">
      <SettingContent />
      <SettingSidebar />
    </div>
  );
}
