'use client';

import { CustomButtonProps } from "@/app/interfaces";

const CustomButton = ({content, btnStyle, handleClick}: CustomButtonProps) => {
  return (
    <button className={`flex justify-center items-center p-1 md:p-3 ${btnStyle}`}
      onClick={handleClick}
    >
      {content}
    </button>
  )
}

export default CustomButton