"use client";

import { Search, ChevronDown, MoreHorizontal, UserCheck, UserX } from "lucide-react";

const users = [
    { name: "Jackson Murouse", role: "Sale Manager", email: "jackson@marline.com", status: "Active", lastLogin: "Today, 10:00 AM" },
    { name: "Mike Thomson", role: "Admin", email: "mike@marline.com", status: "Active", lastLogin: "Yesterday" },
    { name: "Lisa Moren", role: "Staff", email: "lisa@marline.com", status: "Inactive", lastLogin: "3 days ago" },
    // Add more mock data as needed
    ...Array(7).fill({ name: "John Doe", role: "User", email: "john@example.com", status: "Active", lastLogin: "1 week ago" })
];

export function ManageUserContent() {
  return (
    <div className="flex-1 p-8 bg-[#F5F6FA] min-h-screen overflow-y-auto ml-64 mr-80">
      <div className="flex items-center justify-between mb-8">
        <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search User..." 
              className="w-full bg-white rounded-lg py-2.5 pl-10 pr-4 text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
        </div>
        
        <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#2C2E33] text-white px-4 py-2.5 rounded-lg text-sm font-medium">
                Add User <span className="text-lg leading-none">+</span>
            </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
            <thead className="text-black font-semibold border-b border-gray-100">
                <tr>
                    <th className="py-4 px-6 w-10"><input type="checkbox" className="rounded border-gray-300" /></th>
                    <th className="py-4 px-2">Name</th>
                    <th className="py-4 px-2">Role</th>
                    <th className="py-4 px-2">Email</th>
                    <th className="py-4 px-2">Status</th>
                    <th className="py-4 px-2">Last Login</th>
                    <th className="py-4 px-6 text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                        <td className="py-4 px-6"><input type="checkbox" className="rounded border-gray-300" /></td>
                        <td className="py-4 px-2">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs">
                                    {item.name.charAt(0)}
                                </div>
                                <span className="font-medium text-black">{item.name}</span>
                            </div>
                        </td>
                        <td className="py-4 px-2 text-gray-600">{item.role}</td>
                        <td className="py-4 px-2 text-gray-600">{item.email}</td>
                        <td className="py-4 px-2">
                             <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {item.status}
                            </span>
                        </td>
                        <td className="py-4 px-2 text-gray-600">{item.lastLogin}</td>
                        <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end gap-3 text-gray-400">
                                <UserCheck size={16} className="cursor-pointer hover:text-green-600" />
                                <UserX size={16} className="cursor-pointer hover:text-red-600" />
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
