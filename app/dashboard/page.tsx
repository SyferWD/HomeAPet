'use client';
import { useState, useEffect } from 'react';
import { Header } from "@/components"
import DashboardContainer from "./components/DashboardContainer"
import AdoptionDashBoardCard from "./components/AdoptionDashBoardCard"
import VolunteerAppDashBoardCard from "./components/VolunteerAppDashBoardCard"
import RehomingListingDashBoardCard from "./components/RehomingListingDashBoardCard"
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { adoptionApplicationType, rehomingApplicantsType } from './constants';
import LoadingSpinner from '../components/LoadingSpinner';

const DashBoardPage = () => {

    const [adoptionApplications, setAdoptionApplications] = useState<adoptionApplicationType[]>([]);
    const [rehomingApplicants, setRehomingApplicants] = useState<rehomingApplicantsType[]>([]);
    const [volunterStatus, setVolunteerStatus] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const { user_email } = useAuth();

    const getDashBoardData = async () => {
        try {
            const res = await fetch('/api/dashboard', {
                headers: {
                    'Content-Type' : "application/json"
                },
                method: "POST",
                body: JSON.stringify({user_email}),
            })

            if(!res.ok) {
                throw new Error("Network error, please try again");
            }

            const data = await res.json();

            setAdoptionApplications(data.petAdoptionApplicationData);
            setRehomingApplicants(data.rehomingApplicantsData);
            setVolunteerStatus(data.volunteerApplicationData);
        } catch (error) {
            return
        } finally {
            setLoading(false);  // Set loading to false after data is fetched
        }
    }

    useEffect(() => {
        getDashBoardData();
    }, [])

    if(loading) {
        return (
            <div className='h-full items-center'>
                <LoadingSpinner />
            </div>
        )
    }
    

    return (
        <div className="w-screen mb-12">
            <Header content="Dashboard" />
            <div className="flex flex-col justify-center gap-10">

                <DashboardContainer
                    border_color="border-green-600"
                    header_bg_color="bg-primary-green"
                    content_bg_color="bg-green-200"
                    header_title="Listed Pets For Rehoming"
                >
                    {rehomingApplicants.length > 0 ? (
                        <div className="py-12 flex flex-wrap gap-10 justify-center">
                            {rehomingApplicants.map((pet, index) => (
                                <RehomingListingDashBoardCard 
                                    key={index} 
                                    petURL={pet.petURL}  
                                    applicants = {pet.applicants}
                                />
                            ))}
                        </div>)
                        : (
                            <div className='h-32 flex items-center'>
                                No rehoming application.
                            </div>
                        )
                        
                    }
                </DashboardContainer>

                <DashboardContainer
                    border_color="border-blue-600"
                    header_bg_color="bg-primary-blue"
                    content_bg_color="bg-blue-200"
                    header_title="Adoption Application Status"
                >   
                    {adoptionApplications.length > 0 ? (
                        <div className="py-12 flex flex-wrap gap-10 justify-center">
                            {adoptionApplications.map((application, index) => (
                                <AdoptionDashBoardCard key={index} 
                                    petURL={application.petURL} 
                                    petName = {application.petName} 
                                    petBreed = {application.petBreed}
                                />
                            ))}
                        </div>)
                        : (
                            <div className='h-32 flex items-center'>
                                No adoption application.
                            </div>
                        )
                        
                    }
                    
                </DashboardContainer>

                <DashboardContainer
                    border_color="border-orange-600"
                    header_bg_color="bg-primary-orange"
                    content_bg_color="bg-orange-200"
                    header_title="Volunteer Application Status"
                >
                    
                    {volunterStatus ? (
                        <div className="py-12">
                            <VolunteerAppDashBoardCard />
                        </div>
                    ) : (
                        <div className="h-32 flex items-center">
                            No Volunteer application.
                        </div>
                    )}
                </DashboardContainer>

            </div>
        </div>
    )
}

export default DashBoardPage