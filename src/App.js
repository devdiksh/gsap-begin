import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./styles.css";

export default function App() {
  const root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // all your animations go in here...
      gsap.to(".box", { rotation: "+=360" });
    }, root); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="app">
      <div className="box">Hello</div>
    </div>
  );
}
