import React from "react";
import "./style.css";
import Chat from "./Chat";

export default function App() {
  return (
    <div className="mainSection" style={{ backgroundColor: "pink" }}>
      <div
        className="heading"
        style={{
          fontSize: "40px",
          color: "green",
          fontWeight: 800,
        }}
      >
        Chatbot App
      </div>
      <Chat />
    </div>
  );
}
