import React from 'react';
import Tour from './Tour';



const Tours = ({ tours, handleDelete }) => {

  console.log('tours', tours)

  // const toursList=tours.map(tour => {
  //   return (<Tour 
  //     key={tour.id}
  //     name={tour.name}
  //     info={tour.info}
  //     image={tour.image}
  //     price={tour.price}
  //   />
  // )})



  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map(tour => {
          return (<Tour
            handleDelete={handleDelete}
            id={tour.id}
            key={tour.id}
            name={tour.name}
            info={tour.info}
            image={tour.image}
            price={tour.price}
          />
          )
        })}
      </div>
    </section>
  )
};

export default Tours;
