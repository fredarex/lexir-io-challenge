import React from 'react'

function Button({children,width,height}:any) {
  return (
    <div className='w-full h-full flex justify-center items-center bg-primary text-white font-bold text-kbody4 rounded cursor-pointer'>
        {children}
    </div>
  )
}

export default Button