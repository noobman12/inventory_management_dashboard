"use client";

import { Search, ChevronDown, Download } from "lucide-react";

const reports = [
    { name: "Monthly Sales Report - July 2023", date: "31/7/2023", type: "Sales", size: "2.4 MB" },
    { name: "Inventory Status Report", date: "30/7/2023", type: "Inventory", size: "1.1 MB" },
    { name: "Customer Acquisition Q2", date: "15/7/2023", type: "Marketing", size: "5.6 MB" },
    { name: "Annual Financial Statement 2022", date: "1/1/2023", type: "Finance", size: "12 MB" },
];

export function StatisticsContent() {
  return (
    <div className="flex-1 p-8 bg-[#F5F6FA] min-h-screen overflow-y-auto ml-64 mr-80">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Reports & Statistics</h2>
        
        <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#2C2E33] text-white px-4 py-2.5 rounded-lg text-sm font-medium">
                Period: Last Month <ChevronDown size={16} />
            </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
            <thead className="text-black font-semibold border-b border-gray-100">
                <tr>
                    <th className="py-4 px-6">Report Name</th>
                    <th className="py-4 px-2">Generated Date</th>
                    <th className="py-4 px-2">Type</th>
                    <th className="py-4 px-2">Size</th>
                    <th className="py-4 px-6 text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                {reports.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium">{item.name}</td>
                        <td className="py-4 px-2 text-gray-600">{item.date}</td>
                        <td className="py-4 px-2">
                             <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                {item.type}
                            </span>
                        </td>
                        <td className="py-4 px-2 text-gray-600">{item.size}</td>
                        <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end gap-3 text-gray-400">
                                <Download size={16} className="cursor-pointer hover:text-black" />
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
