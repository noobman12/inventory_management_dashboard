"use client";

import { ArrowUp, ArrowDown, Download, Printer, MoreHorizontal } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const summaryData = [
  { 
    title: "Total Sales", 
    value: "$30,412", 
    trend: "+1.5%", 
    trendType: "up",
    data: [
        { name: 'A', value: 400 },
        { name: 'B', value: 300 },
        { name: 'C', value: 500 },
        { name: 'D', value: 200 },
        { name: 'E', value: 400 },
        { name: 'F', value: 600 },
    ],
    color: "#22c55e"
  },
  { 
    title: "Total Order", 
    value: "12,980", 
    trend: "-0.7%", 
    trendType: "down",
    data: [
        { name: 'A', value: 200 },
        { name: 'B', value: 400 },
        { name: 'C', value: 300 },
        { name: 'D', value: 600 },
        { name: 'E', value: 300 },
        { name: 'F', value: 400 },
    ],
    color: "#ef4444"
  },
  { 
    title: "Total Customer", 
    value: "2,753", 
    trend: "+114 new customer", 
    trendType: "up",
    isDonut: true
  },
];

const overallSalesData = [
  { name: 'Jan', lastYear: 18000, runningYear: 20000 },
  { name: 'Feb', lastYear: 16000, runningYear: 18000 },
  { name: 'Mar', lastYear: 15000, runningYear: 19000 },
  { name: 'Apr', lastYear: 20000, runningYear: 22000 },
  { name: 'Mei', lastYear: 25000, runningYear: 24843 },
  { name: 'Jun', lastYear: 22000, runningYear: 26000 },
  { name: 'Jul', lastYear: 20000, runningYear: 25000 },
  { name: 'Ags', lastYear: 24000, runningYear: 28000 },
  { name: 'Sep', lastYear: 21000, runningYear: 26000 },
  { name: 'Okt', lastYear: 23000, runningYear: 29000 },
  { name: 'Nov', lastYear: 22000, runningYear: 27000 },
  { name: 'Des', lastYear: 24000, runningYear: 28000 },
];

const orderReportData = [
  { name: 'E-commerce', value: 67, color: '#333333' },
  { name: 'Marline website', value: 23, color: '#999999' },
  { name: 'Offline store', value: 23, color: '#666666' },
];

const recentOrders = [
  { id: "12563987563", date: "18/7/2023", product: "Dolan watch", customer: "Allan wood", amount: "$ 1,349", status: "on process" },
  { id: "125479665387", date: "18/7/2023", product: "Hollan Bag", customer: "Damian simsons", amount: "$ 649", status: "Waiting payment" },
  { id: "154986315687", date: "18/7/2023", product: "Eagle Bag", customer: "Hanah cole", amount: "$ 745", status: "Delivered" },
  { id: "123698745632", date: "18/7/2023", product: "Moze Cap", customer: "Scott", amount: "$ 523", status: "Canceled" },
];

