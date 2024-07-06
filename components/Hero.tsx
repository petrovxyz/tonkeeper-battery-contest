'use client'

import { Spotlight } from './ui/Spotlight'
import DefaultButton from './ui/default-button'
import { FlipWords } from './ui/flip-words'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { LuDownload } from "react-icons/lu";
import Lottie from "lottie-react";
import battery from "../public/lotties/tonkeeper2.json";

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='#147999' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='#16c1fb' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='lightgreen' />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.007] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0 ">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <div className='pb-3 space-y-1'>
                <h2 className='uppercase tracking-widest text-xs text-center text-yellow-100 max-w-80'>
                    <a href="https://t.me/tonkeeper_news/143" target='_blank'>🏆 Tonkeeper Contest Winner</a>
                </h2>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-300 max-w-80'>
                    <a href="https://t.me/petrovxyz" target='_blank'>Contact author</a>
                </h2>
                </div>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Presenting new feature for:<FlipWords words={['swapping', 'sending', 'trading', 'staking', 'paying']}/>
                </h2>

                <Lottie animationData={battery} className='w-28 h-28 mt-6 p-4 bg-[#1d2633]/15 backdrop-blur-md rounded-3xl border-[#242e3b] border bg-gradient-to-b from-[#157998]/15 to-black-100/0' />
                <TextGenerateEffect 
                className='text-center text-[40px] md:text-5xl lg:text-6xl'
                words='Tonkeeper Battery'
                />


                <p className='text-center text-hint md:tracking-wider mb-4'>
                    Don&apos;t worry about gas⛽ anymore
                </p>

                <a href='https://tonkeeper.com/' target='_blank'><DefaultButton title="Download Tonkeeper" icon={<LuDownload />} position='left' /></a>

            </div>
        </div>

    </div>
  )
}

export default Hero