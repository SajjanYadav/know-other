import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center mt-96 flex-col">
        <div className='spinner'></div>
        <div className='text-white'>Loading...</div>
    </div>
  )
}

export default Spinner