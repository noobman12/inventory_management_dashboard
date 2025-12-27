"use client";

import { Search, ChevronDown, Truck, MapPin } from "lucide-react";

const shipments = Array(10).fill({
  id: "SHP-12345678",
  orderId: "12563987563",
  date: "19/7/2023",
  destination: "New York, USA",
  carrier: "FedEx",
  status: "In Transit"
});

export function ShippingContent() {
  return (
    <div className="flex-1 p-8 bg-[#F5F6FA] min-h-screen overflow-y-auto ml-64 mr-80">
      <div className="flex items-center justify-between mb-8">
        <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search Shipment..." 
              className="w-full bg-white rounded-lg py-2.5 pl-10 pr-4 text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
        </div>
        
        <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#2C2E33] text-white px-4 py-2.5 rounded-lg text-sm font-medium">
                Filter : Status <ChevronDown size={16} />
            </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
            <thead className="text-black font-semibold border-b border-gray-100">
                <tr>
                    <th className="py-4 px-6 w-10"><input type="checkbox" className="rounded border-gray-300" /></th>
                    <th className="py-4 px-2">Shipment ID</th>
                    <th className="py-4 px-2">Order ID</th>
                    <th className="py-4 px-2">Date</th>
                    <th className="py-4 px-2">Destination</th>
                    <th className="py-4 px-2">Carrier</th>
                    <th className="py-4 px-2">Status</th>
                    <th className="py-4 px-6 text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                {shipments.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                        <td className="py-4 px-6"><input type="checkbox" className="rounded border-gray-300" /></td>
                        <td className="py-4 px-2 font-medium">{item.id}</td>
                        <td className="py-4 px-2 text-blue-600">{item.orderId}</td>
                        <td className="py-4 px-2 text-gray-600">{item.date}</td>
                        <td className="py-4 px-2 text-gray-600">{item.destination}</td>
                        <td className="py-4 px-2 font-medium">{item.carrier}</td>
                        <td className="py-4 px-2">
                             <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                                {item.status}
                            </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end gap-3 text-gray-400">
                                <Truck size={16} className="cursor-pointer hover:text-black" />
                                <MapPin size={16} className="cursor-pointer hover:text-black" />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}
