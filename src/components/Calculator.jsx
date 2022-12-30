import React, { useState } from "react";

function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    )
      return;
    setCalc(calc + value);

    if (!ops.includes(value)) setResult(eval(calc + value).toString());
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          className="flex-[1_1_33.333%] w-7 h-12 bg-transparent border border-slate-500 rounded-md hover:bg-slate-900 text-white text-2xl cursor-pointer duration-300"
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-full">
      <div className="w-full min-w-full overflow-hidden shadow-lg">
        <div className="p-4 text-right bg-black rounded-md mb-2 text-2xl shadow-xl">
          {result ? (
            <span className="text-sm text-green-300">({result})</span>
          ) : (
            ""
          )}
          &nbsp;
          {calc || "0"}
        </div>
        <div className="flex flex-row ">
          <button
            onClick={() => updateCalc("/")}
            className="flex-1 w-7 h-10 bg-transparent border border-slate-500 rounded-md hover:bg-slate-900 text-white text-2xl"
          >
            /
          </button>
          <button
            onClick={() => updateCalc("*")}
            className="flex-1 w-7 h-10 bg-transparent border border-slate-500 rounded-md hover:bg-slate-900 text-white text-2xl"
          >
            *
          </button>
          <button
            onClick={() => updateCalc("+")}
            className="flex-1 w-7 h-10 bg-transparent border border-slate-500 rounded-md hover:bg-slate-900 text-white text-2xl"
          >
            +
          </button>
          <button
            onClick={() => updateCalc("-")}
            className="flex-1 w-7 h-10 bg-transparent border border-slate-500 rounded-md hover:bg-slate-900 text-white text-2xl"
          >
            -
          </button>

          <button
            onClick={deleteLast}
            className="flex-1 w-14 bg-transparent border border-slate-500 rounded-md hover:bg-slate-900 text-red-500 text-2xl"
          >
            DEL
          </button>
        </div>
        <div className="flex flex-wrap ">
          {createDigits()}
          <button
            onClick={() => updateCalc("0")}
            className="flex-1 w-7 h-12 bg-transparent border border-slate-500 rounded-md hover:bg-slate-900 text-white text-2xl"
          >
            0
          </button>
          <button
            onClick={() => updateCalc(".")}
            className="flex-1 w-7 h-12 bg-transparent border border-slate-500 rounded-md hover:bg-slate-900 text-white text-2xl"
          >
            .
          </button>

          <button
            onClick={calculate}
            className="flex-1 w-7 h-12 bg-transparent border border-slate-500 rounded-md hover:bg-slate-900 text-green-500 text-2xl"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
