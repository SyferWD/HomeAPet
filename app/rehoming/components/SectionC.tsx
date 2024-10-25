import { FormProps } from "@/app/interfaces";
import { Header } from "@/components";
import CheckBoxFieldForm from "./CheckBoxFieldForm";
import PrevButtonForm from "./PrevButtonForm";
import NextButtonForm from "./NextButtonForm";
import FormSectionContainer from "./FormSectionContainer";
import FormSectionHeader from "./FormSectionHeader";

const SectionC = ({formData, handleFormInput, handleNext, handlePrevious} : FormProps) => {
  return (
    <FormSectionContainer>
      <FormSectionHeader content="Pet Personality" />

      <div className="font-bold text-sm text-primary-blue md:text-base lg:text-xl">
        <p>Select the relevant traits:</p>
      </div>

      <CheckBoxFieldForm
        formData = {formData.characteristics}
        onChange = {(e) => handleFormInput(e)}
      />

      <div className="flex justify-between">
        <PrevButtonForm handlePrev={handlePrevious} />
        <NextButtonForm handleNext={handleNext} />
      </div>
    </FormSectionContainer>
  )
}

export default SectionC