import React, { useState } from 'react'

export const MyUseState = () => {


    // let count = 0;

    const [count,setCount] = useState(0)


    const incre = () => {
        // count++;
        setCount(count+1);
        console.log(count)
    }



  return (
    <div>
        <h1>UseState Hook</h1>

        <p>Count: {count}</p>
        <button onClick={incre} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Increment</button>
    </div>
  )
}
