import {FaPaw} from 'react-icons/fa';

interface CharacteristicsProps {
    content : string;
}

const CharacteristicsItem = ({content}: CharacteristicsProps) => {
  return (
    <li className='flex gap-2'>
        <FaPaw className="text-primary-green"/>
        {content} 
    </li> 
  )
}

export default CharacteristicsItem