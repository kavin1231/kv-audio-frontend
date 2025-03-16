import { useState } from "react";

export default function Testing() {
  const [count, setCount] = useState(0);
  //coconut , banana , apple , other
  const [itemName, setItemName] = useState("Coconut");
  return (
    <div className="w-full h-screen bg-amber-500 flex flex-col justify-center items-center">
      <h1 className="text-9xl">
        {count} {itemName}s
      </h1>
      <button
        className="w-[100px] h-[30px] bg-black text-3xl text-white rounder-lg
      "
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
        }}
      >
        Count
      </button>
      <div className="w-full flex p-4 justify-evenly items-center">
        <button
          className="w-[200px] h-[60px] bg-black text-3xl text-white rounder-lg"
          onClick={() => {
            setItemName("Coconut");
          }}
        >
          Coconut
        </button>
        <button
          className="w-[200px] h-[60px] bg-black text-3xl text-white rounder-lg"
          onClick={() => {
            setItemName("Banana")
          }}
        >
          Banana
        </button>
        <button
          className="w-[200px] h-[60px] bg-black text-3xl text-white rounder-lg"
          onClick={() => {
            setItemName("apple")
          }}
        >
          Apple
        </button>
        <button
          className="w-[200px] h-[60px] bg-black text-3xl text-white rounder-lg"
          onClick={() => {
            setItemName("Other")
          }}
        >
          Other
        </button>
      </div>
    </div>
  );
}
