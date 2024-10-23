import { useState } from 'react'
import { searchbarProps } from '../constants';

const SearchBar = ({ onSearch } : searchbarProps ) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='flex gap-2 md:gap-4 w-full px-2 justify-center'>
      <input
        type="text"
        placeholder="Search by pet type"
        value={searchTerm}
        onChange={(e) => setSearchTerm((e.target.value).toLowerCase())}
        className='basis-4/5 bg-gray-200 rounded-2xl pl-4 h-[48px] max-w-[650px] focus:outline-none focus:border-0 focus:ring-4 focus:ring-blue-300'
      />
      <button onClick={handleSearch}
        className='basis-1/5 max-w-[190px] h-[48px] shadow-xl rounded-md bg-green-400 text-white hover:bg-green-600'
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar