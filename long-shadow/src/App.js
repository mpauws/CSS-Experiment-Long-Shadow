import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const text = document.getElementById("text");
    let shadow = "";

    for (let i = 0; i < 500; i++) {
      shadow += (shadow ? "," : "") + i * 1 + "px " + i * 1 + "px 0 #b85d1c";
    }
    text.style.textShadow = shadow;
  }, []);

  return <div id="text">Portfolio</div>;
};

export default App;
