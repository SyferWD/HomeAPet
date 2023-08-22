import Image from 'next/image';

interface AboutUsProps {
    title: string;
    subtitle: string;
    extra_subtitle?: string;
    img_src: string;
    img_alt: string;
    flip : boolean;
}

const AboutUsCard = ({title, subtitle, extra_subtitle, img_src, img_alt, flip}: AboutUsProps) => {
  return (
    <div className='flex flex-col lg:flex-row justify-center h-[720px] lg:h-[640px] '>
        <div className= {`flex-1 flex flex-col justify-start p-24 gap-10 lg:gap-20 text-white ${flip ? "lg:order-1" : "lg:order-2"}`}>
            <h4 className='font-extrabold text-4xl font-poppins'>
                {title}
            </h4>
            <p className='font-medium text-lg'>
                {subtitle}
            </p>
            <p className='font-medium text-lg'>
                {extra_subtitle}
            </p>
        </div>
        <div className= {`flex-1 relative ${flip ? "lg:order-2" : "lg:order-1"} `} >
            <Image 
                src={img_src}
                alt={img_alt}
                fill
                className='object-cover overflow-hidden '
            />
        </div>
    </div>
  )
}

export default AboutUsCard