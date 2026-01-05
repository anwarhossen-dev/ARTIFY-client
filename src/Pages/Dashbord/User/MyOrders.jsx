const MyOrders = () => {
  const orders = [
    { id: 1, title: "Abstract Art", price: 120, status: "Delivered" },
    { id: 2, title: "Modern Frame", price: 80, status: "Pending" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>

      <table className="w-full">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="p-3 text-left">Item</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id} className="border-b">
              <td className="p-3">{o.title}</td>
              <td className="p-3">${o.price}</td>
              <td className="p-3">
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  {o.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
