import Image from 'next/image';
import MultiStepForm from './components/MultiStepForm';

const RehomingPage = () => {
  return (
    <div className='w-full min-h-[calc(100vh-53px)] md:min-h-[calc(100vh-100px)] flex flex-col justify-center items-center lg:flex-row bg-gray-100 '>
        <div className='lg:basis-1/2 flex justify-center items-center w-full h-full px-3 py-4'>
            <MultiStepForm />
        </div>
        {/* Picture for larger screens */}
        <div className='hidden lg:basis-1/2 lg:w-full h-full lg:flex lg:relative lg:h-screen lg:justify-center'>
            <Image 
                src="/mission-photo.jpg"
                alt='Lady carrying a dog'
                fill
                width={0}
                height={0}
                sizes='100vw'
                className='object-cover w-full h-auto'
            />
        </div>
        
    </div>
  )
}

export default RehomingPage

