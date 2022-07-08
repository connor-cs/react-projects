import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({ id, title, info }) => {

  const [active, setActive] = useState(false)

  function handleClick() {
    setActive(active=>!active)
  }
  
  return (
    <article className='question' key={id}>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={handleClick}>
          {active ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        
      </header>
      {active ? <p>{info}</p> : null}
    </article>
  )
};

export default Question;
