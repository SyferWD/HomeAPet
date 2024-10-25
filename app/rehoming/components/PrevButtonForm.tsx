
interface PrevButtonFormProp {
    handlePrev?: () => void;
}

const PrevButtonForm = ( {handlePrev}: PrevButtonFormProp) => {
  return (
    <button 
        onClick={handlePrev} 
        className="bg-primary-green rounded-md py-2 px-6 md:py-3 md:text-lg font-normal md:font-semibold text-white hover:bg-green-700"
    >
        Previous
    </button>
  )
}

export default PrevButtonForm