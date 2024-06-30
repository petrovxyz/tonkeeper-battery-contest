import React from 'react'
import DefaultButton from './ui/default-button'
import { LuDownload } from 'react-icons/lu'
import { socialMedia } from '@/data'
import { FaAndroid, FaApple, FaBrave, FaChrome, FaEdge, FaFirefox, FaLaptop, FaYandexInternational } from 'react-icons/fa6'
import SecondButton from './ui/second-button'

const Footer = () => {
  return (
    <footer className='w-full py-10'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96 z-0'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50 lg:opacity-15' />
        </div>

    <div className='flex flex-col items-left gap-y-4'>
    <h1 className='heading lg:max-w-[45vw]'>
        Begin your crypto journey with revolutionary <span className='text-[#0fb5f6]'>innovations</span>.
    </h1>
    <p className='text-hint text-left'>
        Safety, convenience and speed are our main priorities. Join Tonkeeper today.
    </p>
    <div className="flex flex-col md:flex-row gap-4">
        <a href="https://play.google.com/store/apps/details?id=com.ton_keeper" target='_blank'>
            <DefaultButton title="Tonkeeper Android" icon={<FaAndroid />} position='left' />
        </a>
        <a href="https://apps.apple.com/us/app/tonkeeper/id1587742107" target='_blank'>
            <DefaultButton title="Tonkeeper IOS" icon={<FaApple />} position='left' />
        </a>
    </div>
    <div className="flex flex-col md:flex-row gap-4">
        <a href="https://tonkeeper.com/pro" target='_blank'>
            <SecondButton title="Tonkeeper Pro" icon={<FaLaptop />} position='left' />
        </a>
        <div className="justify-center items-center flex flex-wrap gap-2">
            <a href="https://chrome.google.com/webstore/detail/tonkeeper/omaabbefbmiijedngplfjmnooppbclkk/?utm_source=tonkeeper_index" target='_blank'>
                <SecondButton title="" icon={<FaChrome />} position='left' otherClasses='py-3' />
            </a>
            <a href="https://addons.mozilla.org/en-US/firefox/addon/tonkeeper/?utm_source=tonkeeper_index" target='_blank'>
                <SecondButton title="" icon={<FaFirefox />} position='left' otherClasses='py-3' />
            </a>
            <a href="https://chrome.google.com/webstore/detail/tonkeeper/omaabbefbmiijedngplfjmnooppbclkk/?utm_source=tonkeeper_index" target='_blank'>
                <SecondButton title="" icon={<FaBrave />} position='left' otherClasses='py-3' />
            </a>
            <a href="https://chrome.google.com/webstore/detail/tonkeeper/omaabbefbmiijedngplfjmnooppbclkk/?utm_source=tonkeeper_index" target='_blank'>
                <SecondButton title="" icon={<FaYandexInternational />} position='left' otherClasses='py-3' />
            </a>
            <a href="https://chrome.google.com/webstore/detail/tonkeeper/omaabbefbmiijedngplfjmnooppbclkk/?utm_source=tonkeeper_index" target='_blank'>
                <SecondButton title="" icon={<FaEdge />} position='left' otherClasses='py-3' />
            </a>
        </div>
    </div>
</div>


        <div className='flex mt-16 md:flex-row flex-col justify-between'>
            <p className='md:text-base text-sm'>© 2024 Tonkeeper. All rights reserved. <span className='text-hint'>All trademarks are the property of their respective owners.</span></p>

            <div className='flex items-center md:gap-3 gap-6 mt-5 lg:mt-0'>
                {socialMedia.map((profile) => (
                    <a href={profile.href} target='_blank' key={profile.id}>
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-full border border-black-300'>
                        <img src={profile.img} alt={profile.img} width={18} height={18} />
                    </div>
                    </a>
                ))}
            </div>

        </div>

    </footer>
  )
}

export default Footer