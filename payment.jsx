import React from 'react';

export default function Payment() {
  const handlePayment = () => {
    const options = {
      key: 'YOUR_KEY_ID',
      amount: 50000,
      currency: 'INR',
      name: 'Breeze Travel',
      description: 'Hotel Booking',
      handler: function (response) {
        alert('Payment Successful! ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'User',
        email: 'user@example.com',
        contact: '9999999999'
      },
      theme: { color: '#3399cc' }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Complete Your Payment</h2>
      <p className="mb-4">Pay ₹500.00 to confirm your hotel booking.</p>
      <button
        onClick={handlePayment}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Pay Now
      </button>
    </div>
  );
}