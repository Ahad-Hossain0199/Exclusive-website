import React from 'react'

import { useLocation } from 'react-router'

const Breadcrum = () => {

     let {pathname} = useLocation()

     let PathLocation = pathname.split("/")

  return (
    <div className='flex gap-4'>
      <h2>Home</h2>
      <h2>/</h2>
      <h2>{PathLocation}</h2>
    </div>
  )
}

export default Breadcrum
