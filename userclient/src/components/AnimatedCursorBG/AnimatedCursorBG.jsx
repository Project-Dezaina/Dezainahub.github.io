import React from 'react'
import AnimatedCursor from "react-animated-cursor"
// import "./AnimatedCursorBG.css"
import "./AnimatedCursorBG.css";

export const AnimatedCursorBG = () => {
  return (
    // <div>AnimatedCursorBG</div>
    <AnimatedCursor
      innerSize={20}
      outerSize={500}
    //   color='193, 11, 111'
      color='75, 172, 224'
    //   innerAlpha={0.1}
    // outerStyle={null}
    // innerAlpha= {0.2}
      outerAlpha={0.2}
      innerScale={2}
      outerScale={1}
      showSystemCursir={true}
      hasBlendMode={true}
      outerStyle={{
        zIndex: '-10',
        filter: 'blur(100px)'
      }}
      innerStyle={{
        opacity: '10%',
    // border: '3px solid red',
        cursor:'auto'   
    
  }}
    //   clickables={[
    //     'a',
    //     'input[type="text"]',
    //     'input[type="email"]',
    //     'input[type="number"]',
    //     'input[type="submit"]',
    //     'input[type="image"]',
    //     'label[for]',
    //     'select',
    //     'textarea',
    //     'button',
    //     '.link'
    //   ]}
    />
  )
}
