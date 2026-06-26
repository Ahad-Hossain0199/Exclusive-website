import React from 'react'

const Button = ({children,className}) => {
  return (
    <>
    <button className={`bg-primary py-4 px-12 rounded-sm font-medium text-[#FAFAFA] ${className}`}>
        {children}
    </button>
      
    </>
  )
}

export default Button
