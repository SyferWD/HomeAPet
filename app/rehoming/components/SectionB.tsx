import { FormProps } from '@/app/interfaces';
import FormSectionHeader from './FormSectionHeader';
import FormSectionContainer from './FormSectionContainer';
import NextButtonForm from './NextButtonForm';
import PrevButtonForm from './PrevButtonForm';

const SectionB = ({formData, formErrors, imageProps, handleFormInput, handleNext, handlePrevious, handleImageInput, imageError} : FormProps) => {
  return (
    <FormSectionContainer >

      {/* Display error message for the empty image field */}
      {formErrors && formErrors.B && (
        <p className="bg-red-200 text-red-800 py-1 px-2 rounded text-xs xl:text-xl text-center">
          {formErrors.B.image}
        </p>
      )}

      <FormSectionHeader content="Health Information & Photograph" />

      <div className="flex flex-col gap-2">
        <label 
          htmlFor='medical_condition' 
          className=" text-primary-blue text-base lg:text-lg"
        >
          Medical Condition: 
        </label>
        
        <textarea
          onChange={handleFormInput}
          placeholder='List existing medical conditions here...'
          rows={4}
          // Enable automatic line wrapping
          wrap="soft"
          itemType='text'
          name='medical_condition'
          defaultValue={formData.medical_condition}
          id="medical_condition"
          className='overflow-auto border min-h-48 lg:min-h-60 border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-0 focus:ring-4 focus:ring-blue-300'
        />
      </div>

      {imageError && 
        <p className='bg-red-200 text-red-800 py-2 px-4 rounded text-base md:text-2xl text-center'>
          {imageError}
        </p>}

      <div className='flex flex-col gap-2'>
        <label className=' text-primary-blue text-base lg:text-lg'>
          Image Upload: 
        </label>
        <div className='flex flex-col gap-2'>
          <input type="file" accept="image/jpeg, image/png, image/gif" 
            onChange={handleImageInput} 
            className='text-xs lg:text-sm'
          />
          <p className='text-red-500 text-xs lg:text-sm'>
            ( Please upload only JPEG, PNG, or GIF images. Max 32mb.)
          </p>
          <p className='text-xs lg:text-sm text-primary-blue'>
            Image Filename: 
            <span className='text-xs lg:text-sm text-red-500'> {imageProps}</span>
          </p>
        </div>
        
      </div>

      <div className="flex justify-between">
        <PrevButtonForm handlePrev={handlePrevious} />
        <NextButtonForm handleNext={handleNext} />
      </div>
    </FormSectionContainer>
  )
}

export default SectionB