export function ManageUserSidebar() {
  return (
    <div className="w-80 bg-[#1F2125] text-white flex flex-col h-screen fixed right-0 top-0 z-40 p-6 border-l border-gray-800">
      <h2 className="text-xl font-medium mb-8">User Profile</h2>
      
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-600 mb-4 flex items-center justify-center text-3xl font-bold">
             J
        </div>
        
        <div className="w-full space-y-3 text-center">
            <h3 className="font-bold text-lg">Jackson Murouse</h3>
            <p className="text-gray-400">Sale Manager</p>
            <div className="flex justify-center gap-2 mt-4">
                <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold">Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold">Block</button>
            </div>
        </div>

        <div className="w-full mt-8 border-t border-gray-700 pt-6 text-sm">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-400 mb-1">Email</p>
                    <p>jackson@marline.com</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-1">Phone</p>
                    <p>+1 234 567 890</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-1">Joined</p>
                    <p>01 Jan 2022</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-1">Status</p>
                    <p className="text-green-500">Active</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
