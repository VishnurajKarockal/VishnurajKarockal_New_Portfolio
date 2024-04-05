import React from 'react';
import Typist from 'react-typist';


const TypingAnimation = () => {
  return (
    <div style={{fontSize:"1.5rem"}}>
      <Typist cursor={{ show: false }}>
        <span>Full Stack Web Developer!</span>
        <Typist.Backspace count={30} delay={1000} />
        <span>MERN Stack Web Developer!</span>
        <Typist.Delay ms={1000} />
      </Typist>
    </div>
  );
};

export default TypingAnimation;
