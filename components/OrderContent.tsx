"use client";

import { Search, ChevronDown, Plus, List, Grid, Edit2, Copy, MoreHorizontal, Download, Printer } from "lucide-react";

const orders = Array(12).fill({
  orderNumber: "12563987563",
  date: "18/7/2023",
  product: "Dolan watch",
  customer: "Allan wood",
  totalAmount: "$ 1,349",
  status: "on process"
});

export function OrderContent() {
  return (
    <div className="flex-1 p-8 bg-[#F5F6FA] min-h-screen overflow-y-auto ml-64 mr-80">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search Order..." 
              className="w-full bg-white rounded-lg py-2.5 pl-10 pr-4 text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
        </div>
        
        <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#2C2E33] text-white px-4 py-2.5 rounded-lg text-sm font-medium">
                Filter : All Status <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 bg-[#2C2E33] text-white px-4 py-2.5 rounded-lg text-sm font-medium">
                New Order <Plus size={16} />
            </button>
        </div>
      </div>

      {/* Order Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
            <thead className="text-black font-semibold border-b border-gray-100">
                <tr>
                    <th className="py-4 px-6 w-10">
                        <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="py-4 px-2">Order Number</th>
                    <th className="py-4 px-2">Date</th>
                    <th className="py-4 px-2">Product</th>
                    <th className="py-4 px-2">Customer</th>
                    <th className="py-4 px-2">Total Amount</th>
                    <th className="py-4 px-2">Status</th>
                    <th className="py-4 px-6 text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                        <td className="py-4 px-6">
                            <input type="checkbox" className="rounded border-gray-300" />
                        </td>
                        <td className="py-4 px-2 font-medium">{item.orderNumber}</td>
                        <td className="py-4 px-2 text-gray-600">{item.date}</td>
                        <td className="py-4 px-2 font-medium">{item.product}</td>
                        <td className="py-4 px-2 text-gray-600">{item.customer}</td>
                        <td className="py-4 px-2 font-medium">{item.totalAmount}</td>
                        <td className="py-4 px-2">
                             <span className={
                                `px-3 py-1 rounded-full text-xs font-medium 
                                ${item.status === 'on process' ? 'bg-yellow-100 text-yellow-700' : ''}
                                ${item.status === 'Waiting payment' ? 'bg-gray-100 text-gray-600' : ''}
                                ${item.status === 'Delivered' ? 'bg-green-100 text-green-700' : ''}
                                ${item.status === 'Canceled' ? 'bg-red-100 text-red-700' : ''}
                                `
                            }>
                                {item.status}
                            </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end gap-3 text-gray-400">
                                <Download size={16} className="cursor-pointer hover:text-black" />
                                <Printer size={16} className="cursor-pointer hover:text-black" />
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
