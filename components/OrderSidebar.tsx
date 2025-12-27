export function OrderSidebar() {
  return (
    <div className="w-80 bg-[#1F2125] text-white flex flex-col h-screen fixed right-0 top-0 z-40 p-6 border-l border-gray-800">
      <h2 className="text-xl font-medium mb-8">Order Details</h2>
      
      <div className="flex flex-col items-center">
        <div className="bg-white p-4 w-full aspect-square flex items-center justify-center mb-6 rounded-lg">
             <span className="text-6xl">📦</span>
        </div>
        
        <div className="w-full space-y-3">
            <h3 className="font-bold text-lg">Order #12563987563</h3>
            <p className="font-medium">Date: 18/7/2023</p>
            <p className="font-medium">Customer: Allan Wood</p>
            <p className="font-medium">Total: $ 1,349</p>
            <p className="font-medium text-yellow-500">Status: On Process</p>
        </div>
        
        <div className="w-full mt-8 border-t border-gray-700 pt-6">
            <h4 className="font-bold mb-4">Items</h4>
            <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                    <span>1x Dolan Watch</span>
                    <span>$ 1,349</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
