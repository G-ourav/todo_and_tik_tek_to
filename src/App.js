import "./App.css";
import React, { useState } from "react";

function App() {
  const [clm, setClm] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  const [intext, setText] = useState(" ");
  const [flag, setFlag] = useState(true);
  const [notification_bar, setNotification_bar] = useState([]);

  const winner = () => {
    clm;
  };

  const onclm = (i) => {
    if (clm[i] === " " && flag) {
      console.log(i);
      setClm([...clm.slice(0, i), 0, ...clm.slice(i + 1)]);
    } else if (clm[i] === " " && !flag) {
      console.log(i);
      setClm([...clm.slice(0, i), 1, ...clm.slice(i + 1)]);
    } else if (clm[i] === ("0" || "x")) {
    }
    console.log(clm, i);
  };

  return (
    <div className="App ">
      <div>
        {notification_bar.map((e, i) => {
          return <div className=" uppercase">{e}</div>;
        })}
      </div>
      <div className="flex justify-center  h-screen ">
        <div className="my-auto grid  grid-cols-3 grid-rows-3">
          {clm?.map((e, i) => {
            return (
              <div
                onClick={() => {
                  onclm(i);
                  setFlag(!flag);
                }}
                className="p-10 bg-slate-400 border-x-4 border-y-4 "
              >
                {clm[i] === 0 ? "0" : clm[i] === 1 ? "x" : intext}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
