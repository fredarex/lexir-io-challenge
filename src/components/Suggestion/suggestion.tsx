import Button from '@components/Button/button'
import Image from 'next/image'
import React from 'react'
import { ask_brand } from 'src/constant/images'

function Suggestion() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:max-w-[1213px] bg-kgray mt-[105px]">
      <div className="mt-[50px] ml-[20px] sm:ml-[34px] mr-1 pt-2 sm:pt-0">
        <div className='font-bold font-serif text-kbody3 mb-2 sm:text-kbody1 sm:mb-0'>
          Have a brand you d like to see on 
          <span className="text-kdarkgreen ml-2">Lexir?</span>
        </div>
        <p className='max-w-[540px]'>
          Lexir is always looking to connect with 
          new exciting craft brands from around the
          world. If you have a brand in mind that you d 
          like to see on Lexir, let us know.
        </p>
        <div className="w-[200px] h-[49px] sm:w-[244px] mt-[34px] mb-[10px]">
          <Button>Suggest a Brand</Button>
        </div>
      </div>
      <Image src={ask_brand} alt="" className="min-w-[1213px] lg:w-2/4 relative  object-cover"/>
    </div>
  )
}

export default Suggestion