import React, { useEffect, useState }  from 'react'

export const MyUseEffect = () => {




    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(999)


    const incre = () => {
        // count++;
        setCount(count+1);
        // console.log(count)
    }

    const decre = () => {
        // count++;
        setCount2(count2-1);
        // console.log(count)
    }


    // useEffect(()=>{
    //     // setCount(count + 2);
    //     console.log(count+2)
    // },[count2,count])

    // useEffect(()=>{
    //     // setCount(count + 2);
    //     console.log(count+2)
    // },[])

    // useEffect(()=>{
    //     // setCount(count + 2);
    //     console.log(count+2)
    // })


    return (
        <div>

            <h1 className='text-4xl font-medium text-center'>Use Effect Hook</h1>

            <p>Count: {count}</p>
            <button onClick={incre} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Increment</button>
        
            <p>Count2: {count2}</p>
            <button onClick={decre} className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Decrement</button>


        </div>
    )
}
