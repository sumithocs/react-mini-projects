import { useEffect, useState } from "react";

export const RandomColor = () => {
  const [color, setColor] = useState("#000000");

  const [typeOfColor, setTypeOfColor] = useState("hex");

  const [fontColor, setFontColor] = useState("#fff");

  const generateRandomNumber = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandomNumber(hex.length)];
    }

    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = generateRandomNumber(256);
    const g = generateRandomNumber(256);
    const b = generateRandomNumber(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    // if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    // else handleCreateRandomHexColor();
    setColor("");
  }, [typeOfColor]);

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button onClick={() => setTypeOfColor("rgb")}>RGB color</button>
      <button onClick={() => setTypeOfColor("hex")}>Hex color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: `${fontColor}`,
          fontSize: "50px",
          marginTop: "40px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
};
