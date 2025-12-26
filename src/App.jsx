import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Display } from "./component/Display";
import { Keypad } from "./component/Keypad";
// import './App.css'

function App() {
  const [value, setValue] = useState("");
  const handleClick = (val) => {
    setValue((prev) => {
      const lastChar = prev.slice(-1);
      const operators= "+-*/";
      //prevent starting with operator (except -)
      
      if (prev === "" && operators.includes(val) && val !== "-") {
      return prev;
    }

      //Prevent two operators in one row
      if(operators.includes(lastChar) && operators.includes(val)){
        return prev;
      }
      //Prevent multiple decimal in one number
      if( val === "."){
        const lastNumber = prev.split(/[+\-*/]/).pop();
        if(lastNumber.includes(".")) return prev;
        if(lastChar === "" || operators.includes(lastChar)) return prev;
      }
      return prev +val;
    });
  };
  const calculate = () => {
    if(!value) return;
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
       <Display value={value} />
        <Keypad onCalculate={calculate} onInput={handleClick} onClear={clear} />
        <p className="text-sm text-gray-400 text-center mt-4">Keyboard Supported</p>
      </div>
    </div>
  );
}

export default App;
