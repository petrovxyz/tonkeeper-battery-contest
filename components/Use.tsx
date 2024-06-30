import { useSamples } from '@/data'
import React from 'react'
import { MovingButton } from './ui/movingbutton'

const Use = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            <span className="underline underline-offset-4">Easy-to-use</span> on a <span className='text-[#0fb5f6]'>daily basis</span>
        </h1>
        <div className='w-full mt-10 grid lg:grid-cols-4 grid-cols-1 gap-4'>
            {useSamples.map((card) => (
                <MovingButton 
                    key={card.id}
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius='24px'
                    className='flex-1 text-white border-[#242e3b]'
                >
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16 bg-white-200/5 rounded-2xl border-white/5 border' />
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                            <p className='text-start text-white-100 mt-3 font-semibold bg-white/5 rounded-lg p-1.5'>
                                {card.charges}
                            </p>
                        </div>
                    </div>
                </MovingButton>
            ))}
        </div>
    </div>
  )
}

export default Use