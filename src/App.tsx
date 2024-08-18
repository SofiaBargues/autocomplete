import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="flex-col flex border-[#66c87b] w-96 rounded-lg p-9 border-2 gap-5 m-auto ">
      <div>
        <img src="/autocomplete.png" />
      </div>
      <input placeholder="Enter your UPI id "></input>
      <hr />
      <button className=" bg-[#66c87b] font-semibold text-white p-2 w-full">
        Play Now
      </button>
    </div>
  );
}

export default App;
