import { Header, SearchCard } from '../../../../components';
import Link from 'next/link';
import { petDataProps } from '../../constants';
import { useEffect, useState } from 'react';

// Define the prop type for PetCarousel
interface PetCarouselProps {
    species : string;
    pet_ID : number;
}

const PetCarousel = ( { species, pet_ID }: PetCarouselProps) => {

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
        fetchCarouselData(species);
    } , [])

    return (
        <div className=' max-w-screen-2xl my-12 relative flex flex-col justify-center items-center mx-auto'>
            <Header 
                content='Similar Pets'
            />
            <div className='flex overflow-auto w-4/5 bg-black/75 shadow-md rounded-md py-4'>
                {petCarousel.length > 1 ? petCarousel
                    .filter((pet: petDataProps) => pet.pet_id !== pet_ID)
                    .map((pet: petDataProps) => (
                    <Link 
                        key={pet.pet_id} 
                        className= "flex justify-center items-center flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] mx-2 h-[360px] sm:h-[480px]"
                        href={{
                            pathname: `/adoption/${pet.pet_id}`,
                            query: { pet_id: pet.pet_id },
                        }}
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
                )) : (
                    <p className='text-white text-lg w-full text-center'>
                        No similar pets found.
                    </p>
                )}
            </div>
        </div>
    )
}

export default PetCarousel

