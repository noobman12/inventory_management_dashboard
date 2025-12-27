export function ProductPreviewSidebar() {
  return (
    <div className="w-80 bg-[#1F2125] text-white flex flex-col h-screen fixed right-0 top-0 z-40 p-6 border-l border-gray-800">
      <h2 className="text-xl font-medium mb-8">Preview Product</h2>
      
      <div className="flex flex-col items-center">
        <div className="bg-white p-4 w-full aspect-square flex items-center justify-center mb-6 rounded-lg">
            {/* Placeholder for large watch image */}
            <span className="text-6xl">⌚</span>
        </div>
        
        <div className="w-full space-y-3">
            <h3 className="font-bold text-lg">1741D - Dollan Watch</h3>
            <p className="font-medium">Stock : 1108 - Warehouse 1</p>
            <p className="font-medium">Price : $ 123</p>
            <p className="font-medium">Status : Ready Stock</p>
        </div>
      </div>
    </div>
  );
}
