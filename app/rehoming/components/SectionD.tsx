import { FormProps } from '@/app/interfaces';
import { Header } from '@/components';
import LargeTextFieldForm from './LargeTextFieldForm';

const SectionD = ({formData, handleFormInput, handlePrevious, handleSubmit} : FormProps) => {
  return (
    <div className="flex flex-col min-h-fit">
      <Header content="Rehoming Reason" />

      <LargeTextFieldForm 
        fieldTitle="Reason: "
        field_id="reason"
        value={formData.reason}
        onChange={() => handleFormInput}
      />
      
      <div className='flex justify-center gap-4 my-4'>
        <input 
          type='checkbox'
          name='terms'
          id='terms'
          // value={formData.terms}
          onChange={() => handleSubmit}
        />
        <label className='text-2xl' htmlFor='terms'>I agree to the Terms and Conditions</label>
      </div>

      <div className="my-3 flex justify-between mx-12 mb-6">
        <button onClick={handlePrevious} className="bg-primary-green h-16 w-40 rounded-md text-white hover:bg-green-700 text-2xl">
            Previous
        </button>
        <button onClick={handleSubmit} className="bg-orange-400 h-16 w-40 rounded-md text-white hover:bg-orange-700 text-2xl">
            Submit
        </button>
      </div>
    </div>
  )
}

export default SectionD