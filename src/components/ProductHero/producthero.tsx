import Image from 'next/image';
import React, { useEffect } from 'react';
import { belflag, cocktail, noseicon, party, rhubarb, tongueicon } from 'src/constant/images';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import Suggestion from '@components/Suggestion/suggestion';
import { useSelector,useDispatch } from 'react-redux';
import { fetchProductStart } from 'src/redux/products/products.actions';
import { productsState } from 'src/redux/products/products.reducer';
import ReactCountryFlag from "react-country-flag"
const mapState = (state:any) => {
    return {
      product: state.products.product
    }
  }
function Producthero():any  {
    const {product}:any = useSelector<productsState>(mapState);
  const dispatch:any = useDispatch();

  useEffect(() => {
    dispatch(fetchProductStart());
  },[]);
        return (
            <>
                {
                    product && product.length > 0 ?
                    product.map((item:any,index:any) => {
                        return (
                            <>
                
                                <div className='pl-[25px] pr-[30px] sm:pl-[36px] sm:pr-[38px]'>
                                    {/*Product Top section*/}
                                    <div className="w-[100%] md:flex md:flex-row justify-between sm:flex-col">
                                        <div className='bg-kgray md:w-[768px] md:h-[488px] sm:max-w-[768px] sm:max-h-[488px] flex justify-center items-center pt-[40px] pb-[40px]'>
                                            <Image src={rhubarb} className="max-w-[141px] max-h-[403px]" />
                                        </div>
                                        <div className='md:max-w-[380px] md:ml-[83px] sm:ml-0'>
                                            {/* product name */}
                                            <h1 className="text-kbody1 font-bold font-serif tracking-tight">{item.name}</h1>
                                            {/** */}
                                            <h6 className='text-kbody3 leading-[0.9px] text-[#CCCCCC]'>APERITIF</h6>
                                            <div className='flex justify-between mt-[33px] font-bold text-kbody4'>
                                                {/* made in */}
                                                <div className="flex items-center justify-between mb-[15px]">
                                                    <ReactCountryFlag
                                                        className="emojiFlag"
                                                        svg
                                                        countryCode={item.countryCode}
                                                        style={{
                                                            fontSize: '17.6px'
                                                        }}
                                                        aria-label="United States"
                                                    />
                                                    <div className="ml-[10px]">IZEGEM, {item.country}</div>
                                                </div>
                                                <div>
                                                    {item.abv} ABV
                                                </div>
                                            </div>
                                            <div>
                                                {/*product description*/}
                                                <p className="font-normal mb-[50px]">
                                                    {item.description}
                                                </p>
                                                <div className="flex justify-between">
                                                    {/* litre */}
                                                    <div className="w-[203px] h-[49px] flex justify-center items-center font-normal border border-[#F2F2F2] mr-2">700ml</div>
                                                    {/* quantity */}
                                                    <div className='flex justify-center items-center w-[136px] h-[48px] border border-[#F2F2F2]'>
                                                        <AiOutlineMinus className='w-[43px] cursor-pointer' size={16}/>
                                                        <span className="w-[43px] border border-y-transparent text-center border-x-1 border-[#F2F2F2]">2</span>
                                                        <AiOutlinePlus className='w-[43px] cursor-pointer'/>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between bg-primary text-[#ffffff] cursor-pointer rounded mt-[10px] pl-[40px] pr-[40px] pt-[12px] pb-[12px]">
                                                    <span>Add to Cart</span>
                                                    <span>${item.price}</span>
                                                </div>
                                            </div>
                                            
                                        </div>

                                    </div>

                                    {/* Product Bottom section */}
                                    <div className='flex flex-col lg:flex-row justify-between mt-[80px] '>
                                        {/*product details */}
                                        <div className="max-w-[768px] min-h-[250px]">
                                            <h4 className="font-bold text-kbody2 mb-[34px]">Product Details</h4>
                                            <p className="lg:max-w-[697px]">
                                                Kiss My Rhubarb takes its origins from an old handwritten recipe 
                                                from co-creators Niels’ and Wouters’ rebellious grandparents. 
                                                Using carefully hand-selected stalks of rhubarb, and locally-sourced 
                                                flowers and herbs, this summery aperitif perfectly expresses the brimming 
                                                liveliness that characterizes the Belgian countryside in bloom. 
                                            </p>
                                            <p className="lg:max-w-[697px] mt-[30px]">
                                                Kiss My Rhubarb is created in collaboration with local producers in Izegem 
                                                that select only the freshest stalks of rhubarb using attentive and sustainable
                                                practices. By avoiding the pitfalls of overproduction and diminished flavour that 
                                                large-scale harvesting methods can bring, Kiss My’s careful foraging process results 
                                                in an aperitif that emphasises the tangy juiciness of its primary ingredient.
                                            </p>
                                        </div>
                                        <div className='lg:w-[380px] lg:ml-[83px] mt-6 lg:mt-0 text-kbody6 sm:text-kbody4'>
                                            {/* Tasting note */}
                                            <div>
                                                <h6 className='font-bold'>Tasting Notes</h6>
                                                <div className="flex items-center mt-[30px]">
                                                    <div className="min-w-[21px]">
                                                        <Image src={noseicon} alt="" />
                                                    </div>
                                                    <ul className="flex items-center ml-[38px]">
                                                        {item.tastingnote.smell.map((smell:string,index:number) => {
                                                            const evenNo = (index + 1) % 2;
                                                            if(evenNo == 0){
                                                                return (
                                                                    <>
                                                                        <li className="flex items-center" key={index}>
                                                                            <div className='w-[4px] h-[4px] bg-[#8F8F8F] rounded-full ml-2 mr-2'></div>
                                                                            {smell}
                                                                            <div className='w-[4px] h-[4px] bg-[#8F8F8F] rounded-full ml-2 mr-2'></div>
                                                                        </li>  
                                                                    </>
                                                                )
                                                            }else {
                                                                return (
                                                                    <>
                                                                        <li key={index}>{smell}</li>
                                                                    </>
                                                                )
                                                            }   
                                                        })}
                                                    </ul>
                                                </div>
                                                <div className="flex items-center mt-[30px]">
                                                    <div className="min-w-[21px]">
                                                        <Image src={tongueicon} alt="" />
                                                    </div>
                                                    <ul className="flex items-center ml-[38px]">
                                                        {item.tastingnote.taste.map((taste:string,index:number) => {
                                                            const evenNo = (index + 1) % 2;
                                                            if(evenNo == 0){
                                                                return (
                                                                    <>
                                                                        <li className="flex items-center" key={index}>
                                                                            <div className='w-[4px] h-[4px] bg-[#8F8F8F] rounded-full ml-2 mr-2'></div>
                                                                            {taste}
                                                                            <div className='w-[4px] h-[4px] bg-[#8F8F8F] rounded-full ml-2 mr-2'></div>
                                                                        </li>  
                                                                    </>
                                                                )
                                                            }else {
                                                                return (
                                                                    <>
                                                                        <li key={index}>{taste}</li>
                                                                    </>
                                                                )
                                                            }
                                                            
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* flavour intensity */}
                                            <div className='font-bold mt-[30px]'>
                                                <h6>Flavour Intensity</h6>
                                                <div className="flex mt-[16px]">
                                                    <div className='w-[72px] h-[2px] bg-primary mr-[2.7px]'></div>
                                                    <div className='w-[72px] h-[2px] bg-primary mr-[2.7px]'></div>
                                                    <div className='w-[72px] h-[2px] bg-primary mr-[2.7px]'></div>
                                                    <div className='w-[72px] h-[2px] bg-[#CACACA] mr-[2.7px]'></div>
                                                    <div className='w-[72px] h-[2px] bg-[#CACACA] mr-[2.7px]'></div>
                                                </div>
                                            </div>
                                            <div className='mt-[30px]'>
                                                <h6 className='font-bold'>Suggested Use</h6>
                                                <div className='flex mt-[30px]'>
                                                    <div className='w-[103px] h-[32px] bg-kgray flex justify-between items-center text-[12px] mr-2 pl-[8px] pr-[8px]'>
                                                        <span>In a cocktail</span>
                                                        <Image src={cocktail} />
                                                    </div>
                                                    <div className='w-[103px] h-[32px] bg-kgray flex justify-between items-center text-[12px] pl-[8px] pr-[8px]'>
                                                        <span>At a party</span>
                                                        <Image src={party} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* suggest brand */}
                                    <Suggestion/>
                                </div>
                            </>
                        )
                    }) : null
                }
            
            </>
            
          )
   

  
}

export default Producthero



