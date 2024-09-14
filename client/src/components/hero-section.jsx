import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <h1 style={{'--h1-clr': '#d8f6ff'}}>
        <p style={{"--p-clr": "#00aee5"}}>Build Networks</p>
      </h1>
      <h1 style={{"--h1-clr": "#e8e2f7"}}>
        <p style={{"--p-clr": "#8131de"}}>Share Knowledge</p>
      </h1>
      <h1 style={{"--h1-clr": "#d5f8ef"}}>
        <p style={{"--p-clr": "#16b88a"}}>Grow Together !</p>
      </h1>
    </section>
  );
}
