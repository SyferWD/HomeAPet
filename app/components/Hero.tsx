import Image from 'next/image';
import Link from 'next/link';
import heroIcon from '../../public/Hero.jpg';

const ctaBtns = [
    {
        href : "/adoption",
        content: "Adoption",
        btnColor: "bg-primary-green hover:bg-green-600"
    },
    {
        href: "/rehoming",
        content: "Rehoming",
        btnColor: "bg-primary-blue hover:bg-blue-800"
    }
]

const Hero = () => {
  return (
    <div className='flex relative flex-col xl:flex-row gap-4 max-w-screen-2xl mx-auto'>
        <div className='flex-1 pt-8 md:pt-24 lg:pl-10  '>
            <h1 className='font-bold font-poppins text-[50px] sm:text-[48px] text-center lg:text-left'>
                <span className='text-primary-green font-extrabold sm:text-[64px]'>Adoption </span> 
                and
                <span className='text-primary-blue font-extrabold sm:text-[64px]'> Rehoming </span> 
                made easy. 
            </h1>
            <p className='mt-5 text-[27px] font-thin text-center lg:text-left'>
                A streamlined process made stress-free for everyone.
            </p>
            <div className='flex gap-8 lg:gap-16 justify-center xl:justify-start my-10'>
                {ctaBtns.map( (cta) => (
                    <Link
                        key={cta.content} 
                        href={cta.href} 
                        className={`${cta.btnColor} rounded-full text-white font-extrabold py-2 px-8 lg:py-4 lg:px-12 drop-shadow-xl hover:translate-y-[-5px]`}
                    >
                        {cta.content}
                    </Link>
                ))}
            </div>
        </div>
        <div className='flex lg:flex-[1.5] justify-center items-end w-full lg:h-screen'>
            <div className='relative flex justify-center xl:w-full w-[90%] xl:h-full  '>
                <Image 
                    src={heroIcon}
                    alt='Image of a dog for hero section'
                    className='object-contain w-3/4 xl:w-full'
                    priority={true}
                />
            </div>
        </div>
    </div>
  )
}

export default Hero