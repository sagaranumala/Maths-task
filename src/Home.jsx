import React from 'react'
import "./Home.css"

import { MathJax } from 'better-react-mathjax'
import Latex from 'react-latex';

function Home() {
  const eq=`$$k_{n+1} = n^2 + k_n^2 - k_{n-1}$$`;
  return (
    <div>
        <Latex>
          {eq}
        </Latex>
      
    </div>
  )
}

export default Home
