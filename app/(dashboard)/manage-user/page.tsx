import { ManageUserContent } from "@/components/ManageUserContent";
import { ManageUserSidebar } from "@/components/ManageUserSidebar";

export default function ManageUserPage() {
  return (
    <div className="flex">
      <ManageUserContent />
      <ManageUserSidebar />
    </div>
  );
}
