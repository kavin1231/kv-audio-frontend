import "./App.css";
import ProductCard from "./components/productCard";

function App() {
  return (
    <>
      <ProductCard
        name="Audio Setup"
        price="3250/-"
        description="JBL GO3 JBLGO3ORG Bluetooth Speaker, USB C Charging, IP67 Dustproof, Waterproof, Passive Radiator, Portable, 2020 Model, Orange"
        img="https://tse3.mm.bing.net/th?id=OIP.wYIIM0GA8WqsZX3NKhvz1wHaHa&pid=Api&P=0&h=220"
      />
      <ProductCard
        name="Mini PC"
        price="100.00/-"
        description="SkyBarium Mini PC Newest 12th Generation Intel N100, Mini PC Built-in 8GB LPDDR5 RAM+256GB M.2 SSD Windows 11, 4C/4T Up to 3.4GHz 4K@60Hz Dual Screen, Dual WiFi 5 BT4.2 Support TF Card Office & Office"
        img="https://m.media-amazon.com/images/I/71jyGIp8umL._AC_SL1500_.jpg"
      />
    </>
  );
}

export default App;
