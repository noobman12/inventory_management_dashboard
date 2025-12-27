export function PaymentSidebar() {
  return (
    <div className="w-80 bg-[#1F2125] text-white flex flex-col h-screen fixed right-0 top-0 z-40 p-6 border-l border-gray-800">
      <h2 className="text-xl font-medium mb-8">Payment Details</h2>
      
      <div className="flex flex-col items-center">
        <div className="bg-white p-4 w-full aspect-square flex items-center justify-center mb-6 rounded-lg">
             <span className="text-6xl">💳</span>
        </div>
        
        <div className="w-full space-y-3">
            <h3 className="font-bold text-lg">TRX-987456321</h3>
            <p className="font-medium">Date: 18/7/2023</p>
            <p className="font-medium">Method: Credit Card</p>
            <p className="font-medium">Amount: $ 1,349</p>
            <p className="font-medium text-green-500">Status: Paid</p>
        </div>
      </div>
    </div>
  );
}
