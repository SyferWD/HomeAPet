import React from 'react'

const SearchBar = () => {
  return (
    <form>
        <input 
            type='text'
            name='animal_type'
            placeholder='Dog...'
            className='bg-gray-200 rounded-2xl pl-4 h-[48px] w-[650px] focus:outline-none focus:border-0 focus:ring-4 focus:ring-blue-300'
        />
    </form>
  )
}

export default SearchBar