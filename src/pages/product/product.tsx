import Header from '@components/Header/header';
import Producthero from '@components/ProductHero/producthero';
import Productsublink from '@components/ProductSubLink/productsublink';
import React, { useEffect } from 'react';

const Product = () => {
  return (
    <div>
        <div className='max-w-[1280px] m-auto pt-[80px] font-lato text-primary'>
            <Productsublink />
            <Producthero />
        </div>
    </div>
  )
}

export default Product