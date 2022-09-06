import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { facebook, instagram, linkedin, medium, whiteLogo } from 'src/constant/images'

function Footer() {
  return (
    <div className='w-full text-kbody4 bg-primary'>
      <div className="max-w-[1280px] min-h-[338px]  flex flex-col justify-between m-auto pl-8 pr-8 pt-10 pb-5">
        {/* Top section */}
        <div className='flex flex-col items-center lg:flex-row lg:justify-between lg:items-start font-medium'>
          <div>
            <Image src={whiteLogo} alt="white logo"/>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:items-start">
            <div className="grid grid-cols-1 gap-20 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 mt-4 mb-4 lg:mt-0 lg:mb-0 text-white">
              {/*community*/}
              <div className="lg:ml-[96px]">
                <h6 className="text-[#8F8F8F] uppercase">COMMUNITY</h6>
                <ul>
                  <li className="mt-4">
                    <Link href='/'>
                      Lexir for Brands
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link href='/'>
                      Business Buyers
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link href='/'>
                      Sales Affiliates
                    </Link>
                  </li>
                </ul>
              </div>
              {/* platform */}
              <div className="md:ml-[96px]">
                <h6 className="text-[#8F8F8F] uppercase">Platform</h6>
                <ul>
                  <li className="mt-4">
                    <Link href='/'>
                      Resources
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link href='/'>
                      Pricing
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link href='/'>
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>
              {/* COMPANY */}
              <div className="md:ml-[96px]">
                <h6 className="text-[#8F8F8F] uppercase">Platform</h6>
                <ul>
                  <li className="mt-4">
                    <Link href='/'>
                      About
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link href='/'>
                      Contact
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link href='/'>
                      Legal
                    </Link>
                  </li>
                </ul>
              </div>
              {/* lexir shop */}
              <div className="md:ml-[90px]">
                <h6 className="text-[#8F8F8F] uppercase">Lexir Shop</h6>
                <ul>
                  <li className="mt-4">
                    <Link href='/'>
                      Brands
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link href='/'>
                      Spirits
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link href='/'>
                      Wine
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link href='/'>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* social link */}
            <div className="lg:ml-[96px]">
                <span  className="mr-5">
                  <Image src={medium} alt="medium icon" />
                </span>
                <span className="mr-5">
                  <Image src={facebook} alt="medium icon" />
                </span>
                <span className="mr-5">
                  <Image src={instagram} alt="medium icon" />
                </span>
                <span className="mr-5">
                  <Image src={linkedin} alt="medium icon" />
                </span>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="text-kbody6 sm:text-kbody4 text-white">
          {/*line*/}
          <div className="w-full h-[1px] mb-4 bg-[#8F8F8F]"></div>
          <div className="flex justify-between">
            <span className="font-light">© 2022 Lexir Inc.</span>
            <div>
              <ul className="flex font-medium">
                <li>
                  <Link href={'/'}>Privacy</Link>
                </li>
                <li className="ml-[10px] sm:ml-[64px]">
                  <Link href={'/'}>Terms of service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default Footer