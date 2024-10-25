'use client';
import Image from 'next/image';
import { useState } from 'react';
import { rehomingApplicantsType } from '../constants';

interface PetCardProps {
  petImage: string;
  interestedAdoptersCount: number;
}

const RehomingListingDashBoardCard = ( {petURL, applicants} : rehomingApplicantsType) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

    const renderInterestedAdopters = () => {
        if (isExpanded) {
            // You can fetch and render adopter details here from your data source
            return (
                <div className='flex gap-3 flex-col mt-3 p-3 border-2 rounded-md border-green-300'>
                    {applicants.length > 0 ? applicants.map((applicant, index) => (
                        <>
                            <div 
                                className='text-center' 
                                key={index}
                            >
                                <p className='font-bold font-poppins'>
                                    Applicant: 
                                    <span className='font-normal'> 
                                    {" "}{applicant.applicant_name} 
                                    </span>
                                </p>
                                <p className='font-bold font-poppins'>
                                    Contact Number: 
                                    <span className='font-normal'>
                                        {" "}{applicant.applicant_phone}
                                    </span>
                                </p>
                            </div>
                            <button 
                                className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-700"
                                onClick={() => alert("A staff will email you shortly to set up a zoom meeting to meet up with the potential adopters to help you better decide. Look out for the email.")}    
                            >
                                Accept & Schedule Interview
                            </button>
                        </>
                    )): (
                        <p className='w-full text-center bg-green-500 text-white rounded-md py-2'>
                            No applicants yet
                        </p>
                    )}
                    
                </div>
            );  
        }

    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg shadow-green-300 p-4 h-fit">
        <div className='flex justify-center'>
            <Image 
                src={petURL}
                alt="Pet Image" 
                width={0}
                height={0}
                sizes='100vw'
                className="object-cover overflow-hidden rounded-md w-full h-auto max-h-36 "  
            />
        </div>
        
        <div className="text-black font-bold rounded-md bg-green-200 py-2 px-4 mt-4 text-center cursor-pointer hover:bg-green-500"
            onClick={toggleExpansion}
        >
            <p>Interested Adopters: {applicants.length} </p>
            <p>Click</p>
        </div>
        {renderInterestedAdopters()}
    </div>
  );
};

export default RehomingListingDashBoardCard