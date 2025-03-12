import { BsGraphDown } from "react-icons/bs";
import "./App.css";
import ProductCard from "./components/productCard";
import { GoGraph } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { CiSpeaker } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

function App() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[400px] h-full bg-green-200">
          <button className="w-full h-[40px] text-black text-[25px] font-bold flex justify-center items-center">
            <BsGraphDown/>
            Dashboard
          </button>
          <button className="w-full h-[40px] text-black text-[25px] font-bold flex justify-center items-center">
          <CiBookmark />
            Booking
          </button>
          <button className="w-full h-[40px] text-black text-[25px] font-bold flex justify-center items-center">
          <CiSpeaker />
            Items
          </button>
          <button className="w-full h-[40px] text-black text-[25px] font-bold flex justify-center items-center">
          <CiUser />
            Users
          </button>

      </div>
      <div className="w-full bg-red-900">


      </div>
    </div>
  );
}

export default App;
