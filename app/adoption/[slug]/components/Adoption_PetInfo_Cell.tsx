
interface Adoption_PetInfoProps {
    header: string;
    content : string;
    size: string;
}

const Adoption_PetInfo_Cell = ({header, content, size} : Adoption_PetInfoProps) => {
  return (
    <div className={`flex-1 flex flex-col justify-center items-center bg-white h-full rounded-t-2xl shadow-md ${size}`}>    
        <div className='flex flex-1 justify-center items-center text-center bg-green-300 w-full h-full rounded-t-md font-semibold text-xl font-poppins py-2'>
          {header}
        </div>
        <div className='flex-1 flex justify-center items-center py-3 capitalize text-center min-h-16'>
          {content}
        </div>
    </div>
  )
}

export default Adoption_PetInfo_Cell