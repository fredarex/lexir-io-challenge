import React from 'react';
import {RiHome4Line} from 'react-icons/ri';
import {MdKeyboardArrowRight} from 'react-icons/md'
function Productsublink() {
  return (
    <div>
        {/*productsublink */}
        <div className='flex items-center text-kbody4 pt-[42px] pb-[42px] pl-[38px] pr[38px] text-xs md:text-kbody4  '>
          <div className='flex items-center'>
            {/*icon*/}
            <RiHome4Line size={16} />
            <span className='sm:ml-[22px] sm:mr-[22px] ml-1 mr-1'>
              {/*name*/}
              Home
            </span>
            <MdKeyboardArrowRight/>
          </div>
          <div className='flex items-center'>
            <span className='sm:ml-[22px] sm:mr-[22px] ml-1 mr-1'>
              {/*name*/}
              Spirits
            </span>
            <MdKeyboardArrowRight/>
          </div>
          <div className='flex items-center'>
            <span className='sm:ml-[22px] sm:mr-[22px] ml-1 mr-1'>
              {/*name*/}
              Kiss My
            </span>
            <MdKeyboardArrowRight/>
          </div>
          <div className='flex items-center'>
            <span className='sm:ml-[22px] sm:mr-[22px] ml-1 mr-1 font-bold'>
              {/*name*/}
              Kiss My Rhubarb
            </span>
          </div>

        </div>
    </div>
  )
}

export default Productsublink;