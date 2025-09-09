// Loader.jsx
import React from "react";

export default function Loader({ show = false, message = "Loading..." }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Pure CSS Spinner */}
        <div className="w-14 h-14 border-4 border-gray-300 border-t-white rounded-full animate-spin" />
        <p className="text-white text-lg font-medium">{message}</p>
      </div>
    </div>
  );
}
