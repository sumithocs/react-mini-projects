import { useState } from "react";
import QRCode from "react-qr-code";

export const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const handleGenerateQrCode = () => {
    setQrCode(input);
    // setInput("");
  };

  return (
    <div>
      <h2>QR Code Generator</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode
          id="qr-code-value"
          value={qrCode}
          size={250}
          bgColor="white"
        ></QRCode>
      </div>
    </div>
  );
};
