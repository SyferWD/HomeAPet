'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { petDataProps } from '../constants';
import SearchBar from './SearchBar';
import { SearchCard } from '@/components';
import LoadingSpinner from '@/app/components/LoadingSpinner';

interface adoptionProps {
    initialPets: petDataProps[];
    totalNumofPets: number
}

const AdoptionPage = ( {initialPets, totalNumofPets}:adoptionProps ) => {

    const [initialRender, setInitialRender] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(totalNumofPets / 5));
    const [galleryCards, setGalleryCards] = useState<petDataProps[]>(initialPets);
    const [loading, setLoading] = useState(false);

    const getGalleryCards = async(pageNumber : number) => {
        setLoading(true);
        try {
            const fetchedData = await fetch(`api/pets?page=${pageNumber}`,{
                headers : {
                    "Content-Type" : "application/json",
                },
                method: 'GET',
            })

            const petsData = await fetchedData.json();

            setGalleryCards(petsData.requestedPets);
            setTotalPages(Math.ceil(petsData.totalNumOfPets / 5));

        } catch (error) {
            console.error("Failed to fetch data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (nextPageNumber : number) => {
    
        if(initialRender){
            setInitialRender(false);
        }
        setCurrentPage(nextPageNumber);
        window.scroll(0, 0);

    };

    const handleSearch = async( searchTerm : string) => {
        if(initialRender){
            setInitialRender(false);
        }
        // A check to reset the gallery cards if user does not input anything
        if(searchTerm === ""){
            getGalleryCards(currentPage);
            return
        }
        
        try {
            const searchResults = await fetch(`api/searchPets?type=${searchTerm}&page=${currentPage}`, {
                headers : {
                    "Content-Type" : "application/json"
                },
                method : "GET"
            })
            
            const petsData = await searchResults.json();

            setGalleryCards(petsData.requestedFilteredPets);
            setTotalPages(Math.ceil(petsData.totalNumOfFilteredPets / 5));

        } catch (error) { 
            setGalleryCards([]);
        }
    }

    useEffect(() => {
        if(!initialRender) {
            getGalleryCards(currentPage);
        }
    }, [currentPage]);

    return (
        <div className='relative max-w-screen-md md:max-w-screen-2xl min-h-screen flex justify-center items-center mx-auto h-auto pb-12'>
            <div className='flex flex-col mt-10 gap-12 w-full '>
                {/* Page title */}
                <div className='flex justify-center'>
                    <h1 className='font-bold font-poppins text-5xl text-primary-green drop-shadow-lg'>
                        Pet Gallery
                    </h1>
                </div>
                {/* Search bar and filters */}
                <div className='relative w-full mx-auto flex flex-col justify-center items-center gap-3'>
                    <h2>Search for Type of Pets: </h2>
                    <SearchBar onSearch={handleSearch}/>
                </div>
                {/* Search Result Cards */}
                <div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 z-10 justify-items-center content-center w-full'>
                    {loading ? (
                        <div className='col-span-4'>
                            <LoadingSpinner />
                        </div>
                    ) : galleryCards.length > 0 ? galleryCards.map((pet) => (
                        <Link 
                            key={pet.pet_id}
                            href={{
                                pathname: `/adoption/${pet.pet_id}`,
                                query: { pet_id: pet.pet_id },
                            }}
                            className='w-full flex justify-center h-[360px] sm:h-[480px]'
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
                        <p className='col-span-full'>
                            {totalPages > 0 ? <LoadingSpinner /> : "None Found"}
                        </p>
                    )}
                </div>

                {/* Pagination Buttons */}
                <div className='flex justify-center gap-4'>
                    <button
                        disabled={currentPage === 1}
                        hidden = {currentPage === 1}
                        onClick={() => handlePageChange(currentPage-1)}
                        className='p-3 bg-green-400 rounded-lg w-32 hover:translate-y-[-5px] hover:bg-green-500 shadow-md'
                    >
                        Previous
                    </button>

                    <div className='flex justify-center items-center'>
                        {totalPages > 0 ? `${currentPage} / ${totalPages} pages ` : "0 record"}
                    </div>

                    <button
                        disabled={currentPage === totalPages}
                        hidden = {currentPage === totalPages || totalPages === 0}
                        onClick={() => handlePageChange(currentPage+1)}
                        className='p-3 bg-blue-400 rounded-lg w-32 hover:translate-y-[-5px] hover:bg-blue-500 shadow-md'
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdoptionPage