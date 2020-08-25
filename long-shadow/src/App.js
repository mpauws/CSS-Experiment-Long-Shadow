import React, { useEffect } from "react"; // import the useEffect hook

const App = () => {
  //useEffect accepts 2 params. The first is a callback function. The second WHEN the code should run.
  useEffect(() => {
    const text = document.getElementById("text");
    let shadow = "";

    for (let i = 0; i < 500; i++) {
      shadow += (shadow ? "," : "") + i * 1 + "px " + i * 1 + "px 0 #b85d1c";
    }
    text.style.textShadow = shadow;
  }, []); // [] is the second argument.

  // [] = Run at initial render
  // [ data ] = Run at initial render AND after re-render and "data" (example name) has changed
  // empty = Run at initial render AND at every re-render

  return <div id="text">Portfolio</div>;
};

export default App;
