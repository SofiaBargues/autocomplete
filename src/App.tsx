import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const words = ["okaxis", "BARODAMPAY", "rbl", "upi", "allbank"];

function App() {
  const [word, setWord] = useState("");
  function onChange(e) {
    setWord(e.target.value);
  }

  const filteredWords = words.filter((string) => string.startsWith(word));

  return (
    <form className="flex-col flex border-[#66c87b] w-96 rounded-lg p-9 border-2 m-auto ">
      <div>
        <img src="/autocomplete.png" />
      </div>
      <input
        onChange={onChange}
        className="inline-block"
        placeholder="Enter your UPI id "
      ></input>
      <hr />

      <div className={word && filteredWords ? "" : "hidden"}>
        {filteredWords.map((cosa) => (
          <div className="border p-2">
            <h3>{cosa}</h3>
          </div>
        ))}
      </div>

      <button className=" bg-[#66c87b] font-semibold text-white p-2 w-full">
        Pay Now
      </button>
    </form>
  );
}

export default App;
