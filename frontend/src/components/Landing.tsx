import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  const [name, setName] = useState("")
  return (
    <div className='text-center'>
        <input 
        type='text'
        onChange={(e) => setName(e.target.value)}/>
        <Link to={`/room/?name=${name}`}>Join Room</Link>  
    </div>
  )
}

export default Landing
