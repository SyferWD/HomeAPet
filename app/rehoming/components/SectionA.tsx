import { FormProps } from "@/app/interfaces";
import { Header } from "@/components";
import TextFieldForm from "./TextFieldForm";
import Link from "next/link";
import RadioFieldForm from "./RadioFieldForm";

const SectionA = ({ formData, handleFormInput, handleNext }: FormProps) => {
  return (
    <div className="flex flex-col min-h-fit">
      <Header content="Pet Information" />

      <TextFieldForm
        fieldTitle="Pet Name: "
        field_id= "Name"
        value={formData.name}
        onChange={() => handleFormInput}
      />

      <TextFieldForm
        fieldTitle="Type of Animal: "
        field_id = "Type"
        value={formData.type}
        onChange={() => handleFormInput}
      />

      <TextFieldForm
        fieldTitle="Breed: "
        field_id="Breed"
        value={formData.breed}
        onChange={() => handleFormInput}
      />

      <TextFieldForm
        fieldTitle="Fur Color: "
        field_id="Color"
        value={formData.color}
        onChange={() => handleFormInput}
      />

      <RadioFieldForm
        fieldTitle="Gender: "
        option_1="Male"
        option_2="Female"
        value={formData.gender}
        onChange={() => handleFormInput}
        field_id="Gender"
      />

      <TextFieldForm
        fieldTitle="Age: "
        field_id="Age"
        value={formData.age}
        onChange={() => handleFormInput}
      />

      <div className="my-3 flex justify-end mr-12 mb-6">
        <button onClick={handleNext} className="bg-primary-blue h-16 w-40 rounded-md text-white hover:bg-blue-700 text-2xl">
            Next
        </button>
      </div>
    </div>
  );
};

export default SectionA;
