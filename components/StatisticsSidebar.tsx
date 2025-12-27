export function StatisticsSidebar() {
  return (
    <div className="w-80 bg-[#1F2125] text-white flex flex-col h-screen fixed right-0 top-0 z-40 p-6 border-l border-gray-800">
      <h2 className="text-xl font-medium mb-8">Report Details</h2>
      
      <div className="flex flex-col items-center">
        <div className="bg-white p-4 w-full aspect-square flex items-center justify-center mb-6 rounded-lg">
             <span className="text-6xl">📊</span>
        </div>
        
        <div className="w-full space-y-3">
            <h3 className="font-bold text-lg">Monthly Sales Report</h3>
            <p className="font-medium">Period: July 2023</p>
            <p className="font-medium">Type: PDF Document</p>
            <p className="font-medium">Size: 2.4 MB</p>
        </div>
        
        <button className="w-full mt-8 bg-white text-black py-3 rounded-lg font-bold">
            Download Report
        </button>
      </div>
    </div>
  );
}
