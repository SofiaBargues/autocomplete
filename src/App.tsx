import { useState } from "react";
import "./App.css";

const words = [
  "okaxis",
  "BARODAMPAY",
  "rbl",
  "upi",
  "allbank",
  "abcde",
  "avellana",
];

function App() {
  const [word, setWord] = useState("");
  const [dropDown, setDropDown] = useState(false);
  function onChange(e) {
    setWord(e.target.value);
    setDropDown(true);
  }

  const filteredWords = words.filter((string) => string.startsWith(word));

  return (
    <form className="flex-col flex relative border-[#66c87b] w-96 rounded-lg p-9 border-2 m-auto gap-5">
      <div>
        <img src="/autocomplete.png" />
      </div>
      <div className="relative text-left">
        <input
          value={word}
          onChange={onChange}
          onKeyDownCapture={(e) => {
            if (e.key == "Tab" && filteredWords[0]) {
              e.preventDefault();
              setWord(filteredWords[0]);
            }
          }}
          className="inline-block absolute bg-transparent outline-none"
          placeholder="Enter your UPI id"
        ></input>
        <input
          value={word && filteredWords[0] ? filteredWords[0] : ""}
          // onChange={onChange}
          className="inline-block text-gray-400"
        ></input>
      </div>
      <div className="relative">
        <hr />
        <div
          className={
            "absolute" +
            " " +
            (word && filteredWords && dropDown ? "block" : "hidden")
          }
        >
          {filteredWords.map((cosa) => (
            <div className={"border p-2 bg-white w-[308px] "}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setWord(cosa);
                  setDropDown(false);
                }}
              >
                {cosa}
              </button>
            </div>
          ))}
        </div>

        <button className="mt-6 bg-[#66c87b] font-semibold z-10 text-white p-3 w-full rounded-xl">
          Pay Now
        </button>
      </div>
    </form>
  );
}

export default App;
