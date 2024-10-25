import { FormProps } from '@/app/interfaces';
import { Header } from '@/components';
import FormSectionContainer from './FormSectionContainer';
import FormSectionHeader from './FormSectionHeader';
import PrevButtonForm from './PrevButtonForm';

const SectionD = ({formData, handleFormInput, handlePrevious, formErrors} : FormProps) => {
  return (
    <FormSectionContainer>

      {/* Display error message for the empty 'reason' field */}
      {formErrors && formErrors.D && (
        <p className="bg-red-200 text-red-800 py-2 px-4 rounded text-2xl text-center">
          {formErrors.D.reason}
        </p>
      )}

      <FormSectionHeader content="Rehoming Reason" />

      <div className="flex flex-col gap-2">
        <label 
          htmlFor='reason' 
          className=" text-primary-blue text-base md:text-xl"
        >
          Reason: 
        </label>
        
        <textarea
          onChange={(e) => handleFormInput(e)}
          placeholder='List main reason for rehoming (Eg. Can no longer afford / Change in life situation )'
          rows={4}
          // Enable automatic line wrapping
          wrap="soft"
          required
          itemType='text'
          name='reason'
          defaultValue={formData.reason}
          id="reason"
          className='overflow-auto border min-h-48 lg:min-h-60 border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-0 focus:ring-4 focus:ring-blue-300'
        />
      </div>

      <div className="flex justify-between">
        <PrevButtonForm handlePrev={handlePrevious} />
        <button type='submit' className="bg-orange-400 rounded-md py-2 px-8 md:py-3 md:text-lg font-normal md:font-semibold text-white hover:bg-orange-700">
            Submit
        </button>
      </div>
    </FormSectionContainer>
  )
}

export default SectionD