import { FormProps } from "@/app/interfaces";
import TextFieldForm from "./TextFieldForm";
import RadioFieldForm from "./RadioFieldForm";
import FormSectionHeader from "./FormSectionHeader";
import FormSectionContainer from "./FormSectionContainer";
import NextButtonForm from "./NextButtonForm";

const SectionA = ({ formData, handleFormInput, handleNext, formErrors }: FormProps) => {
  return (
    <FormSectionContainer>

      {/* Display error message for fields with error */}
      {formErrors &&
        (formErrors.A) && (
          <div className="flex flex-col gap-1">
            {Object.keys(formErrors.A).map((key: string) => (
              <p 
                key={key} 
                className="bg-red-200 text-red-800 py-1 px-2 rounded text-xs xl:text-xl text-center"
              >
                {(formErrors.A[key])}
              </p>
            ))}
          </div>
        )}

      <FormSectionHeader content="Pet Information" />

      <TextFieldForm
        fieldTitle="Pet Name: "
        field_id= "name"
        value={formData.name}
        onChange={(e) => handleFormInput(e)}
      />

      <TextFieldForm
        fieldTitle="Species: "
        field_id = "type"
        value={formData.type}
        onChange={(e) => handleFormInput(e)}
      />

      <TextFieldForm
        fieldTitle="Breed: "
        field_id="breed"
        value={formData.breed}
        onChange={(e) => handleFormInput(e)}
      />

      <TextFieldForm
        fieldTitle="Fur Color: "
        field_id="color"
        value={formData.color}
        onChange={(e) => handleFormInput(e)}
      />

      <RadioFieldForm
        fieldTitle="Gender: "
        option_1="Male"
        option_2="Female"
        value={formData.gender}
        onChange={(e) => handleFormInput(e)}
        field_id="gender"
      />

      <TextFieldForm
        fieldTitle="Age: "
        field_id="age"
        value={formData.age}
        onChange={(e) => handleFormInput(e)}
        fieldGuide="Only 'X years' or 'X years Y months' accepted"
      />

      <div className="w-full flex justify-end">
        <NextButtonForm handleNext={handleNext} />
      </div>
    </FormSectionContainer>
  );
};

export default SectionA;
