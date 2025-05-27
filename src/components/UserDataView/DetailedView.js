import React from "react";

const DetailedView = ({ user }) => {
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <img
            src={user.image}
            alt={user.firstName}
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl font-bold mt-4">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-lg italic text-gray-300">{user.role}</p>
        </div>

        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-6 text-white/90">
          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b border-white/20 pb-1">Personal Info</h2>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Eye Color:</strong> {user.eyeColor}</p>
            <p><strong>Hair:</strong> {user.hair.color}, {user.hair.type}</p>
            <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
            <p><strong>Height:</strong> {user.height} cm</p>
            <p><strong>Weight:</strong> {user.weight} kg</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b border-white/20 pb-1">Contact Info</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>IP Address:</strong> {user.ip}</p>
            <p><strong>MAC Address:</strong> {user.macAddress}</p>
            <p><strong>Birth Date:</strong> {user.birthDate}</p>
          </div>
        </div>

        {/* Address */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2 border-b border-white/20 pb-1">Address</h2>
          <p>{user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}</p>
          <p>{user.address.country}</p>
        </div>

        {/* Company */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2 border-b border-white/20 pb-1">Company</h2>
          <p><strong>Company Name:</strong> {user.company.name}</p>
          <p><strong>Department:</strong> {user.company.department}</p>
          <p><strong>Title:</strong> {user.company.title}</p>
          <p><strong>Company Address:</strong> {user.company.address.address}, {user.company.address.city}</p>
        </div>

        {/* Banking & Crypto */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b border-white/20 pb-1">Bank Info</h2>
            <p><strong>Card Number:</strong> {user.bank.cardNumber}</p>
            <p><strong>Card Type:</strong> {user.bank.cardType}</p>
            <p><strong>Expires:</strong> {user.bank.cardExpire}</p>
            <p><strong>Currency:</strong> {user.bank.currency}</p>
            <p><strong>IBAN:</strong> {user.bank.iban}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b border-white/20 pb-1">Crypto Info</h2>
            <p><strong>Coin:</strong> {user.crypto.coin}</p>
            <p><strong>Wallet:</strong> {user.crypto.wallet}</p>
            <p><strong>Network:</strong> {user.crypto.network}</p>
          </div>
        </div>

        {/* Footer IDs */}
        <div className="mt-8 text-sm text-white/70">
          <p><strong>SSN:</strong> {user.ssn}</p>
          <p><strong>EIN:</strong> {user.ein}</p>
          <p><strong>User Agent:</strong> {user.userAgent}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailedView;
