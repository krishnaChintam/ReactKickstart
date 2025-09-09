// ToastProvider.jsx
import React from "react";
import { Toaster } from "react-hot-toast";

export default function ToastProvider({ headerHeight = 64 }) {
  return (
    <Toaster
      position="top-right"
      containerStyle={{
        top: `${headerHeight + 8}px`, // prevents overlap with header
      }}
      toastOptions={{
        duration: 4000, // default duration
        style: {
          borderRadius: "8px",
          background: "#fff",
          color: "#333",
        },
        success: {
          style: {
            background: "#4caf50",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "#f44336",
            color: "#fff",
          },
        },
      }}
    />
  );
}
