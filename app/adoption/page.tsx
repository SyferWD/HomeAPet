import { prisma } from "@/lib/prisma";
import AdoptionPage from "./components/AdoptionPage";


const Page = async () => {

    // Retrieve request amount of pets with pagination
    const initialPets = await prisma.pet.findMany({
        skip: 0,
        take: 5,
        include: {
            characteristics: true // Include the characteristics field
        }
    });

    // Retrieve total number of pets
    const totalNumOfPets = await prisma.pet.count();

    return (
        <AdoptionPage 
            initialPets={initialPets}
            totalNumofPets={totalNumOfPets}
        /> 
        
    )
}

export default Page