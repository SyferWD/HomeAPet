import { FormTextFieldProps } from "@/app/interfaces";

const TextFieldForm = ({fieldTitle,field_id, value, onChange, fieldGuide} : FormTextFieldProps) => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-0 md:gap-2 items-start md:items-center">
      <label htmlFor={field_id} className="text-start md:text-end text-primary-blue text-lg basis-0 md:basis-1/4">
        {fieldTitle}
      </label>
      <div className="flex flex-col basis-0 w-full md:basis-3/4">
        <input
          type="text"
          name={field_id}
          id = {field_id}
          defaultValue={value}
          onChange={onChange}
          required
          className="border-2 border-gray-400 rounded-lg px-3 py-1 focus:outline-none focus:border-0 focus:ring-4 focus:ring-blue-300"
        />
        {fieldGuide && 
          <p className="text-red-400 text-xs mt-1 text-center">
            ( {fieldGuide} )
          </p>
        }
      </div>
      
      
    </div>
  );
};

export default TextFieldForm;
