import { FormProps } from '@/app/interfaces';
import { Header } from '@/components';
import RadioFieldForm from './RadioFieldForm';
import LargeTextFieldForm from './LargeTextFieldForm';

const SectionB = ({formData, handleFormInput, handleNext, handlePrevious} : FormProps) => {
  return (
    <div className="flex flex-col min-h-fit">
      <Header content="Health & Training Information" />

      <RadioFieldForm 
        fieldTitle='Toilet Trained: '
        field_id='toilet_trained'
        option_1='Yes'
        option_2='No'
        option_3='In Progress'
        value={formData.toilet_trained}
        onChange={() => handleFormInput}
      />

      <RadioFieldForm 
        fieldTitle='Vaccinated: '
        field_id='vaccination'
        option_1='Yes'
        option_2='No'
        value={formData.vaccination}
        onChange={() => handleFormInput}
      />

      <LargeTextFieldForm 
        fieldTitle="Medical Condition: "
        field_id="Medical"
        value={formData.medical_condition}
        onChange={() => handleFormInput}
      />

      <div className="my-3 flex justify-between mx-12 mb-6">
        <button onClick={handlePrevious} className="bg-primary-green h-16 w-40 rounded-md text-white hover:bg-green-700 text-2xl">
            Previous
        </button>
        <button onClick={handleNext} className="bg-primary-blue h-16 w-40 rounded-md text-white hover:bg-blue-700 text-2xl">
            Next
        </button>
      </div>
    </div>
  )
}

export default SectionB