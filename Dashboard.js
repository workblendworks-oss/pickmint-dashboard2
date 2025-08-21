import React, { useState } from 'react';

function Dashboard() {
  const [razorpayKey, setRazorpayKey] = useState("");
  const [supabaseKey, setSupabaseKey] = useState("");

  const saveSettings = () => {
    localStorage.setItem("razorpayKey", razorpayKey);
    localStorage.setItem("supabaseKey", supabaseKey);
    alert("Settings saved!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pickmint Dashboard</h1>
      <div className="mb-4">
        <label className="block">Razorpay Key</label>
        <input type="text" value={razorpayKey} onChange={(e) => setRazorpayKey(e.target.value)} className="border p-2 w-full" />
      </div>
      <div className="mb-4">
        <label className="block">Supabase Key</label>
        <input type="text" value={supabaseKey} onChange={(e) => setSupabaseKey(e.target.value)} className="border p-2 w-full" />
      </div>
      <button onClick={saveSettings} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
}

export default Dashboard;