import Image from 'next/image';
import MultiStepForm from './components/MultiStepForm';

const RehomingPage = () => {
  return (
    <div className='w-full max-h-[90vh] flex flex-col lg:flex-row'>
        <div className='basis-1 lg:basis-1/2 flex justify-center w-full items-start bg-gray-100'>
            <MultiStepForm />
        </div>
        {/* Picture for larger screens */}
        <div className='hidden lg:basis-1/2 lg:w-full lg:flex lg:relative lg:h-screen lg:justify-center'>
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

