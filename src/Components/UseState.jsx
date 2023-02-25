import React, { useState } from 'react'

const UseState = () => {
    const [Name, setName] = useState(' ');

  return (
    <div className='useState'>
        <h2>UseState Hook</h2>
        <h5>The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component.</h5>
        <input type="text" name="text" value={Name} onChange= {(e)=> setName(e.target.value)} />
        <h2>Your Name Is : {Name}</h2>
        <br />
    </div>
  )
}

export default UseState