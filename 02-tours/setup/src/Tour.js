import React, { useState } from 'react';



const Tour = ({id, name, info, image, price, handleDelete}) => {
  
  const [readMore, setReadMore] = useState(false)
  
  function handleClick(id) {
    console.log(id)
    handleDelete(id)
  }

  return (
    <article key ={id} className='single-tour'>
      <img src={image} alt={name} ></img>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0,200)}...`}
          <button onClick={()=>setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button onClick={()=>handleClick(id)} className='delete-btn'>
          Not Interested</button>
      </footer>
    </article>
  )
};

export default Tour;
