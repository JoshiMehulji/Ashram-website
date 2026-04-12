import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">

        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* QR Code Section */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Scan & Pay</h2>

            <img
              src="/assets/images/donation-qr.jpeg"
              alt="QR Code"
              className="w-64 h-64 object-contain border rounded-lg shadow"
            />

            <p className="mt-4 text-gray-500 text-sm text-center">
              Scan this QR code using any UPI app
            </p>
          </div>

          {/* Bank Details Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Bank Account Details
            </h2>

            <div className="space-y-3 text-gray-700 text-sm">
              <p>
                <span className="font-semibold">Account Name:</span> EAKTA DHYAN YOG AVEM SEVA TRUST 
              </p>
              <p>
                <span className="font-semibold">Bank Name:</span> State Bank of India
              </p>
              <p>
                <span className="font-semibold">Account Number:</span> 61008900634
              </p>
              <p>
                <span className="font-semibold">IFSC Code:</span> SBIN0031507
              </p>
              <p>
                <span className="font-semibold">Branch:</span> INTALI KHEDA
              </p>
              <p>
                <span className="font-semibold">UPI ID:</span> 9950502409@SBI
              </p>
            </div>

            {/* Note */}
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-gray-600">
              After making a donation, please keep a screenshot or transaction ID for reference.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          !! जय श्री कृष्ण !!
        </div>
      </div>
    </div>
  );
};

export default page;