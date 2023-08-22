import { GalleryCard } from '@/link_webContent';
import { Header, SearchCard } from '../../../../components';
import Link from 'next/link';

const PetCarousel = () => {
  return (
    <div className=' max-w-screen-2xl h-fit my-12 relative flex flex-col justify-center items-center mx-auto'>
        <Header 
            content='Similar Pets'
        />
        <div className='flex overflow-auto w-4/5 lg:w-full bg-gray-50 shadow-md'>
            {GalleryCard.map((pet) => (
                <Link key={pet.id} className='scale-75'
                href={`/adoption/${pet.id}`}>
                <SearchCard 
                    img_src={pet.image_src}
                    name={pet.name}
                    breed={pet.breed}
                    age={pet.age}
                    gender={pet.gender}
                    fee={pet.fee}
                />
            </Link>
            ))}
        </div>
    </div>
  )
}

export default PetCarousel

