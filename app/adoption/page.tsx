import { SearchCard } from '@/components';
import { GalleryCard } from '@/link_webContent';
import Link from 'next/link';
import SearchBar from './components/SearchBar';

const AdoptionPage = () => {
  return (
    <div className='relative max-w-screen-2xl min-h-screen flex justify-center items-center mx-auto h-auto pb-12'>
        <div className='flex flex-col mt-10 gap-12 w-full '>
            {/* Page title */}
            <div className='flex justify-center'>
                <h1 className='font-bold font-poppins text-5xl text-primary-green drop-shadow-lg'>
                    Pet Gallery
                </h1>
            </div>
            {/* Search bar and filters */}
            <div className='relative w-full mx-auto flex justify-center'>
                <SearchBar />
            </div>
            {/* Search Result Cards */}
            <div className='relative flex flex-wrap z-10 justify-center items-center gap-10 lg:gap-20 h-fit'>
                {GalleryCard.map((data) => (
                    <Link key={data.id}
                            href={`/adoption/${data.id}`}>
                        <SearchCard 
                            img_src={data.image_src}
                            name={data.name}
                            breed={data.breed}
                            age={data.age}
                            gender={data.gender}
                            fee={data.fee}
                        />
                    </Link>
                    
                ))}
            </div>
        </div>
    </div>
  )
}

export default AdoptionPage