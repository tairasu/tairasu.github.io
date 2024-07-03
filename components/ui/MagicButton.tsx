'use client';

import React from "react";



const MagicButton = (
    {title, icon, position, handleClick, otherClasses}: {
        title: string;
        icon: React.ReactNode;
        position: string;
        handleClick?: () => void;
        otherClasses?: string;
    }
) => {
  return (
    <button className="relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none  md:w-60 md:mt-10" onClick={handleClick}>
      {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#fed7aa_50%,#FFFFFF_100%)]" /> */}
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-orange-400 bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
