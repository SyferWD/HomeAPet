import { Header, SearchCard } from '../../../../components';
import Link from 'next/link';
import { petDataProps } from '../../constants';
import { useEffect, useState } from 'react';

// Define the prop type for PetCarousel
interface PetCarouselProps {
    species : string;
}

const PetCarousel = ( petSpecies : PetCarouselProps) => {

    const [petCarousel, setPetCarousel] = useState<petDataProps[]>([])

    const fetchCarouselData = async( searchTerm : string) => {
        
        try {
            const searchResults = await fetch(`/api/searchPets?type=${searchTerm}&page=1`, {
                headers: {
                    "Content-Type" : "application/json"
                },
                method: "GET"
            })
            
            const petsData = await searchResults.json();

            setPetCarousel(petsData.requestedFilteredPets);
        } catch (error) { 
            setPetCarousel([]);
        }
    }

    useEffect(() => {
        fetchCarouselData(petSpecies.species);
    } , [])

    return (
        <div className=' max-w-screen-2xl my-12 relative flex flex-col justify-center items-center mx-auto'>
            <Header 
                content='Similar Pets'
            />
            <div className='flex overflow-auto w-4/5 lg:w-full bg-black/75 shadow-md rounded-md py-4'>
                {petCarousel.map((pet: petDataProps) => (
                    <Link 
                        key={pet.pet_id} 
                        className= "flex justify-center items-center flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] mx-2 max-h-96"
                        href={`/adoption/${pet.pet_id}`}
                    >
                        <SearchCard 
                            img_src={pet.petURL}
                            name={pet.name}
                            breed={pet.breed}
                            age={pet.age}
                            gender={pet.gender}
                            fee={50}
                        />
                </Link>
                ))}
            </div>
        </div>
    )
}

export default PetCarousel

