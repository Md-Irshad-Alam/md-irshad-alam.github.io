import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["A Full Stack Web Developer", "A Mern Stack Developer", "From  Jharkhand , Godda ", "Creative...", "Enthusiastic...|", "  Strong problem-solving skills"],
          autoStart: true,
          loop: true,
          deleteSpeed: 70
        }}
      />
    </>
  );
};