export function DashboardContent() {
  return (
    <div className="flex-1 p-8 bg-[#F5F6FA] min-h-screen overflow-y-auto ml-64 mr-80">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-1">Welcome, Jack</h2>
        <p className="text-gray-500 text-sm">1 April 2023</p>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {summaryData.map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-gray-600 mb-1">{item.title}</h3>
            <div className="mb-2">
                <span className={`text-2xl font-bold ${item.trendType === 'up' ? 'text-green-600' : 'text-red-500'}`}>
                    {item.value}
                </span>
            </div>
            <div className="flex items-center gap-1 mb-4">
                {item.trendType === 'up' ? <ArrowUp size={12} className="text-green-500" /> : <ArrowDown size={12} className="text-red-500" />}
                <span className={`text-xs ${item.trendType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {item.trend} vs last Month
                </span>
            </div>
            
            <div className="h-16">
              {item.isDonut ? (
                 <div className="flex items-center justify-between h-full">
                     <div className="w-16 h-16 rounded-full border-4 border-gray-200 border-t-gray-800 border-r-gray-800 rotate-45"></div>
                     <div className="text-xs space-y-1">
                         <div className="flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"></div> new customer</div>
                         <div className="flex items-center gap-2"><div className="w-2 h-2 bg-gray-400 rounded-full"></div> loyal customer</div>
                     </div>
                 </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={item.data}>
                    <defs>
                        <linearGradient id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={item.color} stopOpacity={0.3}/>
                        <stop offset="95%" stopColor={item.color} stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke={item.color} fillOpacity={1} fill={`url(#color${index})`} strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Middle Charts */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-lg font-bold">Overall Sales <span className="text-green-500 text-sm font-normal">↑ 1,1 % vs last Year</span></h3>
                </div>
                <div className="flex items-center gap-4">
                     <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div> Last Year
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div> Running Year
                     </div>
                     <div className="flex bg-gray-100 rounded-lg p-1">
                        {['1W', '1M', '6M', '1Y'].map(t => (
                            <button key={t} className={`px-2 py-0.5 text-xs rounded ${t === '1Y' ? 'bg-black text-white' : 'text-gray-500'}`}>{t}</button>
                        ))}
                     </div>
                </div>
            </div>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={overallSalesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} tickFormatter={(value) => `${value/1000}K $`} />
                        <Tooltip />
                        <Area type="monotone" dataKey="lastYear" stroke="#22c55e" fill="none" strokeWidth={2} />
                        <Area type="monotone" dataKey="runningYear" stroke="#3b82f6" fill="none" strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
             <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold">Order Report</h3>
                <div className="flex bg-gray-100 rounded-lg p-1">
                    {['1W', '1M', '6M', '1Y'].map(t => (
                        <button key={t} className={`px-2 py-0.5 text-xs rounded ${t === '1Y' ? 'bg-black text-white' : 'text-gray-500'}`}>{t}</button>
                    ))}
                </div>
             </div>
             <div className="mb-4">
                <h2 className="text-3xl font-bold text-red-500">190,567</h2>
                <p className="text-xs text-red-500">↓ 0,2 % vs last Year</p>
             </div>
             <div className="h-48 relative">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={orderReportData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {orderReportData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                 </ResponsiveContainer>
                 {/* Legend */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 text-xs space-y-2">
                    {orderReportData.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}></div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                 </div>
             </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold mb-4">Recent Order</h3>
        <table className="w-full text-sm text-left">
            <thead className="text-gray-500 border-b">
                <tr>
                    <th className="py-3 font-medium">Order Number</th>
                    <th className="py-3 font-medium">Date</th>
                    <th className="py-3 font-medium">Product</th>
                    <th className="py-3 font-medium">Customer</th>
                    <th className="py-3 font-medium">Total Amount</th>
                    <th className="py-3 font-medium">Status</th>
                    <th className="py-3 font-medium">Action</th>
                </tr>
            </thead>
            <tbody>
                {recentOrders.map((order, idx) => (
                    <tr key={idx} className={`border-b last:border-0 hover:bg-gray-50 ${idx === 0 ? 'bg-gray-50' : ''}`}>
                        <td className="py-4 font-medium flex items-center gap-2">
                            {idx === 0 && <div className="w-1.5 h-1.5 bg-black rounded-full"></div>}
                            {order.id}
                        </td>
                        <td className="py-4 text-gray-600">{order.date}</td>
                        <td className="py-4">
                            <div className="font-bold">{order.product}</div>
                            <div className="text-xs text-gray-400 cursor-pointer">See more {'>'}</div>
                        </td>
                        <td className="py-4 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200"></div> {/* Avatar */}
                            <span>{order.customer}</span>
                        </td>
                        <td className="py-4 font-medium">{order.amount}</td>
                        <td className="py-4">
                            <span className={
                                `px-3 py-1 rounded-full text-xs font-medium 
                                ${order.status === 'on process' ? 'bg-yellow-100 text-yellow-700' : ''}
                                ${order.status === 'Waiting payment' ? 'bg-gray-100 text-gray-600' : ''}
                                ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : ''}
                                ${order.status === 'Canceled' ? 'bg-red-100 text-red-700' : ''}
                                `
                            }>
                                {order.status}
                            </span>
                        </td>
                        <td className="py-4">
                            <div className="flex items-center gap-2 text-gray-400">
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
