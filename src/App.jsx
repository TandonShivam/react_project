import React, { useState } from 'react'

function App() {
  var [a,b]=useState(1);  //destructuring
  return (
    <div className='w-screen h-screen bg-zinc-700 text-cyan-100 p-3'>{a}
    <button onClick={()=>b(a+1)} className='w-15 h-8 bg-amber-950'>click</button>
    </div>  
  )
}

export default App