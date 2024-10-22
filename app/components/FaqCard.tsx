'use client';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface ContentItems {
    question: string;
    answer: string;
}

interface FaqProps {
    content: ContentItems;
    index: number;
    cardStyle?: string;
}

const FaqCard = ({content, index, cardStyle} : FaqProps) => {

    const [questionToggle, setQuestionToggle] = useState<number | null>(null);

    const handleClick = (index:number) => {
        questionToggle === index ? setQuestionToggle(null) : setQuestionToggle(index);
    }


    return (
        <>
            <div className='flex justify-between items-center font-bold p-4 md:p-8 lg:p-10'> 
                <p className='text-sm md:text-base lg:text-xl'>
                    {content.question}
                </p>
                < IoIosArrowDown 
                    className={`text-2xl hover:cursor-pointer 
                                ${questionToggle === index 
                                    ? "rotate-180"
                                    : "rotate-0"}`}
                    onClick= {() => {handleClick(index)}}
                />
                
            </div>
            <hr 
                className={`${cardStyle}
                            ${questionToggle === index 
                                ?  "invisible "
                                :  "border-slate-200"}`}
            />
            <p className={questionToggle === index 
                            ? "bg-slate-200 p-4 md:p-8 lg:p-10  last:rounded-b-lg text-sm md:text-base" 
                            : "invisible max-h-0"}>
                {content.answer}
            </p>
        </>
    )
}

export default FaqCard