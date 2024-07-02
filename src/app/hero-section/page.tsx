import Image from 'next/image'
import React from 'react'
import heroImage from '../../../public/15.jpg'
const Home = () => {
    return (
        <>
            <div className="   items-center flex justify-between  px-20">
                <div className="md:w-[460px] w-full ">
                    <h1 className=' mt-10 text-6xl text-green-900 font-semibold'>A Better IT Solution Your Business</h1>

                    <p className=' mt-10 text-lg text-green-700'>Mobirise is a free offline app for Windows and Mac to easily create small/medium websites, landing pages, portfolios. 3500+ beautiful website blocks, templates and themes help you to start easily.</p>
                    
                    <button className=' mt-8 w-60 py-3 text-white bg-green-900 rounded-bl-[2rem] rounded-tr-[2rem] font-semibold  hover:border hover:border-green-900 hover:bg-transparent hover:text-green-900 '>Get Started</button>
                </div>

                <div>
                    <Image className=' rounded-bl-[12rem] rounded-tr-[12rem] h-[40rem] my-20 ' src={heroImage} alt='hero' width={600} height={0}></Image>
                </div>

            </div>
        </>
    )
}

export default Home
