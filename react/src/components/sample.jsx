// import React from 'react'
// import { add } from "./utility"

// function Sample(props) {
//     console.log(add(2,4))
//   return (
//     <div>
//       <h2>Trending Topics</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod voluptatum iure incidunt, temporibus sequi iusto, pariatur maxime commodi ducimus, nihil autem. Magni modi praesentium, fuga culpa ad animi laboriosam!</p>
//        <button
//           className="counter"
//           onClick={() => props.setCount((count) => count + 1)}
//         >
//           Count is {props.count}
//         </button>
//     </div>
//   )
// }

// export default Sample

import React, { useState } from 'react'
// import style from "../css/sample.module.css"
import styled from "@emotion/styled";
import { css } from "@emotion/react";


function Sample() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>This is Sample Component</h1>
      <h2>{count}</h2>

      <button css={functionbutton} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {/* <button className={style.btn} onClick={() => setCount(count + 1)}>
        Increment
      </button>
       */}

      <button style={{ backgroundColor: "yellow", color: "black", width: "100px", height: "30px" }} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}
const functionbutton=css`
  background-color: blue;
  color: white;
  width: 100px;
  height: 30px;
`
const Button = styled.button`
  background-color: ${(props) => props.danger ? "red" : "lightgray"};
  color: ${(props) => props.color || "black"};
  width: 100px;
  height: 30px;
`

export default Sample

// function Sample(){
//     const[count,setCount] = useState(0)

//     const increment = () => {
//         setCount(count + 1)
//     }
//     const decrement = () => {
//         setCount(count - 1)
//     }
//     return(
//         <div>
//             <h1>This is a sample component</h1>
//             <h2>{count}</h2>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }



