'use client';
import { useSearchParams } from "next/navigation";
import Adoption_PetInfo_Cell from "./components/Adoption_PetInfo_Cell"
import CharacteristicsItem from "./components/CharacteristicsItem"
import PetCarousel from "./components/PetCarousel"
import Image from "next/image";
import { useEffect, useState } from "react";
import AdoptionForm from "./components/AdoptionForm";
import LoadingSpinner from "@/app/components/LoadingSpinner";

interface Pet {
    pet_id: number;
    name: string;
    species: string;
    breed: string;
    color: string;
    age: string;
    gender: string;
    description: string;
    medical_condition: string;
    petURL: string;
    user_id: number;
    created_at: string;
    updated_at: string;
    characteristics: PetCharacteristics[];
}

interface PetCharacteristics {
    [key: string]: boolean | number;
}

interface FilteredPetCharacteristics {
    [key: string]: boolean;
}

const AdoptionPetInfoPage = () => {

    const [petData, setPetData] = useState<Pet>();
    const [filteredPetChar, setFilteredPetChar] = useState<FilteredPetCharacteristics[]>()

    const paramsData = useSearchParams();
    
    const petID = paramsData.get("pet_id");

    const filterCharacteristics = (characteristicsArray: PetCharacteristics[] | undefined) => {
        if(!characteristicsArray){
            return
        }
        return characteristicsArray.map((characteristic) => {
          const properties: Record<string, boolean> = {};
          for (const key in characteristic) {
            if (characteristic[key] === true) {
                properties[key] = true;
            }
          }
          return properties;
        });
      };

    useEffect(() => {
        let isMounted = true;
        const getPetData = async () => {
            if(petID) {
                try {
                    const petDataResults = await fetch(`/api/petByID?pet_id=${petID}`, {
                        headers : {
                            "Content-Type" : "application/json"
                        },
                        method: "GET"
                    })
                    
                    const petDataRes = await petDataResults.json()
                    if(isMounted) {
                        setPetData(petDataRes.requestedPet);
                    }
                } catch (error) {
                    console.error("Error fetching pet data:", error);
                }
            }
        };

        getPetData();

        return () => {
            isMounted = false;
        }
    }, [petID]);

    useEffect(()=> {
        if(petData) {
            setFilteredPetChar(filterCharacteristics(petData.characteristics));
        }
    }, [petData]);

  return (
    <>
        {/* Pet Information Section */}
        <div className='relative flex flex-col lg:flex-row justify-center items-stretch h-auto max-w-screen-2xl mx-auto mt-12 pb-8'>
            <div className='basis-1/2 h-auto w-auto flex justify-center items-center bg-black rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none'>
                {petData?.petURL ? (
                    <Image 
                        src={petData.petURL}
                        alt="Image of Pet"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className='object-contain overflow-hidden w-full h-auto max-h-[50vh]'
                    />
                ) : (
                    <LoadingSpinner />
                )}
            </div>
            <div className='basis-1/2 h-auto w-auto flex flex-col gap-6 justify-center items-center bg-green-50 rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none p-10 shadow-lg'>
                <Adoption_PetInfo_Cell 
                    header='Name | (Type of Pet):'
                    content={petData ? `${petData?.name} ( ${petData?.species} )`: "Loading..."}
                    size='w-4/5 text-2xl'
                />
                <div className='flex-1 flex gap-6 justify-center items-stretch w-4/5 h-auto'>
                    <Adoption_PetInfo_Cell 
                        header='Breed'
                        content={petData ? petData.breed : "Loading.."}
                        size='w-full'
                    />
                    <Adoption_PetInfo_Cell 
                        header='Color'
                        content={petData ? petData.color : "Loading..."}
                        size='w-full'
                    />
                </div>
                <div className='flex-1 flex gap-6 justify-center items-stretch w-4/5 h-auto'>
                    <Adoption_PetInfo_Cell 
                        header='Gender'
                        content={petData ? petData.gender : "Loading..."}
                        size='w-full'
                    />
                    <Adoption_PetInfo_Cell 
                        header='Age'
                        content={petData ? petData.age : "Loading..."}
                        size='w-full text-sm md:text-base'
                    />
                </div>
                <Adoption_PetInfo_Cell 
                    header='Medical Condition (If Any)'
                    content={petData ? petData.medical_condition : "Loading..."}
                    size='w-4/5'
                />
            </div>
        </div>

        {/* Pet description, characteristics section */}
        <div className='relative flex flex-col lg:flex-row justify-center items-center h-fit mx-auto mt-12 bg-zinc-200 py-6'>
            <div className='flex flex-col lg:flex-row w-4/5 max-w-screen-2xl gap-8'>
                <div className='relative basis-2/3 flex-col flex gap-10 lg:gap-18'>
                    <div className=' w-full bg-white py-6 rounded-lg shadow-md min-h-[256px] h-fit'>
                        <div className='flex justify-start p-6'>
                            <h2 className='font-bold text-2xl text-primary-green '>
                                Reasons for rehoming
                            </h2>
                        </div>
                        <div className='px-6'>
                            <p>
                                {petData ? petData.description : "Loading..."}
                            </p>
                        </div>
                    </div>
                    <div className='w-full bg-white rounded-lg shadow-md p-6 min-h-[128px] h-fit'>
                        <h2 className=' text-primary-green font-semibold text-2xl'>
                            Characteristics 
                        </h2>
                        <ul className='flex gap-6 my-6 flex-wrap'>
                            {filteredPetChar?.map((char) => (
                                Object.keys(char).map((key) => (
                                    <CharacteristicsItem key={key} content={key.replaceAll('_', " ")} />
                                ))
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className='basis-1/3 bg-white shadow-md rounded-lg p-6 flex flex-col justify-center  min-h-[384px] h-fit '>
                    <div className='border-4 border-dotted border-green-500 flex flex-col p-4 rounded-2xl'>
                        <p className='text-center'>Love <span className=" capitalize text-primary-green text-xl">{petData?.name}</span>? Give it a home. We will provide animal loving volunteers who will visit and guide you to provide your new loving pet a comfortable home. Fill in the form below.</p>
                        <AdoptionForm pet_id={Number(petID)} />
                    </div>
                </div>
            </div>
        </div>
        {petData && (
            <PetCarousel species={petData.species} pet_ID = {petData.pet_id}/>
        )}
    </>
  )
}

export default AdoptionPetInfoPage