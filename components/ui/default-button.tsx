import React from 'react';

const DefaultButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button 
      className={`relative z-10 flex items-center justify-center px-6 py-2 text-s w-full md:w-auto md:mt-10 rounded-full bg-white text-black font-semibold hover:shadow-xl transition duration-200 gap-2 ${otherClasses}`} 
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
    </button>
  );
};

export default DefaultButton;
