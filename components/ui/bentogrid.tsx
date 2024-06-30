"use client"
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./bg-gradient";
import { useState } from "react";
import Lottie from "lottie-react";
import confetti from "../../public/lotties/confetti.json";
import DefaultButton from "./default-button";
import { FaTelegram } from "react-icons/fa6";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto py-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-[24px] group/bento hover:shadow-xl transition duration-200 shadow-input bg-[#1d2633] border-[#242e3b] border justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img 
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover object-center w-full h-full'}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold " />
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-400 text-[#8994a3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className={cn("font-bold text-lg lg:text-2xl max-w-96 z-10", titleClassName)}>
            {title}
          </div>

        {id === 3 && (
          <div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-top-5">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['Make Swaps', 'Send NFTs', 'Trade'].map((item) => (
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-30 rounded-lg text-center bg-[#242e3b]">
                  {item}
                </span>
              ))}
              <span className="py-4 lg:py-7 px-3 rounded-lg text-center bg-[#2f3c4d] opacity-30" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
              <span className="py-4 lg:py-7 px-3 rounded-lg text-center bg-[#2f3c4d]" />
              {['Pay', 'Send Tokens', 'Unstake TON'].map((item) => (
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#242e3b]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {id === 6 && (
          <div className="mt-5 relative flex flex-col items-center justify-center">
            <div className={`absolute -bottom-5 -right-32`}>
              <Lottie 
                animationData={confetti}
                loop={clicked}
                autoplay={clicked}
                style={{ width: 150, height: 150 }}
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMid slice'
                }}
              />
            </div>
          
            <a href="https://t.me/tonkeeper_news" target="_blank" className="w-full flex justify-center">
              <DefaultButton 
                title={clicked ? "Thanks for subscribing!" : "Subscribe Tonkeeper"}
                icon={clicked ? " 🙏" : <FaTelegram className="text-2xl lg:text-xl" />}
                position="right"
                otherClasses="text-white text-sm lg:text-base bg-white/10"
                handleClick={handleClick}
              />
            </a>

          </div>
        )}

      </div>
    </div>
    </div>
  );
};
