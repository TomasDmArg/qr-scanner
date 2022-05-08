import "./dist/style.css";
import { useState } from "react";
import QrReader from "react-qr-reader";

const App = () => {
  const [code, setCode] = useState(null);
  const [showDialog, setDiaglog] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [precScan, setPrecScan] = useState("");
  const [selected, setSelected] = useState("environment");

  const handleScan = (scanData) => {
    // window.location.href = "";
    if (scanData && scanData) {
      window.location.href = scanData;
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="App">
      <h1>Escaneá el codigo QR</h1>
      <h2>Apuntá con la camara al codigo, se detectará automáticamente</h2>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value={"environment"}>Cámara trasera</option>
        <option value={"user"}>Cámara delantera</option>
      </select>
      {!showDialog && !processing && (
        <QrReader
          facingMode={selected}
          delay={500}
          onScan={handleScan}
          className="qr-reader"
        />
      )}
    </div>
  );
};

export default App;
