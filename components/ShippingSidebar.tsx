export function ShippingSidebar() {
  return (
    <div className="w-80 bg-[#1F2125] text-white flex flex-col h-screen fixed right-0 top-0 z-40 p-6 border-l border-gray-800">
      <h2 className="text-xl font-medium mb-8">Shipment Tracking</h2>
      
      <div className="flex flex-col items-center">
        <div className="bg-white p-4 w-full aspect-square flex items-center justify-center mb-6 rounded-lg">
             <span className="text-6xl">🚚</span>
        </div>
        
        <div className="w-full space-y-3">
            <h3 className="font-bold text-lg">SHP-12345678</h3>
            <p className="font-medium">Carrier: FedEx</p>
            <p className="font-medium">Est. Delivery: 22/7/2023</p>
            <p className="font-medium text-purple-400">Status: In Transit</p>
        </div>

        <div className="w-full mt-8 border-t border-gray-700 pt-6">
            <h4 className="font-bold mb-4">Tracking History</h4>
            <div className="space-y-4 text-xs text-gray-300 relative pl-4 border-l border-gray-600">
                <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                    <p className="font-bold text-white">Arrived at Sort Facility</p>
                    <p>New York, USA - 19/7/2023 08:00 AM</p>
                </div>
                <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                    <p className="font-bold text-white">Picked Up</p>
                    <p>Los Angeles, USA - 18/7/2023 14:00 PM</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
