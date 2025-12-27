export function SettingSidebar() {
  return (
    <div className="w-80 bg-[#1F2125] text-white flex flex-col h-screen fixed right-0 top-0 z-40 p-6 border-l border-gray-800">
      <h2 className="text-xl font-medium mb-8">Quick Settings</h2>
      
      <div className="space-y-6">
        <div>
            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase">Appearance</h3>
            <div className="flex items-center justify-between">
                <span>Dark Mode</span>
                <div className="w-10 h-5 bg-gray-600 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </div>
            </div>
        </div>

        <div>
            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase">Notifications</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span>Email Alerts</span>
                    <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span>SMS Alerts</span>
                    <div className="w-10 h-5 bg-gray-600 rounded-full relative cursor-pointer">
                        <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>

         <div>
            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase">System</h3>
            <div className="flex items-center justify-between">
                <span>Auto Update</span>
                <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer">
                     <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
