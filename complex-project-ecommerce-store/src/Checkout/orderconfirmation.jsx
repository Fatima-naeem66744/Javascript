export default function OrderConfirmation({ order }) {
  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center">

      <div className="bg-white shadow-md rounded-xl p-8">

        <div className="text-5xl mb-4">
          🎉
        </div>

        <h1 className="text-3xl font-bold mb-3">
          Order Confirmed!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase,
          {" "}
          {order.customer}!
        </p>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-500">
            Order Number
          </p>

          <p className="text-xl font-semibold">
            {order.id}
          </p>
        </div>

        <p className="text-gray-600 mb-6">
          Your order was successfully placed on{" "}
          {order.date}.
        </p>

        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}