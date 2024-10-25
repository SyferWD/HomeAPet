
interface NextButtonFormProp {
    handleNext?: () => void;
}

const NextButtonForm = ( {handleNext}: NextButtonFormProp) => {
  return (
    <button 
        onClick={handleNext} 
        className="bg-primary-blue rounded-md py-2 px-8 md:py-3 md:text-lg font-normal md:font-semibold text-white hover:bg-blue-700"
    >
        Next
    </button>
  )
}

export default NextButtonForm