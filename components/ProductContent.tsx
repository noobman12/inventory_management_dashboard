"use client";

import { Search, ChevronDown, Plus, List, Grid, Edit2, Copy, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const products = Array(12).fill({
  noId: "1741D",
  name: "Dollan watch",
  sku: "12569756",
  location: "Warehouse 1",
  price: "$ 123",
  stock: "1108",
  image: "/placeholder-watch.png" // We'll handle images later or use placeholder
});

export function ProductContent() {
  return (
    <div className="flex-1 p-8 bg-[#F5F6FA] min-h-screen overflow-y-auto ml-64 mr-80">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search...." 
              className="w-full bg-white rounded-lg py-2.5 pl-10 pr-4 text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
        </div>
        
        <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#2C2E33] text-white px-4 py-2.5 rounded-lg text-sm font-medium">
                Best Seller <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 bg-[#2C2E33] text-white px-4 py-2.5 rounded-lg text-sm font-medium">
                Filter : No ID <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 bg-[#2C2E33] text-white px-4 py-2.5 rounded-lg text-sm font-medium">
                Add Item <Plus size={16} />
            </button>
            <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1">
                <button className="p-1.5 rounded bg-black text-white">
                    <List size={20} />
                </button>
                <button className="p-1.5 rounded text-gray-400 hover:text-black">
                    <Grid size={20} />
                </button>
            </div>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
            <thead className="text-black font-semibold border-b border-gray-100">
                <tr>
                    <th className="py-4 px-6 w-10">
                        <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="py-4 px-2">No ID</th>
                    <th className="py-4 px-2">Product</th>
                    <th className="py-4 px-2">SKU</th>
                    <th className="py-4 px-2">Location</th>
                    <th className="py-4 px-2">Price</th>
                    <th className="py-4 px-2">Stock</th>
                    <th className="py-4 px-6 text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                        <td className="py-4 px-6">
                            <input type="checkbox" className="rounded border-gray-300" />
                        </td>
                        <td className="py-4 px-2 text-gray-600">{item.noId}</td>
                        <td className="py-4 px-2">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 flex items-center justify-center">
                                     {/* Placeholder for watch image */}
                                     <span className="text-xl">⌚</span>
                                </div>
                                <span className="font-medium text-black">{item.name}</span>
                            </div>
                        </td>
                        <td className="py-4 px-2 text-gray-600">{item.sku}</td>
                        <td className="py-4 px-2 text-gray-600">{item.location}</td>
                        <td className="py-4 px-2 text-gray-600">{item.price}</td>
                        <td className="py-4 px-2 text-gray-600">{item.stock}</td>
                        <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end gap-3 text-gray-400">
                                <Edit2 size={16} className="cursor-pointer hover:text-black" />
                                <Copy size={16} className="cursor-pointer hover:text-black" />
                                <MoreHorizontal size={16} className="cursor-pointer hover:text-black" />
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
