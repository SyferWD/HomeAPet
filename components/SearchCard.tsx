import Image from 'next/image';
import {LuCalendarClock, } from 'react-icons/lu';
import {PiGenderIntersexBold} from 'react-icons/pi';
import { AiOutlineDollarCircle } from 'react-icons/ai';

interface SearchBarProps {
    img_src?: string,
    name: string,
    breed: string,
    age: string,
    gender: string,
    fee: number
}


const SearchCard = ({img_src, name, breed, age, gender, fee} : SearchBarProps) => {
  return (
    <div className='relative flex flex-col bg-gray-100 h-full rounded-md w-full max-w-[75%] sm:max-w-[280px] lg:max-w-[320px] shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300'>
        {/* Pet Image */}
        {/* <div className='relative h-[250px] sm:h-[300px] justify-center'> */}
        <div className='basis-3/5 relative justify-center'>
            <Image 
                src= {img_src || ''}
                alt={breed}
                fill
                sizes='(max-width: 800px) 80vw, (max-width: 1024px) 50vw, 33vw'
                className='object-cover rounded-t-md'
                priority
            />
        </div>
        {/* Pet Details */}
        <div className='basis-2/5 flex flex-1 flex-col justify-center p-4 '>
            {/* Pet Name and Breed */}
            <div className='flex justify-center items-center py-4 gap-4'>
                <h3 className='font-semibold text-xl font-poppins capitalize '>
                    {name} 
                </h3>
                <span className='italic capitalize'>
                    ( {breed} ) 
                </span>
            </div>
            
            {/* Minor details with icons */}
            <div className='flex justify-between px-4'>
                <div className='basis-1/3 flex-col flex gap-2 capitalize'>
                    <LuCalendarClock 
                        className="w-6 h-6 md:w-7 md:h-7 text-green-500 mx-auto"
                    />
                    <p className='flex justify-center text-wrap text-center text-sm md:text-base'>{age}</p>
                </div >
                <div className='basis-1/3 flex-col flex gap-2'>
                    <PiGenderIntersexBold 
                        className="w-6 h-6 md:w-7 md:h-7 text-green-500 mx-auto"
                    />
                    <p className='flex justify-center capitalize text-sm md:text-base'>{gender}</p>
                </div>
                <div className='basis-1/3 flex-col flex gap-2'>
                    <AiOutlineDollarCircle
                        className="w-6 h-6 md:w-8 md:h-8 text-green-500 mx-auto"
                    />
                    <p className='flex justify-center text-sm md:text-base'>$ {fee}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchCard