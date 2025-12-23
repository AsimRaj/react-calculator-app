import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [value, setValue] = useState("");
  const handleClick = (val) => {
    setValue(value + val);
  };
  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch  {
      setValue("Error");
    }
  };
  const clear = () => {
    setValue("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-xl w-80">
        <input
          type="text"
          readOnly
          value={value || "0"}
          className="w-full p-3 outline-none mb-4 text-right text-xl rounded bg-gray-700 text-white
      "
        />
        <div className="grid grid-cols-4 gap-3 ">
          {["7", "8", "9", "/"].map((btn) => (
            <button
              key={btn}
              onClick={()=>handleClick(btn)}
              className=" bg-gray-600 text-white p-3 rounded text-lg hover:bg-gray-500"
            >
              {btn}
            </button>
          ))}
          {["4", "5", "6", "*"].map((btn) => (
            <button
              key={btn}
              onClick={()=>handleClick(btn)}
              className=" bg-gray-600 text-white p-3 rounded text-lg hover:bg-gray-500"
            >
              {btn}
            </button>
          ))}
          {["1", "2", "3", "-"].map((btn) => (
            <button
              key={btn}
              onClick={()=>handleClick(btn)}
              className=" bg-gray-600 text-white p-3 rounded text-lg hover:bg-gray-500"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={clear}
            className=" text-white p-3 rounded text-lg hover:bg-red-600 col-span-2 bg-red-500"
          >
            C
          </button>
          <button
            onClick={()=>handleClick("0")}
            className=" bg-gray-600 text-white p-3 rounded text-lg hover:bg-gray-500"
          >
            0
          </button>
          <button
            onClick={calculate}
            className=" bg-green-500  text-white p-3 rounded text-lg hover:bg-green-700"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
