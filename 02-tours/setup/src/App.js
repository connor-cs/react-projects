import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'



function App() {

  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  function handleDelete(id) {
    console.log(id)
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    fetchTours()
    console.log('tours', tours)
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2 className='title'>No tours left</h2>
        <button className='btn' onClick={fetchTours}>refresh</button>
      </div>
      )}

  return (
    <main>
      <Tours tours={tours} handleDelete={handleDelete} />
    </main>
  )
}

export default App
