import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaImages, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] =useState(0)
  const {name,job,image,text}=people[index]

  const checkNum = (num) => {
    if (num > people.length -1){
      return 0
    }
    if (num < 0) {
      return people.length-1
    }
    return num
  }

  const nextPerson = () =>{
    let newindex = index + 1
    setIndex(checkNum(newindex))
  }

  const prevPerson = () =>{
    let newindex = index -1
    setIndex(checkNum(newindex))
  }

  const randomPerson= () => {
    const randInt = Math.floor(Math.random()*4)
    setIndex(randInt)
  }

  return (
    <article className='review'>
      <div className='img-container'>
      <img src={image} alt={name} className='person-img'/>
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight/>
        </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
          surprise me
        </button>
      
    </article>
  )
};

export default Review;
