"use client";

import { 
  Home, 
  Package, 
  ShoppingBag, 
  CreditCard, 
  BarChart2, 
  Truck, 
  Users, 
  Settings, 
  LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Package, label: "Product", href: "/product" },
  { icon: ShoppingBag, label: "Order", href: "#" },
  { icon: CreditCard, label: "Payment", href: "#" },
  { icon: BarChart2, label: "Statistics", href: "#" },
  { icon: Truck, label: "Shipping", href: "#" },
  { icon: Users, label: "Manage User", href: "#" },
  { icon: Settings, label: "Setting", href: "#" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-[#1F2125] text-white flex flex-col h-screen fixed left-0 top-0 z-50">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
             <span className="text-black font-bold text-xl">M</span>
        </div>
        <h1 className="text-xl font-bold tracking-wider">MARLINE</h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer transition-colors",
                isActive 
                  ? "bg-white text-black" 
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              )}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
              {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black"></div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-8">
        <button 
          onClick={async () => {
             const { logout } = await import('@/app/actions/auth');
             await logout();
          }}
          className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white cursor-pointer transition-colors w-full text-left"
        >
          <LogOut size={20} />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
}
