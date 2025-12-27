import { Bell, Search, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const inboxMessages = [
  { name: "Mike Thomson", message: "Tell me later", time: "10.32 am", unread: 4, avatar: "/placeholder-avatar.png" },
  { name: "George Dose", message: "Okey then. Tha...", time: "09.17 am", unread: 1, avatar: "/placeholder-avatar.png" },
  { name: "Lisa Moren", message: "How long the p...", time: "Yesterday", unread: 2, avatar: "/placeholder-avatar.png" },
  { name: "Louise Robert", message: "Typing....", time: "Yesterday", unread: 1, avatar: "/placeholder-avatar.png" },
  { name: "Sandra Moses", message: "I will. Thank's Ja...", time: "Yesterday", unread: 1, avatar: "/placeholder-avatar.png" },
];

const topSelling = [
  { name: "Dolan watch", sales: 365, trend: "up" },
  { name: "Sisy bag", sales: 135, trend: "up" },
  { name: "Path shoes", sales: 65, trend: "up" },
  { name: "Eagle bag", sales: 83, trend: "down" },
  { name: "Norlin pin", sales: 114, trend: "up" },
  { name: "Kiska tie", sales: 75, trend: "up" },
  { name: "Nora Bag", sales: 58, trend: "up" },
];

export function RightSidebar() {
  return (
    <div className="w-80 bg-[#1F2125] text-white flex flex-col h-screen fixed right-0 top-0 z-40 p-6 overflow-y-auto border-l border-gray-800">
      {/* Profile & Search */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
             {/* Avatar Placeholder */}
             <div className="w-full h-full bg-gray-400"></div>
          </div>
          <div>
            <h3 className="font-bold text-sm">Jackson Murouse</h3>
            <p className="text-xs text-gray-400">Sale Manager</p>
          </div>
        </div>
        <Bell className="text-gray-400 w-5 h-5 cursor-pointer hover:text-white" />
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input 
          type="text" 
          placeholder="Search...." 
          className="w-full bg-[#2C2E33] rounded-lg py-2 pl-10 pr-4 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>

      {/* Inbox */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Inbox</h3>
          <div className="w-6 h-6 rounded-full bg-[#2C2E33] flex items-center justify-center cursor-pointer">
             <span className="text-xs">←</span>
          </div>
        </div>
        <div className="space-y-4">
          {inboxMessages.map((msg, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-600 shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                   <h4 className="font-semibold text-sm truncate">{msg.name}</h4>
                   <span className="text-[10px] text-gray-400">{msg.time}</span>
                </div>
                <p className="text-xs text-gray-400 truncate">{msg.message}</p>
              </div>
              {msg.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
                  {msg.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Top Selling Product */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Top Selling Product</h3>
          <button className="text-xs bg-white text-black px-2 py-1 rounded">1W</button>
        </div>
        <div className="space-y-3">
            <div className="flex justify-between text-xs text-gray-400 border-b border-gray-700 pb-2">
                <span>Product</span>
                <span>Sale</span>
            </div>
            {topSelling.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {item.trend === 'up' ? (
                            <ArrowUp className="w-3 h-3 text-green-500" />
                        ) : (
                            <ArrowDown className="w-3 h-3 text-red-500" />
                        )}
                        <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium">{item.sales}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
