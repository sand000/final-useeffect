import { useEffect } from "react";
import { useState } from "react";

export default function AfterRender(){
    const [count,setCount] = useState(0);

    useEffect(() =>{
        document.title = `Clicked ${count} times`
    },[count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count+1)}>click</button>
        </div>
    )
}