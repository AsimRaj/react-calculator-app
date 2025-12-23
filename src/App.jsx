import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [value, setValue] = useState("");
  const handleClick = (val) => {
    setValue((prev) => prev + val);
  };
  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };
  const clear = () => {
    setValue("");
  };
  const backspace = () => {
    setValue((prev) => prev.slice(0, -1));
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      const allowedKey = "0123456789-+*/.";
      if (allowedKey.includes(e.key)) {
        setValue((prev) => prev + e.key);
      }
      if (e.key === "Enter") {
        calculate();
      }
      if (e.key === "Backspace") {
        backspace();
      }
      if (e.key === "Escape") {
        clear();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [value]);

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
              onClick={() => handleClick(btn)}
              className="btn"
            >
              {btn}
            </button>
          ))}
          {["4", "5", "6", "*"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="btn"
            >
              {btn}
            </button>
          ))}
          {["1", "2", "3", "-"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="btn"
            >
              {btn}
            </button>
          ))}
          
          <button
            onClick={() => handleClick("0")}
            className="btn"
          >
            0
          </button>
          <button
            onClick={() => handleClick(".")}
            className="btn"
          >
            .
          </button>
          <button
            onClick={() => handleClick("+")}
            className="btn"
          >
            +
          </button>
          <button
            onClick={calculate}
            className=" row-span-2  text-white p-3 rounded text-lg bg-green-500 hover:bg-green-700"
          >
            =
          </button>
          <button
            onClick={clear}
            className=" text-white p-3 rounded text-lg col-span-2 hover:bg-red-600  bg-red-500 "
          >
            C
          </button>
          
          <button
            onClick={() => handleClick("%")}
            className="btn"
          >
            %
          </button>
          
        </div>
        <p className="text-gray-400 text-sm mt-4 text-center">Keyboard: 0-9 - + * / . | Enter = | Backspace | Esc </p>
      </div>
    </div>
  );
}

export default App;
