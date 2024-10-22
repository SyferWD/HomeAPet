'use client';

import { CustomButtonProps } from "@/app/interfaces";

const CustomButton = ({content, btnStyle, handleClick}: CustomButtonProps) => {
  return (
    <button className={`flex justify-center items-center py-1 px-2 md:p-3 ${btnStyle}`}
      onClick={handleClick}
    >
      {content}
    </button>
  )
}

export default CustomButton