import React from 'react'
import { useState } from 'react'

const Hide_Show = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
    {
        show? <h1>Hi</h1>: null
    }
    
      {/* <button onClick={()=>setShow(true)}>show</button>
      <button onClick={()=>setShow(false)}>hide</button> */}

        <button onClick={()=>setShow(!show)}> {show? 'Hide': 'Show'} </button> 

    </div>

  )
}

export default Hide_Show
